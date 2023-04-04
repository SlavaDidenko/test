import Block from './Block';

export class ContentBtnsImg extends Block {

  static get toolbox() {
    return {
      title: 'Content Buttons Image',
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
      bg = 1,
      col = '6',
      demoBtn = 1,
      img = this.imagePlaceholder,
      overText = '',
      videoImg = 0,
      videoId = '',
      title = '',
      text = '',
      btn1Title = '',
      btn1Link = '',
      btn2Title = '',
      btn2Link = '',
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head ce-cbi__head">
                    <h2 class="ce-tool-head__title"> Content + Buttons + Image </h2>
                </header>
                <div class="ce-tool-config__wrap">
                  <form data-bg class="ce-tool-config">
                    <div class="ce-tool-config__label">On/off background</div>
                    <div class="ce-tool-config__inline">
                      <div class="ce-tool-config__item">
                          <input id="bg" name="bg" value="1" ${parseInt(bg) ? 'checked' : ''} type="radio">
                          <label for="bg">on</label>
                      </div>
                      <div class="ce-tool-config__item">
                          <input id="without" name="bg" value="0" ${!parseInt(bg) ? 'checked' : ''} type="radio">
                          <label for="without">off</label>
                      </div>         
                    </div>
                  </form>
                  <form data-cols class="ce-tool-config">
                    <div class="ce-tool-config__label">Image size</div>
                      <div class="ce-tool-config__inline">
                        <div class="ce-tool-config__item">
                            <input id="col-5" name="col" value="5" ${col === '5' ? 'checked' : ''} type="radio">
                            <label for="col-5">medium</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="col-6" name="col" value="6" ${col === '6' ? 'checked' : ''} type="radio">
                            <label for="col-6">big</label>
                        </div>     
                      </div>           
                  </form>
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
                    <div data-body class="row ce-cbi__wrap ${parseInt(bg) ? 'ce-cbi__wrap--bg' : ''}">
                        <div data-col-content class="col-${12-col}">
                          <div class="ce-tool__item _paster_container">
                            <div class="ce-tool__label">
                                Over text <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="overText" contenteditable="true" class="ce-tool__field _paster_target">${overText}</div>
                          </div>
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
                          <div data-demo style="display: ${parseInt(demoBtn) === 1 ? 'none' : ''}">
                            <div class="ce-tool__item _paster_container">
                              <div class="ce-tool__label">
                                  Button 1 title <button class="_paster_btn parser-btn" type="button"></button>
                              </div>
                              <div data-field="btn1-title" contenteditable="true" class="ce-tool__field _paster_target">${btn1Title}</div>
                            </div>
                            <div class="ce-tool__item _paster_container">
                              <div class="ce-tool__label">
                                  Button 1 link <button class="_paster_btn parser-btn" type="button"></button>
                              </div>
                              <div data-field="btn1-link" contenteditable="true" class="ce-tool__field _paster_target">${btn1Link}</div>
                            </div>
                          </div>
                          
                          <div class="ce-tool__item _paster_container">
                            <div class="ce-tool__label">
                                Button 2 title <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="btn2-title" contenteditable="true" class="ce-tool__field _paster_target">${btn2Title}</div>
                          </div>
                          <div class="ce-tool__item _paster_container">
                            <div class="ce-tool__label">
                                Button 2 link <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="btn2-link" contenteditable="true" class="ce-tool__field _paster_target">${btn2Link}</div>
                          </div>
                        </div>
                        <div data-col-img class="col-${col}">
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
            </div>
        `;

    const self = this;
    const colsConfig = this.nodes.wrapper.querySelector('[data-cols]');
    colsConfig.addEventListener('change', e => {
      const itemImg = self.nodes.wrapper.querySelector('[data-col-img]');
      const itemContent = self.nodes.wrapper.querySelector('[data-col-content]');
      itemImg.className = ''
      itemImg.classList.add(`col-${e.target.value}`)
      itemContent.className = ''
      itemContent.classList.add(`col-${12-e.target.value}`)
    })

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

    const bgConfig = this.nodes.wrapper.querySelector('[data-bg]');
    bgConfig.addEventListener('change', e => {
      const container = self.nodes.wrapper.querySelector('[data-body]');
      if(parseInt(e.target.value)) {
        container.classList.add('ce-cbi__wrap--bg')
      } else {
        container.classList.remove('ce-cbi__wrap--bg')
      }
    })

    const demoBtnConfig = this.nodes.wrapper.querySelector('[data-demo-btn]');
    demoBtnConfig.addEventListener('change', e => {
      const container = self.nodes.wrapper.querySelector('[data-body]');
      const btn = container.querySelector('[data-demo]');
      if(parseInt(e.target.value)) {
        btn.style.display = 'none'
      } else {
        btn.style.display = ''
      }
    })

    const image = node.querySelector( '[data-img]' );
    const input = node.querySelector( '[data-img-input]' );
    input.addEventListener( 'change', this.changeImage(image)  );

    this.pastData(node)

    this.nodes.body = node.querySelector('[data-body]');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      videoImg: parseInt(node.querySelector('[data-videoImg] input:checked').value),
      videoId: node.querySelector('[data-field="videoId"]').innerHTML,
      col: node.querySelector('[data-cols] input:checked').value,
      bg: parseInt(node.querySelector('[data-bg] input:checked').value),
      demoBtn: parseInt(node.querySelector('[data-demo-btn] input:checked').value),
      overText: node.querySelector('[data-field="overText"]').innerHTML,
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      btn1Title: node.querySelector('[data-field="btn1-title"]').innerHTML,
      btn1Link: node.querySelector('[data-field="btn1-link"]').innerHTML,
      btn2Title: node.querySelector('[data-field="btn2-title"]').innerHTML,
      btn2Link: node.querySelector('[data-field="btn2-link"]').innerHTML,
      img: node.querySelector('[data-img-input]').dataset.loaded
    }
  }

  static get sanitize() {
    return {
      overText: {
        br: true,
      },
      title: {
        br: true
      },
      text: {
        br: true,
      }
    };
  }
}



export default ContentBtnsImg;
