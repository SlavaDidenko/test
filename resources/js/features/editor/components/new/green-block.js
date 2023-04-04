import Block from './Block';

export class GreenBlock extends Block {

  static get toolbox() {
    return {
      title: 'Green block',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="15" rx="1.5" fill="#6C6C6C" stroke="#6C6C6C"/>
              <rect width="16" height="1" rx="0.5" transform="matrix(-1 0 0 1 20 6)" fill="white"/>
              <rect width="8" height="1" rx="0.5" transform="matrix(-1 0 0 1 16 10)" fill="white"/>
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
      title = '',
      text = '',
      btnTitle = '',
      btnLink = '',
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head ce-greenBox__head">
                    <h2 class="ce-tool-head__title"> Green block </h2>
                </header>
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
               
                <div class="container-fluid ce-tool-body ce-greenBox">
                    <div data-body class="row ce-greenBox__wrap">
                        <div data-col-content class="col-10">
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
                          <div data-demo class="row" style="display: ${parseInt(demoBtn) === 1 ? 'none' : ''}">
                            <div class="col-6 ce-tool__item _paster_container">
                              <div class="ce-tool__label">
                                  Button title <button class="_paster_btn parser-btn" type="button"></button>
                              </div>
                              <div data-field="btnTitle" contenteditable="true" class="ce-tool__field _paster_target">${btnTitle}</div>
                            </div>
                            <div class="col-6 ce-tool__item _paster_container">
                              <div class="ce-tool__label">
                                  Button link <button class="_paster_btn parser-btn" type="button"></button>
                              </div>
                              <div data-field="btnLink" contenteditable="true" class="ce-tool__field _paster_target">${btnLink}</div>
                            </div>
                          </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        `;

    this.pastData(node)

    this.nodes.body = node.querySelector('[data-body]');

    const self = this;
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

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      demoBtn: parseInt(node.querySelector('[data-demo-btn] input:checked').value),
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      btnTitle: node.querySelector('[data-field="btnTitle"]').innerHTML,
      btnLink: node.querySelector('[data-field="btnLink"]').innerHTML
    }
  }

  static get sanitize() {
    return {
      title: {
        br: true,
      },
      text: {
        br: true,
      }
    };
  }
}



export default GreenBlock;