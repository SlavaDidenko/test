
import saveImageToServer from '../../saveImageToServer';

export class GalleryRow {

  static get toolbox() {
    return {
      title: 'gallery row',
      icon: `
        <svg height="17px" viewBox="0 -21 511.98744 511" width="17px" xmlns="http://www.w3.org/2000/svg">
            <path d="m377.652344 469.828125c-4.03125 0-8.148438-.511719-12.226563-1.578125l-329.898437-88.34375c-25.449219-7.019531-40.617188-33.34375-33.960938-58.773438l36.265625-139.070312c2.21875-8.535156 10.945313-13.71875 19.519531-11.433594 8.535157 2.21875 13.675782 10.964844 11.4375 19.519532l-36.269531 139.09375c-2.238281 8.574218 2.859375 17.425781 11.394531 19.773437l329.707032 88.300781c8.46875 2.238282 17.214844-2.796875 19.433594-11.222656l11.261718-45.441406c2.136719-8.574219 10.796875-13.78125 19.371094-11.6875 8.578125 2.132812 13.804688 10.792968 11.691406 19.367187l-11.304687 45.65625c-5.699219 21.609375-25.152344 35.839844-46.421875 35.839844zm0 0"/>
            <path d="m463.988281 341.828125h-330.667969c-26.472656 0-48-21.527344-48-48v-245.335937c0-26.472657 21.527344-48 48-48h330.667969c26.472657 0 48 21.527343 48 48v245.335937c0 26.472656-21.527343 48-48 48zm-330.667969-309.335937c-8.832031 0-16 7.167968-16 16v245.335937c0 8.832031 7.167969 16 16 16h330.667969c8.832031 0 16-7.167969 16-16v-245.335937c0-8.832032-7.167969-16-16-16zm0 0"/>
            <path d="m191.988281 149.828125c-23.53125 0-42.667969-19.136719-42.667969-42.667969s19.136719-42.667968 42.667969-42.667968 42.664063 19.136718 42.664063 42.667968-19.132813 42.667969-42.664063 42.667969zm0-53.335937c-5.890625 0-10.667969 4.78125-10.667969 10.667968 0 5.886719 4.777344 10.667969 10.667969 10.667969 5.886719 0 10.664063-4.78125 10.664063-10.667969 0-5.886718-4.777344-10.667968-10.664063-10.667968zm0 0"/>
            <path d="m101.746094 320.066406c-4.09375 0-8.191406-1.558594-11.304688-4.691406-6.25-6.25-6.25-16.386719 0-22.636719l96.425782-96.425781c14.59375-14.59375 38.335937-14.59375 52.90625 0l25.792968 25.792969 79.230469-95.105469c7.082031-8.492188 17.472656-13.398438 28.503906-13.460938 11.859375-.660156 21.460938 4.734376 28.605469 13.121094l106.199219 123.902344c5.757812 6.699219 4.96875 16.8125-1.730469 22.570312-6.71875 5.761719-16.808594 4.972657-22.570312-1.726562l-106.238282-123.945312c-1.410156-1.6875-3.136718-1.601563-4.097656-1.902344-.914062 0-2.6875.277344-4.09375 1.941406l-90.453125 108.589844c-2.882813 3.453125-7.082031 5.546875-11.5625 5.738281-4.566406.253906-8.875-1.496094-12.035156-4.671875l-38.183594-38.1875c-2.710937-2.710938-4.949219-2.710938-7.660156 0l-96.425781 96.40625c-3.117188 3.132812-7.210938 4.691406-11.308594 4.691406zm0 0"/>
        </svg>`
    };
  }

  constructor({ data, api }){

    this.nodes = {
      wrapper: null
    }


    this.preloaded = false;
    this.data = [];

    if( data.length > 0 ){
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
                <div class="ce-galleryRow__item">
                    <div class="ce-galleryRow__itemWrap">
                        <label class="admin-form__label _showPreloadedImage">
                          <div class="admin-form__labelContainer admin-form__labelContainer--file">
                              <img class="_row_image-node" src="${preview}">
                              <input type="file" class="admin-form__input _row_image-input" accept="image/*" value="${img}" data-loaded="${img}">
                          </div>
                      </label>

                    </div>
                    <button class="ce-galleryRow__itemDelete ce-tool-delete _row_item_delete" type="button">
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

    const image = child.querySelector( '._row_image-node' );
    const input = child.querySelector( '._row_image-input' );
    input.addEventListener( 'change', ChangeImage(image)  );

    child.querySelector('._row_item_delete').addEventListener('click', () => {
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
            <div class="ce-galleryRow">
                <header class="ce-tool-head ce-galleryRow__head">
                    <h2 class="ce-tool-head__title"> Фото-строка </h2>
                    <button class="ce-tool-head__btn ce-galleryRow__gallerySlot _row_add_slot" type="button" > Додати </button>
                    <span class="ce-tool-head__helpText">(Мінімум 2 світлини, максимум 4)</span>
                </header>
                <div class="ce-galleryRow__body relative">
                    <div class="row no-gutters ce-galleryRow__body-wrap _row_body"></div>
                </div>
            </div>
        `;


    if( this.preloaded  ){
      this.data.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._row_body').appendChild( child );
      });
    }
    // node.querySelector('._gallery_link').addEventListener('change', () => {
    //   this.save(this.nodes.wrapper);
    // });

    node.querySelector('._row_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._row_body').appendChild( child );
    });

    this.nodes.body = node.querySelector('._row_body');

    return this.nodes.wrapper;
  }
  save(gallery) {
    console.log('[saved-gallery-row]', this.data );
    // return this.data;
    let result = [];

    gallery.querySelectorAll('._row_image-input').forEach( item => {
      result.push(item.dataset.loaded || '')
    });
    return result
  }
}



export default GalleryRow;