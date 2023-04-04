import saveImageToServer from '../../saveImageToServer';

export class IconTwoCols {

  static get toolbox() {
    return {
      title: 'IconTwoCols',
      icon: `<svg enable-background="new 0 0 458.353 458.353" height="20" viewBox="0 0 458.353 458.353" width="20" xmlns="http://www.w3.org/2000/svg">
                <path id="path-1_104_" d="m315.118 200.529h143.235v28.647h-143.235z" transform="translate(11 7)"/>
                <path id="path-1_103_" d="m315.118 85.941h143.235v28.647h-143.235z" transform="translate(11 3)"/>
                <path d="m14.324 257.824h257.824c7.917 0 14.324-6.406 14.324-14.324v-200.529c0-7.917-6.406-14.324-14.324-14.324h-257.824c-7.918 0-14.324 6.406-14.324 14.324v200.529c0 7.917 6.406 14.324 14.324 14.324zm14.323-200.53h229.176v171.882l-85.941-85.941-85.941 85.941h-57.294z"/>
                <path d="m106.198 94.332c11.187 11.187 11.187 29.326 0 40.513s-29.326 11.187-40.513 0-11.187-29.326 0-40.513c11.187-11.188 29.326-11.188 40.513 0"/>
            </svg>
            `
    };
  } 

  static get sanitize() {
    return {
      text: {
        br: true,
      }
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

  generateChild(data = {}){
    const icon = '/img/editor/file-load-placeholder.svg';

    let child = document.createElement('div');
    child.classList.add('col-6');

    child.innerHTML = `
                <div class="ce-iTwoCols__item _iTwoCols_item">
                    <div class="ce-iTwoCols__itemWrap">
                        <div class="ce-tool__item ce-iTwoCols__itemIcon">
                            <div class="ce-tool__label">
                                Icon
                            </div>
                            <label class="ce-tool__item-file">
                                <img src="${icon}" alt="" class="ce-iTwoCols__itemIcon _iTwoCols_item_img _image-node">
                                <input type="file" class="_image-input _iTwoCols_item_img_input" accept="image/*" value="" data-loaded="">
                            </label>
                        </div>
                        <div class="ce-iTwoCols__itemFields">
                            <div class="ce-tool__item">
                                <div class="ce-tool__label">
                                    Title
                                </div>
                                <div contenteditable="true" class="ce-tool__field _iTwoCols_item_title"></div>
                            </div>
                            <div class="ce-tool__item">
                                <div class="ce-tool__label">
                                    Text
                                </div>
                                <div contenteditable="true" class="ce-tool__field _iTwoCols_item_text"></div>
                            </div>
                        </div>
                    </div>
                    <button class="ce-iTwoCols__itemDelete ce-tool-delete _iTwoCols_item_delete" type="button">
                        <img src="/img/editor/trash.svg" alt="">
                    </button>
                </div>
            `;

    const baseSelector = '._iTwoCols_item_';

    if(Object.keys(data).length > 0) {
      for(const item in data) {
        if(item in data) {
          const elem = child.querySelector(baseSelector + item);
          if(elem) {
            if(item === 'img') {
              elem.src = data[item];
              child.querySelector(`${baseSelector}${item}_input`).dataset.loaded = data[item];
            } else {
              elem.innerHTML = data[item]
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
        // this.save(this.nodes.wrapper)
      }
    }
    const image = child.querySelector( '._image-node' );
    const input = child.querySelector( '._image-input' );
    input.addEventListener( 'change', ChangeImage(image)  );

    child.querySelector('._iTwoCols_item_delete').addEventListener('click', () => {
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
            <div class="ce-iTwoCols">
                <header class="ce-tool-head ce-iTwoCols__head">
                    <h2 class="ce-tool-head__title"> Icons + text in 2 cols</h2>
                    <button class="ce-tool-head__btn ce-iTwoCols__featureSlot _iTwoCols_add_slot" type="button" > add </button>
                </header>
                <div class="container-fluid ce-tool-body ce-iTwoCols__body relative">
                    <div class="ce-tool__item">
                        <div class="ce-tool__label">
                            Title
                        </div>
                        <div contenteditable="true" class="ce-tool__field _iTwoCols_title"></div>
                    </div>
                    <div class="ce-tool__item">
                        <div class="ce-tool__label">
                            Sub-title
                        </div>
                        <div contenteditable="true" class="ce-tool__field _iTwoCols_subTitle"></div>
                    </div>
                    <div class="row ce-iTwoCols__body-wrap _iTwoCols_body"></div>
                </div>
            </div>
        `;


    if( this.preloaded  ){
      this.data.items.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._iTwoCols_body').appendChild( child );
      });
      node.querySelector('._iTwoCols_title').innerHTML = this.data.title || ''
      node.querySelector('._iTwoCols_subTitle').innerHTML = this.data.subTitle || ''
    }

    node.querySelector('._iTwoCols_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._iTwoCols_body').appendChild( child );
    });

    this.nodes.body = node.querySelector('._iTwoCols_body');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      title: node.querySelector('._iTwoCols_title').innerHTML,
      subTitle: node.querySelector('._iTwoCols_subTitle').innerHTML,
      items: [...node.querySelectorAll('._iTwoCols_item')].map( item => ({
        img: item.querySelector('._iTwoCols_item_img_input').dataset.loaded,
        title: item.querySelector('._iTwoCols_item_title').innerHTML,
        text: item.querySelector('._iTwoCols_item_text').innerHTML
      }))
    }
  }
}



export default IconTwoCols;