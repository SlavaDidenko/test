import Block from './Block';

export class IcoTitleText extends Block {

  static get toolbox() {
    return {
      title: 'Ico Title Text-1',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="15" rx="1.5" stroke="black" fill="#fff"/>
              <rect width="2" height="2" rx="1" transform="matrix(-1 0 0 1 10 5)" fill="black"/>
              <rect width="2" height="2" rx="1" transform="matrix(-1 0 0 1 16 5)" fill="black"/>
              <rect width="2" height="2" rx="1" transform="matrix(-1 0 0 1 16 10)" fill="black"/>
              <rect width="2" height="2" rx="1" transform="matrix(-1 0 0 1 10 10)" fill="black"/>
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

  generateChild(data = {}){
    const {
      img = '',
      imgHover = '',
      title = '',
      text = ''
    } = data;
    const placeholderImg = img || this.imagePlaceholder;
    const placeholderImgHover = imgHover || this.imagePlaceholder;
    let child = document.createElement('div');
    child.classList.add('col-6');
    child.dataset.item = '';

    child.innerHTML = `
        <div class="ce-itt__item">
            <div class="ce-itt__item-wrap">
                <div class="ce-itt__item-icons">
                  <label class="ce-tool__item-file">
                      <img data-img src="${placeholderImg}" alt="" class="ce-itt__item-icon">
                      <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
                  </label>
                  <label class="ce-tool__item-file">
                      <img data-img-hover src="${placeholderImgHover}" alt="" class="ce-itt__item-icon">
                      <input data-img-hover-input type="file" accept="image/*" value="" data-loaded="${imgHover}">
                  </label>
                </div>
                
                <div class="ce-itt__item-content">
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Title <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="title" contenteditable="true" class="_paster_target ce-tool__field ce-itt__item-title">${title}</div>
                  </div>
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Text <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="text" contenteditable="true" class="_paster_target ce-tool__field ce-itt__item-text">${text}</div>
                  </div>
                </div>
                
            </div>
            <button data-child-delete class="ce-itt__itemDelete ce-tool-delete" type="button">
                <img src="/img/admin/icons/ico-trash.svg" alt="">
            </button>
        </div>
    `;

    const image = child.querySelector( '[data-img]');
    const input = child.querySelector( '[data-img-input]');
    input.addEventListener( 'change', this.changeImage(image)  );
    const imageHover = child.querySelector( '[data-img-hover]');
    const inputHover = child.querySelector( '[data-img-hover-input]');
    inputHover.addEventListener( 'change', this.changeImage(imageHover)  );

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
      bg = 1,
      col = 4,
      title = '',
      text = '',
      btnTitle = '',
      btnLink = ''
    } = this.data;

    node.innerHTML = `
        <div class="ce-pages ce-tool">
            <header class="ce-tool-head">
                <h2 class="ce-tool-head__title"> Ico Title Text </h2>
                <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
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
              <form data-col class="ce-tool-config">
                  <div class="ce-tool-config__label">Items per row</div>
                  <div class="ce-tool-config__inline">
                    <div class="ce-tool-config__item">
                        <input id="bg" name="bg" value="6" ${parseInt(col) === 6 ? 'checked' : ''} type="radio">
                        <label for="bg">2</label>
                    </div>
                    <div class="ce-tool-config__item">
                        <input id="bg" name="bg" value="4" ${parseInt(col) === 4 ? 'checked' : ''} type="radio">
                        <label for="bg">3</label>
                    </div>
                    <div class="ce-tool-config__item">
                        <input id="without" name="bg" value="3" ${parseInt(col) === 3 ? 'checked' : ''} type="radio">
                        <label for="without">4</label>
                    </div>         
                  </div>
              </form>
              </div>
            <div class="ce-tool-container ce-tool-body ce-itt">
                <div data-body data-bg-val="${bg}" class="row ce-itt__wrap ${parseInt(bg) ? 'ce-itt__wrap--bg' : ''}">
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

                        <div class="row">
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

    this.nodes.body = node.querySelector('[data-body]');

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    }

    const self = this
    const bgConfig = this.nodes.wrapper.querySelector('[data-bg]');
    bgConfig.addEventListener('change', e => {
      const container = self.nodes.wrapper.querySelector('[data-body]');
      if(parseInt(e.target.value)) {
        container.classList.add('ce-itt__wrap--bg')
      } else {
        container.classList.remove('ce-itt__wrap--bg')
      }
      container.dataset.bgVal = e.target.value
    })
    // const colConfig = this.nodes.wrapper.querySelector('[data-bg]');
    // colConfig.addEventListener('change', e => {
    //   const container = self.nodes.wrapper.querySelector('[data-body]');
    //   container.querySelectorAll('[data-item]')
    //     .forEach(item => {
    //       item.className = '';
    //       item.classList = `col-${e.target.value}`
    //     })
    // })

    if( this.preloaded && this.data.items.length > 0 ){
      this.setChildData(this.data.items, col)
    } else {
      createChild()
    }

    this.pastData(node);

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }
  onPaste( event ){
    console.log( event );
  }

  save(node) {
    return {
      bg: parseInt(node.querySelector('[data-bg-val]').dataset.bgVal),
      col: parseInt(node.querySelector('[data-col] input:checked').value),
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      btnTitle: node.querySelector('[data-field="btnTitle"]').innerHTML,
      btnLink: node.querySelector('[data-field="btnLink"]').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(elem => ({
        img: elem.querySelector('[data-img-input]').dataset.loaded,
        imgHover: elem.querySelector('[data-img-hover-input]').dataset.loaded,
        title: elem.querySelector('[data-field="title"]').innerHTML,
        text: elem.querySelector('[data-field="text"]').innerHTML
      }))
    }
  }

  static get sanitize() {
    return {
      title: {
        br: true,
      },
      text: {
        br: true,
        a: true
      },
      items: {
        br: true
      }
    };
  }
}



export default IcoTitleText;