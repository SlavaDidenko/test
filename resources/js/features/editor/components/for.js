import saveImageToServer from '../../saveImageToServer';

export class For {

  static get toolbox() {
    return {
      title: 'For',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" width="15" height="15">
                <path d="M472,80H280c-4.418,0-8,3.582-8,8v72c0.003,4.418,3.588,7.997,8.006,7.994c0.857-0.001,1.709-0.139,2.522-0.41l10.056-3.352c10.918-3.574,22.665,2.38,26.238,13.298c3.573,10.918-2.38,22.665-13.298,26.238c-4.204,1.376-8.737,1.376-12.941,0l-10.056-3.352c-4.192-1.396-8.722,0.87-10.118,5.062c-0.271,0.813-0.409,1.665-0.41,2.522v64h-64c-4.418,0.003-7.997,3.588-7.994,8.006c0.001,0.857,0.139,1.709,0.41,2.522l3.352,10.056c3.574,10.918-2.38,22.665-13.298,26.238c-10.918,3.574-22.665-2.38-26.238-13.298c-1.376-4.204-1.376-8.737,0-12.941l3.352-10.056c1.396-4.192-0.87-8.722-5.062-10.118c-0.813-0.271-1.665-0.409-2.522-0.41H88c-4.418,0-8,3.582-8,8v192c0,4.418,3.582,8,8,8h384c4.418,0,8-3.582,8-8V88C480,83.582,476.418,80,472,80z M272.41,397.478c-0.271,0.813-0.409,1.665-0.41,2.522v64H96V288h52.904c-6.113,19.383,4.645,40.052,24.028,46.164c19.383,6.113,40.052-4.645,46.164-24.028c2.272-7.204,2.272-14.933,0-22.137H272v64c0.003,4.418,3.588,7.997,8.006,7.994c0.857-0.001,1.709-0.139,2.522-0.41l10.056-3.352c10.918-3.573,22.665,2.38,26.238,13.298c3.573,10.918-2.38,22.665-13.298,26.238c-4.204,1.376-8.737,1.376-12.941,0l-10.056-3.352C278.336,391.02,273.806,393.286,272.41,397.478z M464,464H288v-52.904c19.383,6.113,40.052-4.645,46.164-24.028c6.113-19.383-4.645-40.052-24.028-46.164c-7.204-2.272-14.933-2.272-22.137,0V288h64c4.418-0.003,7.997-3.588,7.994-8.006c-0.001-0.857-0.139-1.709-0.41-2.522l-3.352-10.056c-3.573-10.918,2.38-22.665,13.298-26.238c10.918-3.573,22.665,2.38,26.238,13.298c1.376,4.204,1.376,8.737,0,12.941l-3.352,10.056c-1.396,4.192,0.87,8.722,5.062,10.118c0.813,0.271,1.665,0.409,2.522,0.41h64V464z M464,272h-52.904c6.113-19.383-4.645-40.052-24.028-46.164c-19.383-6.113-40.052,4.645-46.164,24.028c-2.272,7.204-2.272,14.933,0,22.137H288v-52.904c11.111,3.601,23.275,1.658,32.712-5.224c16.546-11.802,20.392-34.783,8.59-51.329c-9.32-13.066-26.033-18.585-41.302-13.639V96h176V272z"/>
                <path d="M230.137,68.904c-7.204-2.272-14.933-2.272-22.137,0V8c0-4.418-3.582-8-8-8H8C3.582,0,0,3.582,0,8v192c0,4.418,3.582,8,8,8h60.904c-6.113,19.383,4.645,40.052,24.028,46.164s40.052-4.645,46.164-24.028c2.272-7.204,2.272-14.933,0-22.137H200c4.418,0,8-3.582,8-8v-60.904c19.383,6.113,40.052-4.645,46.164-24.028C260.277,95.685,249.52,75.017,230.137,68.904z M225.525,123.768c-4.204,1.376-8.737,1.376-12.941,0l-10.056-3.352c-4.192-1.396-8.722,0.87-10.118,5.062c-0.271,0.813-0.409,1.665-0.41,2.522v64h-64c-4.418,0.003-7.997,3.588-7.994,8.006c0.001,0.857,0.139,1.709,0.41,2.522l3.352,10.056c3.574,10.918-2.38,22.665-13.298,26.238c-10.918,3.573-22.665-2.38-26.238-13.298c-1.376-4.204-1.376-8.737,0-12.941l3.352-10.056c1.396-4.192-0.87-8.722-5.062-10.118c-0.813-0.271-1.665-0.409-2.522-0.41H16V16h176v64c0.003,4.418,3.588,7.997,8.006,7.994c0.857-0.001,1.709-0.139,2.522-0.41l10.056-3.352c10.918-3.573,22.665,2.38,26.238,13.298C242.396,108.447,236.442,120.195,225.525,123.768z"/>
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

    if( data.length > 0 ){
      this.data = data;
      this.preloaded = true;
    }
    
    this.render = this.render.bind(this);
    
  }

  generateChild(data = {}){
    const icon = '/img/editor/file-load-placeholder.svg';
    
    let child = document.createElement('div');
    child.classList.add('col-4');

    child.innerHTML = `
                <div class="ce-for__item _for_item">
                    <div class="ce-for__itemWrap">
                        <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Icon
                            </div>
                            <label class="ce-tool__item-file">
                                <img src="${icon}" alt="" class="ce-for__itemIcon _for_item_img _image-node">
                                <input type="file" class="_image-input _for_item_img_input" accept="image/*" value="" data-loaded="">
                            </label>
                          </div>
                          
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Text
                            </div>
                            <div contenteditable="true" class="ce-tool__field _for_item_text"></div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <button class="ce-for__itemDelete ce-tool-delete _for_item_delete" type="button">
                        <img src="/img/editor/trash.svg" alt="">
                    </button>
                </div>
            `;

    const baseSelector = '._for_item_';

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

    child.querySelector('._for_item_delete').addEventListener('click', () => {
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
            <div class="ce-for">
                <header class="ce-tool-head ce-for__head">
                    <h2 class="ce-tool-head__title"> Fit For</h2>
                    <button class="ce-tool-head__btn ce-for__featureSlot _for_add_slot" type="button" > add </button>
                </header>
                <div class="container-fluid ce-tool-body ce-for__body relative">
                    <div class="row ce-for__body-wrap _for_body"></div>
                </div>
            </div>
        `;


    if( this.preloaded  ){
      this.data.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._for_body').appendChild( child );
      });
    }

    node.querySelector('._for_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._for_body').appendChild( child );
    });

    this.nodes.body = node.querySelector('._for_body');

    return this.nodes.wrapper;
  }
  save(node) {
    return [...node.querySelectorAll('._for_item')].map( item => ({
      img: item.querySelector('._for_item_img_input').dataset.loaded,
      text: item.querySelector('._for_item_text').innerHTML
    }));
  }
}



export default For;