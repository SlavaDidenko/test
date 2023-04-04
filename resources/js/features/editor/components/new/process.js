import Block from './Block';

export class Process extends Block {

  static get toolbox() {
    return {
      title: 'Process',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="black" stroke-linecap="round"/>
              <line x1="23.5" y1="0.5" x2="23.5" y2="15.5" stroke="black" stroke-linecap="round"/>
              <rect x="4" y="2" width="4" height="6" rx="1" stroke="black" fill="#fff"/>
              <rect x="10" y="2" width="4" height="6" rx="1" stroke="black" fill="#fff"/>
              <rect x="16" y="2" width="4" height="6" rx="1" stroke="black" fill="#fff"/>
              <line x1="6.5" y1="4.5" x2="17.5" y2="4.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="10.5" x2="6.5" y2="10.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="12.5" x2="6.5" y2="12.5" stroke="black" stroke-linecap="round"/>
              <line x1="16.5" y1="10.5" x2="18.5" y2="10.5" stroke="black" stroke-linecap="round"/>
              <line x1="16.5" y1="12.5" x2="18.5" y2="12.5" stroke="black" stroke-linecap="round"/>
              <line x1="10.5" y1="10.5" x2="12.5" y2="10.5" stroke="black" stroke-linecap="round"/>
              <line x1="10.5" y1="12.5" x2="12.5" y2="12.5" stroke="black" stroke-linecap="round"/>
              </svg>`
    };
  }

  constructor({ data, api }){
    super();

    if( 'items' in data && data.items.length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {}
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = {}, icoCounter = 0){
    const { img = this.imagePlaceholder, title = '', text = '' } = data;
    let child = document.createElement('div');
    child.dataset.item = '';

    child.innerHTML = `
        <div class="ce-lid__item">
            <div class="row ce-lid__item-wrap">
                <div data-icon class="col-2" style="display: ${icoCounter === 0 ? 'none' : ''}">
                  <label class="ce-tool__item-file">
                      <img data-img src="${img}" alt="" class="ce-lid__item-icon">
                      <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
                  </label>
                </div>
                
                <div class="col ce-lid__item-content">
                    <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Title <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="title" contenteditable="true" class="_paster_target ce-tool__field ce-lid__item-title">${title}</div>
                  </div>
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Text <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="text" contenteditable="true" class="_paster_target ce-tool__field ce-lid__item-text">${text}</div>
                  </div>
                </div>
                
            </div>
            
            <button data-child-delete class="ce-lid__itemDelete ce-tool-delete" type="button">
                <img src="/img/admin/icons/ico-trash.svg" alt="">
            </button>
        </div>
    `;

    const image = child.querySelector( '[data-img]');
    const input = child.querySelector( '[data-img-input]');
    input.addEventListener( 'change', this.changeImage(image)  );

    this.pastData(child)

    child.querySelector('[data-child-delete]').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
  }

  render() {

    let node = this.createNode();
    const {
      border = '1',
      title = '',
      text = '',
      img = this.imagePlaceholder,
      icoCounter = 0
    } = this.data;

    node.innerHTML = `
        <div class="ce-pages ce-tool">
            <header class="ce-tool-head">
                <h2 class="ce-tool-head__title"> Process </h2>
                <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
            </header>
            <div class="ce-tool-config__wrap">
                  <form data-ico-count class="ce-tool-config">
                    <div class="ce-tool-config__label">Ico/counter</div>
                    <div class="ce-tool-config__inline">
                      <div class="ce-tool-config__item">
                          <input id="icoCounter-ico" name="icoCounter" value="1" ${parseInt(icoCounter) ? 'checked' : ''} type="radio">
                          <label for="icoCounter-ico">icon</label>
                      </div>
                      <div class="ce-tool-config__item">
                          <input id="icoCounter-counter" name="icoCounter" value="0" ${!parseInt(icoCounter) ? 'checked' : ''} type="radio">
                          <label for="icoCounter-counter">counter</label>
                      </div>         
                    </div>
                  </form>
                  <form data-border class="ce-tool-config">
                    <div class="ce-tool-config__label">On/off top border</div>
                    <div class="ce-tool-config__inline">
                      <div class="ce-tool-config__item">
                          <input id="withBorder" name="border" value="1" ${parseInt(border) ? 'checked' : ''} type="radio">
                          <label for="withBorder">on</label>
                      </div>
                      <div class="ce-tool-config__item">
                          <input id="withoutBorder" name="border" value="0" ${!parseInt(border) ? 'checked' : ''} type="radio">
                          <label for="withoutBorder">off</label>
                      </div>         
                    </div>
                  </form>
              </div>
            <div class="ce-tool-container ce-tool-body ce-lid">
                <div class="row ce-lid__wrap">
                    <div class="col-12">
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
                    </div>
                    <div class="col-4">
                        <label class="ce-tool__item-file">
                          <img data-img-base src="${img}" alt="">
                          <input data-img-input-base type="file" accept="image/*" value="" data-loaded="${img}">
                      </label>
                    </div>
                    <div data-body class="col-8">
                    </div>
                  
                </div>
            </div>
        </div>
    `;

    this.nodes.body = node.querySelector('[data-body]');

    const self = this;
    const icoCounterConfig = this.nodes.wrapper.querySelector('[data-ico-count]');
    icoCounterConfig.addEventListener('change', e => {
      const icons = self.nodes.body.querySelectorAll('[data-item] [data-icon]');
      icons.forEach(item => item.style.display = parseInt(e.target.value) === 0 ? 'none' : '')
    })

    const image = node.querySelector( '[data-img-base]');
    const input = node.querySelector( '[data-img-input-base]');
    input.addEventListener( 'change', this.changeImage(image)  );

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    };

    if( this.preloaded && this.data.items.length > 0 ){
      this.setChildData(this.data.items, icoCounter)
    } else {
      createChild();
    }

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }


  save(node) {
    return {
      border: node.querySelector('[data-border] input:checked').value,
      icoCounter: node.querySelector('[data-ico-count] input:checked').value,
      img: node.querySelector('[data-img-input-base]').dataset.loaded,
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(elem => ({
        img: elem.querySelector('[data-img-input]').dataset.loaded,
        title: elem.querySelector('[data-field="title"]').innerHTML,
        text: elem.querySelector('[data-field="text"]').innerHTML
      }))
    }
  }


  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      items: {
        br: true,
        a: true
      },
      text: {
        br: true,
        a: true
      },
      title: {
        a: true,
        br: true
      }
    };
  }
}



export default Process;