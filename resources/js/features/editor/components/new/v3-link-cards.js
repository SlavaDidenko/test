import Block from './Block';

export class NewLinkCards extends Block {

  static get toolbox() {
    return {
      title: 'New link cards',
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

    if( 'items' in data && data.items.length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = [];
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = {}){
    const {
      title = '',
      text = '',
      img = '',
      link = ''
    } = data;
    let child = document.createElement('div');
    const placeholderImg = img || this.imagePlaceholder;
    
    child.classList.add('ce-linkCard', 'col-4');
    child.dataset.item = '';


    child.innerHTML = `
          <div class="ce-tool__item ce-linkCard__text _paster_container">
            <div class="ce-tool__label">
                Title <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
          </div>

          <div class="">
            <div class="ce-tool__label">
                Cover
            </div>
            <label class="ce-tool__item-file">
              <img data-img src="${placeholderImg}" alt="" class="ce-itt__item-icon">
              <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
            </label>
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


    const image = child.querySelector( '[data-img]');
    const input = child.querySelector( '[data-img-input]');
    input.addEventListener( 'change', this.changeImage(image)  );

    child.querySelector('[data-child-delete]').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
  }

  render() {

    let node = this.createNode();

    const {
      title = ''
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head">
                    <h2 class="ce-tool-head__title"> New link cards </h2>
                    <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
                </header>
                <div class="ce-tool-container ce-tool-body">
                <div class="ce-tool__item _paster_container">
                <div class="ce-tool__label">
                    Title <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
              </div>
                    <div data-body class="row ce-linkCard-list"></div>
                  </div>
            </div>
        `;


    this.nodes.body = node.querySelector('[data-body]');
    this.pastData(node)

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
    return {
      title: node.querySelector('[data-field="title"]').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(item => ({
        text: item.querySelector('[data-field="text"]').innerHTML,
        title: item.querySelector('[data-field="title"]').innerHTML,
        link: item.querySelector('[data-field="link"]').innerHTML,
        img: item.querySelector('[data-img-input]').dataset.loaded,
      }))
    };
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



export default NewLinkCards;