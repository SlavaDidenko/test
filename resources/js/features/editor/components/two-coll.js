
import saveImageToServer from '../../saveImageToServer';

export class TwoColl {

  static get toolbox() {
    return {
      title: 'twoColl',
      icon: `<svg width="15" height="15" viewBox="0 0 16 16">
                <path fill="#444444" d="M0 2v13h15v-13h-15zM13 3h1v1h-1v-1zM7 14h-6v-9h6v9zM14 14h-6v-9h6v9z"></path>
            </svg>`
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
            <div class="ce-twoColl">
                <header class="ce-tool-head ce-twoColl__head">
                    <h2 class="ce-tool-head__title"> Two coll </h2>
                </header>
                <div class="container-fluid ce-tool-body ce-twoColl__body">
                    <div class="row ce-twoColl__body-wrap _two_coll_body">
                        <div class="col-6">
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Title
                            </div>
                            <div contenteditable="true" class="ce-tool__field _two_coll_title"></div>
                          </div>
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Text
                            </div>
                            <div contenteditable="true" class="ce-tool__field _two_coll_text"></div>
                          </div>
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Button title
                            </div>
                            <div contenteditable="true" class="ce-tool__field _two_coll_btn"></div>
                          </div>
                        </div>
                        <div class="col-6">
                            <div class="ce-tool__item">
                                  <div class="ce-tool__label">
                                      Image
                                  </div>
                                  <label class="ce-tool__item-file">
                                      <img class="_image-node _two_coll_img" src="${preview}">
                                      <input type="file" class="admin-form__input _image-input _two_coll_img_input" accept="image/*" value="" data-loaded="">
                                  </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    const baseSelector = '._two_coll_';

    if(Object.keys(this.data).length > 0) {
      for(const item in this.data) {
        if(item in this.data) {
          const elem = node.querySelector(baseSelector + item);
          if(elem) {
            if(item === 'img') {
              elem.src = this.data[item];
              node.querySelector(`${baseSelector}${item}_input`).dataset.loaded = this.data[item];
            } else {
              elem.innerHTML = this.data[item]
            }
          }
        }
      }
    }


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

    this.nodes.body = node.querySelector('._two_coll_body');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      title: node.querySelector('._two_coll_title').innerHTML,
      text: node.querySelector('._two_coll_text').innerHTML,
      btn: node.querySelector('._two_coll_btn').innerHTML,
      img: node.querySelector('._image-input').dataset.loaded
    }
  }

  static get sanitize() {
    return {
      text: {
        br: true,
      }
    };
  }
}



export default TwoColl;