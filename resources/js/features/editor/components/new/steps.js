import Block from './Block';

export class Steps extends Block {

  static get toolbox() {
    return {
      title: 'Steps',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="black" stroke-linecap="round"/>
            <line x1="23.5" y1="0.5" x2="23.5" y2="15.5" stroke="black" stroke-linecap="round"/>
            <rect x="13.5" y="5.5" width="6" height="5" rx="1.5" stroke="black"/>
            <rect x="4.5" y="2.5" width="6" height="5" rx="1.5" stroke="black"/>
            <rect x="4.5" y="9.5" width="6" height="5" rx="1.5" stroke="black"/>
            </svg>`
    };
  }

  constructor({ data, api }){
    super();

    if( 'items' in data && data.items.length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {
        title: '' 
      }
    }

    this.render = this.render.bind(this);
  }

  generateChild(item = {}){
    const {
      title = '',
      text = '',
      link = '',
    } = item;
    let child = document.createElement('div');
    child.classList.add(`col-6`);
    child.dataset.item = '';

    child.innerHTML = `
        <div class="ce-steps__item">
            <div class="ce-steps__item-wrap">
                <div class="ce-steps__item-content">
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Title <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="title" contenteditable="true" class="_paster_target ce-tool__field ce-steps__item-text">${title}</div>
                  </div>
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Link <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="link" contenteditable="true" class="_paster_target ce-tool__field ce-steps__item-text">${link}</div>
                  </div>
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Text <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="text" contenteditable="true" class="_paster_target ce-tool__field ce-steps__item-text">${text}</div>
                  </div>
                </div>
                
            </div>
            
            <button data-child-delete class="ce-steps__itemDelete ce-tool-delete" type="button">
                <img src="/img/admin/icons/ico-trash.svg" alt="">
            </button>
        </div>
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

    const title = this.data.title;

    node.innerHTML = `
        <div class="ce-pages ce-tool">
            <header class="ce-tool-head">
                <h2 class="ce-tool-head__title"> Steps </h2>
                <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
            </header>
              
            <div class="ce-tool-container ce-tool-body ce-steps">
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Title <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="title" contenteditable="true" class="_paster_target ce-tool__field ce-steps__item-title">${title}</div>
                  </div>
                <div data-body data-dir-val class="row ce-steps__wrap"></div>
            </div>
        </div>
    `;

    this.nodes.body = node.querySelector('[data-body]');

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    };

    if( this.preloaded && this.data.items.length > 0 ){
      this.setChildData(this.data.items)
    } else {
      createChild();
    }

    this.pastData(node)

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }


  save(node) {
    return {
      title: node.querySelector('[data-field="title"]').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(elem => ({
        title: elem.querySelector('[data-field="title"]').innerHTML,
        text: elem.querySelector('[data-field="text"]').innerHTML,
        link:  elem.querySelector('[data-field="link"]').innerHTML,
      }))
    }
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      br: true,
      items: {
        text: {
          br: true
        },
        b: true,
        i: true,
      },
      text: {
        br: true,
        a: true,
        b: true,
        i: true,
      },
      title: {
        a: true
      }
    };
  }

}



export default Steps;