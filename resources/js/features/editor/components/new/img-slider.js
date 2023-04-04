import Block from './Block';

export class ImgSlider extends Block {

  static get toolbox() {
    return {
      title: 'Full width slider',
      icon: `<svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="13" height="1" rx="0.5" transform="matrix(-1 0 0 1 19 5)" fill="black"/>
                <rect width="1" height="1" rx="0.5" transform="matrix(-1 0 0 1 7 9)" fill="black"/>
                <rect width="1" height="1" rx="0.5" transform="matrix(-1 0 0 1 11 9)" fill="black"/>
                <rect width="1" height="1" rx="0.5" transform="matrix(-1 0 0 1 15 9)" fill="black"/>
                <rect width="1" height="1" rx="0.5" transform="matrix(-1 0 0 1 19 9)" fill="black"/>
                <line x1="0.5" y1="0.5" x2="0.500001" y2="15.5" stroke="black" stroke-linecap="round"/>
                <line x1="24.5" y1="0.5" x2="24.5" y2="15.5" stroke="black" stroke-linecap="round"/>
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

  generateChild(img = this.imagePlaceholder){
    let child = document.createElement('div');
    child.classList.add('ce-imgSlider__item', 'col-3');
    child.setAttribute('data-item', '');

    child.innerHTML = `
        <div class="ce-imgSlider__item-wrap">
            <label class="ce-tool__item-file">
                <img data-img src="${img}" alt="">
                <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
            </label>
        </div>
        <button data-child-delete class="ce-tool-delete" type="button">
            <img src="/img/admin/icons/ico-trash.svg" alt="">
        </button>
    `;

    const image = child.querySelector( '[data-img]');
    const input = child.querySelector( '[data-img-input]');
    const self = this;
    input.addEventListener( 'change', e => {
      self.changeImage(image)(e)
    });

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
      text = ''
    } = this.data;

    node.innerHTML = `
        <div class="ce-pages ce-tool">
            <header class="ce-tool-head">
                <h2 class="ce-tool-head__title"> Full width slider </h2>
                <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
            </header>
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
             
            <div class="ce-tool-container ce-tool-body ce-imgSlider">

              <div class="ce-tool__item _paster_container">
                  <div class="ce-tool__label">
                      Title <button class="_paster_btn parser-btn" type="button"></button>
                  </div>
<!--                  <textarea data-field="title" name="" id="" cols="30" rows="1">${title}</textarea>-->
                  <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
                </div>
                <div class="ce-tool__item _paster_container">
                  <div class="ce-tool__label">
                      Text <button class="_paster_btn parser-btn" type="button"></button>
                  </div>
                  <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${text}</div>
                </div>
                <div data-body class="row ce-imgSlider__wrap">
                </div>
            </div>
        </div>
    `;


    this.nodes.body = node.querySelector('[data-body]');

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    }

    if( this.preloaded && this.data.items.length > 0 ){
      this.setChildData(this.data.items)
    } else {
      createChild()
    }

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    this.pastData(node);

    return this.nodes.wrapper;
  }

  save(node) {
    return {
      border: node.querySelector('[data-border] input:checked').value,
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(elem => elem.querySelector('[data-img-input]').dataset.loaded)
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



export default ImgSlider;