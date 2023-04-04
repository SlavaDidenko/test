
import saveImageToServer from '../../saveImageToServer';

export class Gallery {

  static get toolbox() {
    return {
      title: 'gallery',
      icon: `<svg height="15" viewBox="0 0 510 510" width="15" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="m0 150h174v-150h-174zm30-120h114v90h-114z"/>
                    <path d="m0 510h174v-326h-174zm30-296h114v129.974l-36.184 30.153-44.816-14.938-33 11zm0 187.811 33-11 51.184 17.061 29.816-24.846v96.974h-114z"/>
                    <path d="m208 510h302v-174h-302zm30-144h242v114h-242z"/>
                    <path d="m208 0v302h302v-302zm200 272h-98v-30.96c0-23.732 19.308-43.04 43.04-43.04h11.92c23.732 0 43.04 19.308 43.04 43.04zm-74-129c0-13.785 11.215-25 25-25s25 11.215 25 25-11.215 25-25 25-25-11.215-25-25zm146 129h-42v-30.96c0-26.96-14.694-50.538-36.483-63.192 29.291-35.671 3.835-89.848-42.517-89.848-46.388 0-71.792 54.196-42.517 89.848-21.789 12.654-36.483 36.232-36.483 63.192v30.96h-42v-242h242z"/>
                    <path d="m87.149 300.83c16.53 0 29.979-13.448 29.979-29.979s-13.448-29.979-29.979-29.979-29.979 13.448-29.979 29.979 13.448 29.979 29.979 29.979z"/>
                </g>
            </svg>`
    };
  }

  constructor({ data, api }){

    this.nodes = {
      wrapper: null
    }


    this.preloaded = false;
    this.data = {
      link: '',
      photos: []
    };

    if( data.photos ){
      this.data = data;
      this.preloaded = true;
    }


    // if( data.program_id ){
    //     this.data = {
    //       program_id: data.program_id,
    //       programList: {
    //           title_uk: data.title_uk,
    //           body_uk: data.body_uk,
    //           cover: data.cover,
    //       },
    //       uploaded: true,
    //       loaded: true
    //     }
    //     this.render();
    // }

    this.render = this.render.bind(this);
  }

  generateChild(img = ''){
    const preview = img ? img : '/images/admin/file-load-placeholder.svg';
    let child = document.createElement('div');

    child.innerHTML = `
                <div class="ce-gallery__item">
                    <div class="ce-gallery__itemWrap">
                        <label class="admin-form__label _showPreloadedImage">
                          <div class="admin-form__labelContainer admin-form__labelContainer--file">
                              <img class="_image-node" src="${preview}">
                              <input type="file" class="admin-form__input _image-input" accept="image/*" value="${img}" data-loaded="${img}">
                          </div>
                      </label>

                    </div>
                    <button class="ce-gallery__itemDelete ce-tool-delete _gallery_item_delete" type="button">
                        <svg height="25" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="red" d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/>
                            <path fill="red" d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                            <path fill="red" d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                            <path fill="red" d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                        </svg>
                    </button>
                </div>
            `;

    const ChangeImage = ( image_node ) => (e) => {
      let input = e.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
          image_node.setAttribute('src', e.target.result);
        });
        reader.readAsDataURL(input.files[0]);
        saveImageToServer(input.files[0], resp => {
          input.dataset.loaded = resp.file.url
        })
        this.save(this.nodes.wrapper)
      }
    }

    const image = child.querySelector( '._image-node' );
    const input = child.querySelector( '._image-input' );
    input.addEventListener( 'change', ChangeImage(image)  );

    child.querySelector('._gallery_item_delete').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
  }

  render() {

    let node;
    if( this.nodes.wrapper ){
      node = this.nodes.wrapper;
    } else {
      this.nodes.wrapper =  document.createElement('div');
      node = this.nodes.wrapper;
    }

    node.innerHTML = `
            <div class="ce-gallery">
                <header class="ce-tool-head ce-gallery__head">
                    <h2 class="ce-tool-head__title"> Галерея </h2>
                    <button class="ce-tool-head__btn ce-gallery__gallerySlot _gallery_add_slot" type="button" > Додати </button>
                </header>
                <input type="text" class="ce-gallery__input ce-tool-field _gallery_link" placeholder="Посилання на всі світлини">
                <div class="ce-gallery__body relative">
                    <div class="row ce-gallery__body-wrap _gallery_body"></div>
                </div>
            </div>
        `;


    if( this.preloaded  ){
      console.log(this.data)
      this.data.photos.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._gallery_body').appendChild( child );
      });
      node.querySelector('._gallery_link').value = this.data.link
    }
    // node.querySelector('._gallery_link').addEventListener('change', () => {
    //   this.save(this.nodes.wrapper);
    // });

    node.querySelector('._gallery_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._gallery_body').appendChild( child );
    });

    this.nodes.body = node.querySelector('._gallery_body');

    return this.nodes.wrapper;
  }
  save(gallery) {
    // console.log('[saved]', this.data );
    // return this.data;
    let result = {
      link: '',
      photos: []
    }
    const link = gallery.querySelector('._gallery_link').value
    if(link) {
      result.link = link
    }
    gallery.querySelectorAll('._image-input').forEach( item => {
      result.photos.push(item.dataset.loaded || '')
    });
    return result
  }
}



export default Gallery;