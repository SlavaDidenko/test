import Block from './Block';

export class LinkCards extends Block {

  static get toolbox() {
    return {
      title: 'Link cards',
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
        title: "",
        background: 1,
      };
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = {}){
    let {
      title = '',
      time = '',
      link = '',
      img =  this.imagePlaceholder,
      category = '',
      type = 'read_more',
    } = data;

    const placeholderImg = img || this.imagePlaceholder;

    let child = document.createElement('div');
    child.classList.add('ce-linkCard', 'col-4');
    child.dataset.item = '';

    child.innerHTML = `
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
                Title <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
          </div>

          <div class="ce-tool__item ce-linkCard__author _paster_container">
            <div class="ce-tool__label">
                Link <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="link" contenteditable="true" class="ce-tool__field _paster_target">${link}</div>
          </div>

          <div class="ce-tool__item ce-linkCard__text _paster_container">
            <div class="ce-tool__label">
                Time
            </div>
            <div style="display:flex; width: 100%">
              <div style="width: 100%" data-field="time" contenteditable="true" class="ce-tool__field _paster_target">${time}</div>
              <select data-field="type">
                <option value="read_more" ${ type === "read_more" ? "selected" : ""}>Read</option>
                <option value="watch_more" ${ type === "watch_more" ? "selected" : ""}>Watch</option>
              </select>
            </div>
          </div>

          <div class="ce-tool__item ce-linkCard__author">
            <div class="ce-tool__label">
                Category
            </div>
            <div data-field="category">
              <select class="form-control _category">
                <option value="">Choose category</option>
                <option ${ category === "webinar" ? "selected" : ""} value="webinar">Webinar</option>
                <option ${ category === "article" ? "selected" : ""} value="article">Article</option>
                <option ${ category === "whitepaper" ? "selected" : ""} value="whitepaper">Whitepaper</option>
                <option ${ category === "ebook" ? "selected" : ""} value="ebook">E-book</option>
                <option ${ category === "checklist" ? "selected" : ""} value="checklist">Checklist</option>
                <option ${ category === "infographic" ? "selected" : ""} value="infographic">Infographic</option>
                <option ${ category === "report" ? "selected" : ""} value="report">Report</option>
                <option ${ category === "datasheet" ? "selected" : ""} value="datasheet">Datasheet</option>
                <option ${ category === "research" ? "selected" : ""} value="research">Research</option>
                <option ${ category === "guide" ? "selected" : ""} value="guide">Guide</option>
                <option ${ category === "buyer_guide" ? "selected" : ""} value="buyer_guide">Buyer's guide</option>
              </select>
            </div>
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
    const { background = '0', title } = this.data;
    console.log('render:', '[b]', background, '[0]',  parseInt(background), '[1]', parseInt(background) == 1 ? 'checked' : '', '[2]', parseInt(background) == 0 ? 'checked' : '' );
    node.innerHTML = `
            <div class="ce-page ce-tool ${ parseInt(background) ? "ce-itt__wrap--bg" : ""}">
                <header class="ce-tool-head">
                    <h2 class="ce-tool-head__title"> Link cards </h2>
                    <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
                </header>

                <div class="ce-tool__item ce-linkCard__author _paster_container">
                  <div class="ce-tool__label">
                      Block Title <button class="_paster_btn parser-btn" type="button"></button>
                  </div>
                  <div contenteditable="true" class="_block_title ce-tool__field _paster_target">${title}</div>
                </div>

                <form data-bg class="ce-tool-config">
                  <div class="ce-tool-config__label">On/off background</div>
                  <div class="ce-tool-config__inline">
                    <div class="ce-tool-config__item">
                        <input id="bg" name="bg" value="1" ${parseInt(background) == '1'? 'checked' : ''} type="radio">
                        <label for="bg">on</label>
                    </div>
                    <div class="ce-tool-config__item">
                        <input id="without" name="bg" value="0" ${parseInt(background) == '0' ? 'checked' : ''} type="radio">
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
    console.log('{PRE}', this, this.preloaded, this.data.items )
    if( this.preloaded && this.data.items.length > 0 ){
      this.setChildData(this.data.items)
    } else {
      createChild()
    }

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }
  save(node) {
    console.log('x', node, node.querySelector('[data-bg]'), node.querySelector('[data-bg] input:checked')  );
    return {
      background: node.querySelector('[data-bg] input:checked').value,
      title: node.querySelector('._block_title').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(item => ({
        time: item.querySelector('[data-field="time"]').innerHTML,
        type: item.querySelector('[data-field="type"]').value,
        title: item.querySelector('[data-field="title"]').innerHTML,
        link: item.querySelector('[data-field="link"]').innerHTML,
        img: item.querySelector('[data-img-input]').dataset.loaded,
        category: item.querySelector('[data-field="category"] select').value,
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



export default LinkCards;
