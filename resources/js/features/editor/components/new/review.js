import Block from './Block';

export class Review extends Block {

  static get toolbox() {
    return {
      title: 'Review',
      icon: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11.6667C19 12.1382 18.7893 12.5903 18.4142 12.9237C18.0391 13.2571 17.5304 13.4444 17 13.4444H5L1 17V2.77778C1 2.30628 1.21071 1.8541 1.58579 1.5207C1.96086 1.1873 2.46957 1 3 1H17C17.5304 1 18.0391 1.1873 18.4142 1.5207C18.7893 1.8541 19 2.30628 19 2.77778V11.6667Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill="#fff"/>
            </svg>`
    };
  }

  constructor({ data, api }){
    super();

    if( data.length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = [];
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = {}){
    const {
      img = this.imagePlaceholder,
      text = '',
      authorName = '',
      position = '',
      activity = '',
      link = ''
    } = data;
    let child = document.createElement('div');
    child.classList.add('row', 'ce-review');
    child.dataset.item = '';

    child.innerHTML = `
          <div class="col-4">
            <div class="ce-tool__item">
              <div class="ce-tool__label">
                  Author avatar
              </div>
              <label class="ce-tool__item-file">
                  <img data-img src="${img}" alt="" class="ce-itt__item-icon">
                  <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
              </label>
            </div>
          </div>
          <div class="col-8">
             <div class="ce-tool__item ce-review__text _paster_container">
              <div class="ce-tool__label">
                  Review text <button class="_paster_btn parser-btn" type="button"></button>
              </div>
              <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${text}</div>
              </div>
              <div class="ce-tool__item ce-review__author _paster_container">
                <div class="ce-tool__label">
                    Author name <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="authorName" contenteditable="true" class="ce-tool__field _paster_target">${authorName}</div>
              </div>
              <div class="ce-tool__item ce-review__author _paster_container">
                <div class="ce-tool__label">
                    Author position and company name <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="position" contenteditable="true" class="ce-tool__field _paster_target">${position}</div>
              </div>
              <div class="ce-tool__item ce-review__author _paster_container">
                <div class="ce-tool__label">
                    Company activity <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="activity" contenteditable="true" class="ce-tool__field _paster_target">${activity}</div>
              </div>
              <div class="ce-tool__item ce-review__author _paster_container">
                <div class="ce-tool__label">
                    Case link <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="link" contenteditable="true" class="ce-tool__field _paster_target">${link}</div>
              </div>
          </div>
          <button data-child-delete class="ce-itt__itemDelete ce-tool-delete" type="button">
              <img src="/img/admin/icons/ico-trash.svg" alt="">
          </button>
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

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head">
                    <h2 class="ce-tool-head__title"> Review </h2>
                    <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
                </header>
                <div data-body class="ce-tool-container ce-tool-body ce-review-wrap"></div>
            </div>
        `;


    this.nodes.body = node.querySelector('[data-body]');

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    };
    
    if( this.preloaded && this.data.length > 0 ){
      this.setChildData(this.data)
    } else {
      createChild();
    }

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }

  static get sanitize() {
    return {
      text: {
        br: true,
      }
    };
  }

  save(node) {
    return [...node.querySelectorAll('[data-item]')].map(item => ({
      img: item.querySelector('[data-img-input]').dataset.loaded,
      text: item.querySelector('[data-field="text"]').innerHTML,
      authorName: item.querySelector('[data-field="authorName"]').innerHTML,
      position: item.querySelector('[data-field="position"]').innerHTML,
      activity: item.querySelector('[data-field="activity"]').innerHTML,
      link: item.querySelector('[data-field="link"]').innerHTML
    }));
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: true,
        a: true
      }
    };
  }
}



export default Review;