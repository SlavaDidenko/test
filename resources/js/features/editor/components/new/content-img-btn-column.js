import Block from './Block';

export class ContentImgBtnColumn extends Block {

  static get toolbox() {
    return {
      title: 'Content Image Button in a column',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="15" rx="1.5" fill="#6C6C6C" stroke="#6C6C6C"/>
              <line x1="4.5" y1="5.5" x2="9.5" y2="5.5" stroke="white" stroke-linecap="round"/>
              <line x1="4.5" y1="8.5" x2="9.5" y2="8.5" stroke="white" stroke-linecap="round"/>
              <line x1="4.5" y1="10.5" x2="9.5" y2="10.5" stroke="white" stroke-linecap="round"/>
              <path d="M13.5 7C13.5 6.17157 14.1716 5.5 15 5.5H18C18.8284 5.5 19.5 6.17157 19.5 7V9C19.5 9.82843 18.8284 10.5 18 10.5H15C14.1716 10.5 13.5 9.82843 13.5 9V7Z" fill="#6C6C6C" stroke="white"/>
            </svg>`
    };
  }

  constructor({ data, api }){
    super();

    this.api = api;

    if( Object.keys(data).length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {}
    }

    this.render = this.render.bind(this);
  }

  render() {

    let node = this.createNode();
    const {
      demoBtn = 1,
      img = this.imagePlaceholder,
      videoImg = 0,
      videoId = '',
      title = '',
      text = '',
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head ce-cbi__head">
                    <h2 class="ce-tool-head__title"> Content + Image + Button in a column </h2>
                </header>
                <div class="ce-tool-config__wrap">
                  <form data-demo-btn class="ce-tool-config">
                    <div class="ce-tool-config__label">Set demo button</div>
                      <div class="ce-tool-config__inline">
                        <div class="ce-tool-config__item">
                            <input id="demoBtn_on" name="demoBtn" value="1" ${parseInt(demoBtn) === 1 ? 'checked' : ''} type="radio">
                            <label for="demoBtn_on">on</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="demoBtn_off" name="demoBtn" value="0" ${parseInt(demoBtn) === 0 ? 'checked' : ''} type="radio">
                            <label for="demoBtn_off">off</label>
                        </div>     
                      </div>           
                  </form>
                   <form data-videoImg class="ce-tool-config">
                    <div class="ce-tool-config__label">Video or image</div>
                      <div class="ce-tool-config__inline">
                        <div class="ce-tool-config__item">
                            <input id="isvideo" name="videoImg" value="1" ${parseInt(videoImg) === 1 ? 'checked' : ''} type="radio">
                            <label for="isvideo">Video</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="isimage" name="videoImg" value="0" ${parseInt(videoImg) === 0 ? 'checked' : ''} type="radio">
                            <label for="isimage">Image</label>
                        </div>     
                      </div>           
                  </form>
                </div>
                
                <div class="container-fluid ce-tool-body ce-cbi">
                    <div data-body class="ce-cbi__wrap">
                        <div class="ce-tool__item _paster_container">
                          <div class="ce-tool__label">
                              Title <button class="_paster_btn parser-btn" type="button"></button>
                          </div>
                          <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
                        </div>
                        <div class="ce-tool__item _paster_container">
                          <div class="ce-tool__label">
                              Text <button class="_paster_btn parser-btn" type="button"></button>
                          </div>
                          <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${text}</div>
                        </div>
                        <div data-block-video class="ce-tool__item _paster_container" style="display: ${parseInt(videoImg) === 0 ? 'none' : ''}">
                          <div class="ce-tool__label">
                              Video ID <button class="_paster_btn parser-btn" type="button"></button>
                          </div>
                          <div data-field="videoId" contenteditable="true" class="ce-tool__field _paster_target">${videoId}</div>
                        </div>
                          <div data-block-image class="ce-tool__item" style="display: ${parseInt(videoImg) === 1 ? 'none' : ''}">
                                <div class="ce-tool__label">
                                    Image
                                </div>
                                <label class="ce-tool__item-file">
                                  <img data-img src="${img}" alt="" class="ce-mediaText__item-img">
                                  <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
                              </label>
                          </div>
                    </div>
                </div>
            </div>
        `;

    this.nodes.body = node.querySelector('[data-body]');
    const self = this;
    const videImgConfig = node.querySelector('[data-videoImg]');
    videImgConfig.addEventListener('change', e => {
      const imageBlock = node.querySelector('[data-block-image]');
      const videoBlock = node.querySelector('[data-block-video]');
      if(parseInt(e.target.value) === 0) {
        imageBlock.style.display = ''
        videoBlock.style.display = 'none'
      } else {
        imageBlock.style.display = 'none'
        videoBlock.style.display = ''
      }
    })

    const image = node.querySelector( '[data-img]' );
    const input = node.querySelector( '[data-img-input]' );
    input.addEventListener( 'change', this.changeImage(image)  );

    this.pastData(node)

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      demoBtn: parseInt(node.querySelector('[data-demo-btn] input:checked').value),
      videoImg: parseInt(node.querySelector('[data-videoImg] input:checked').value),
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      videoId: node.querySelector('[data-field="videoId"]').innerHTML,
      img: node.querySelector('[data-img-input]').dataset.loaded
    }
  }

  static get sanitize() {
    return {
      title: {
        br: true
      },
      text: {
        br: true,
      }
    };
  }
}



export default ContentImgBtnColumn;
