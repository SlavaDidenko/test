
import saveImageToServer from '../../saveImageToServer';

export class Next {

  static get toolbox() {
    return {
      title: 'Next',
      icon: `<svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
              <path d="M461.248,194.736l-128-128c-24.928-24.96-65.568-24.96-90.496,0C230.656,78.8,224,94.896,224,111.984s6.656,33.184,18.752,45.248l82.752,82.752l-82.752,82.752C230.656,334.832,224,350.896,224,367.984s6.656,33.152,18.752,45.248c12.096,12.096,28.16,18.752,45.248,18.752s33.152-6.656,45.248-18.752l128-128C473.344,273.168,480,257.072,480,239.984S473.344,206.8,461.248,194.736z M438.624,262.608l-128,128c-12.128,12.096-33.12,12.096-45.248,0c-12.48-12.48-12.48-32.768,0-45.248l105.376-105.376L265.376,134.608c-6.048-6.048-9.376-14.08-9.376-22.624s3.328-16.576,9.376-22.624c6.24-6.24,14.432-9.376,22.624-9.376c8.192,0,16.384,3.136,22.624,9.344l128,128c6.048,6.08,9.376,14.112,9.376,22.656S444.672,256.56,438.624,262.608z"/>
              <path d="M237.248,194.736l-128-128c-24.928-24.96-65.568-24.96-90.496,0C6.656,78.8,0,94.896,0,111.984s6.656,33.184,18.752,45.248l82.752,82.752l-82.752,82.752C6.656,334.832,0,350.896,0,367.984s6.656,33.152,18.752,45.248c12.096,12.096,28.16,18.752,45.248,18.752s33.152-6.656,45.248-18.752l128-128C249.344,273.168,256,257.072,256,239.984S249.344,206.8,237.248,194.736z M214.624,262.608l-128,128c-12.128,12.096-33.12,12.096-45.248,0c-12.48-12.48-12.48-32.768,0-45.248l105.376-105.376L41.376,134.608C35.328,128.56,32,120.528,32,111.984s3.328-16.576,9.376-22.624c6.24-6.24,14.432-9.376,22.624-9.376s16.384,3.136,22.624,9.344l128,128c6.048,6.08,9.376,14.112,9.376,22.656S220.672,256.56,214.624,262.608z"/>
            </svg>
`
    };
  }

  constructor({ data, api }){

    this.nodes = {
      wrapper: null
    }

    this.preloaded = false;
    this.data = {};

    if( Object.keys(data).length > 0 ){
      this.data = data;
      this.preloaded = true;
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = ''){

    let child = document.createElement('div');

    child.innerHTML = `
                <div class="ce-next__item _next_item">
                    <div class="ce-next__itemWrap">                          
                        <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Text
                            </div>
                            <div contenteditable="true" class="ce-tool__field _next_item_text">${data}</div>
                        </div>
                    </div>

                    <button class="ce-next__itemDelete ce-tool-delete _next_item_delete" type="button">
                        <img src="/img/editor/trash.svg" alt="">
                    </button>
                </div>
            `;

    // const baseSelector = '._next_item_';
    //
    // if(Object.keys(data).length > 0) {
    //   for(const item in data) {
    //     if(item in data) {
    //       const elem = child.querySelector(baseSelector + item);
    //       if(elem) {
    //           elem.innerHTML = data[item]
    //       }
    //     }
    //   }
    // }

    child.querySelector('._next_item_delete').addEventListener('click', () => {
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

    const preview = '/img/editor/file-load-placeholder.svg'

    node.innerHTML = `
            <div class="ce-next">
                <header class="ce-tool-head ce-next__head">
                    <h2 class="ce-tool-head__title"> Next </h2>
                </header>
                <div class="container-fluid ce-tool-body ce-next__body">
                    <div class="row ce-next__body-wrap">
                        <div class="col-6">
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Title
                            </div>
                            <div contenteditable="true" class="ce-tool__field _next_coll_title"></div>
                          </div>
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Text
                            </div>
                            <div contenteditable="true" class="ce-tool__field _next_coll_text"></div>
                          </div>
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                List title
                            </div>
                            <div contenteditable="true" class="ce-tool__field _next_coll_listTitle"></div>
                          </div>
                          <button class="ce-tool-head__btn ce-next__featureSlot _next_add_slot" type="button" > add list item </button>
                          <div class="_next_coll_body"></div>
                        </div>
                        <div class="col-6">
                            <div class="ce-tool__item">
                                  <div class="ce-tool__label">
                                      Image
                                  </div>
                                  <label class="ce-tool__item-file">
                                      <img class="_image-node _next_coll_img" src="${preview}">
                                      <input type="file" class="admin-form__input _image-input _next_coll_img_input" accept="image/*" value="" data-loaded="">
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;


    if( this.preloaded  ){
      const baseSelector = '._next_coll_';
      for(const item in this.data) {
        if(item in this.data) {
          const elem = node.querySelector(baseSelector + item);
          if(elem) {
            if(item === 'img') {
              elem.src = this.data[item];
              node.querySelector(`${baseSelector}${item}`).src = this.data[item]
              node.querySelector(`${baseSelector}${item}_input`).dataset.loaded = this.data[item];
            } else {
              elem.innerHTML = this.data[item]
            }
          }
        }
      }
      this.data.list.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._next_coll_body').appendChild( child );
      });
    }

    node.querySelector('._next_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._next_coll_body').appendChild( child );
    });


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
      }
    }

    const image = node.querySelector( '._image-node' );
    const input = node.querySelector( '._image-input' );
    input.addEventListener( 'change', ChangeImage(image)  );

    this.nodes.body = node.querySelector('._next_coll_body');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      title: node.querySelector('._next_coll_title').innerHTML,
      text: node.querySelector('._next_coll_text').innerHTML,
      listTitle: node.querySelector('._next_coll_listTitle').innerHTML,
      list: [...node.querySelectorAll('._next_item_text')].map(item => item.innerHTML),
      img: node.querySelector('._image-input').dataset.loaded
    }
  }
}



export default Next;