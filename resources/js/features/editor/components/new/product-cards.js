import Block from './Block';

export class ProductCards extends Block {

  static get toolbox() {
    return {
      title: 'Product cards',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="black" stroke-linecap="round"/>
                <line x1="23.5" y1="0.5" x2="23.5" y2="15.5" stroke="black" stroke-linecap="round"/>
                <line x1="6.5" y1="3.5" x2="17.5" y2="3.5" stroke="black" stroke-linecap="round"/>
                <rect x="4" y="6" width="4" height="6" rx="1" stroke="black" fill="#fff"/>
                <rect x="10" y="6" width="4" height="6" rx="1" stroke="black" fill="#fff"/>
                <rect x="16" y="6" width="4" height="6" rx="1" stroke="black" fill="#fff"/>
              </svg>`
    };
  }

  constructor({ data, api }){
    super();
    console.log('DATA', data );
    if( data.items && data.items.length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {
        items: [],
        background: false,
        numbers: false
      };
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = {}){
    let {
      title = '',
      text = '',
      link = '',
      img =  this.imagePlaceholder,
      category = '',
    } = data;

    const placeholderImg = img || this.imagePlaceholder;

    let child = document.createElement('div');
    child.classList.add('ce-linkCard', 'col-4');
    child.dataset.item = '';

    child.innerHTML = `
          <div class="ce-tool__item ce-linkCard__text _paster_container">
            <div class="ce-tool__label">
                Title <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
          </div>
          <div class="ce-tool__item ce-linkCard__text _paster_container">
            <div class="ce-tool__label">
                Text <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${text}</div>
          </div>
          <div class="ce-tool__item ce-linkCard__author _paster_container">
            <div class="ce-tool__label">
                Link <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="link" contenteditable="true" class="ce-tool__field _paster_target">${link}</div>
          </div>

          <button data-child-delete class="ce-itt__itemDelete ce-tool-delete" type="button">
              <img src="/img/admin/icons/ico-trash.svg" alt="">
          </button>
    `;

    this.pastData(child)

    child.querySelector('[data-child-delete]').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
  }

  render() {

    let node = this.createNode();
    const bg = false;
    const numbers = false;
    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head">
                    <h2 class="ce-tool-head__title"> Product cards </h2>
                    <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
                </header>

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

                <div data-body class="ce-tool-container ce-tool-body row ce-linkCard-list"></div>
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

    return this.nodes.wrapper;
  }
  save(node) {
    console.log('x', node );
    return {
      background: node.querySelector('[data-bg] input:checked').value,
      items: [...node.querySelectorAll('[data-item]')].map(item => ({
        text: item.querySelector('[data-field="text"]').innerHTML,
        title: item.querySelector('[data-field="title"]').innerHTML,
        link: item.querySelector('[data-field="link"]').innerHTML
      }))

    }
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: true
      },
      title: {
        br: true
      }
    };
  }
}



export default ProductCards;
