import Block from './Block';
import uniqid from 'uniqid';

export class Comparing extends Block {

  static get toolbox() {
    return {
      title: 'Comparing',
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
      this.data = {
      }
    }

    this.render = this.render.bind(this);
  }

  generateComparingListItem(data = {}) {
    const { title = '', text = '' } = data;
    let child = document.createElement('div');
    child.dataset.comparingListItem = '';

    child.innerHTML = `
      <div class="ce-compare__list-item">
        <div class="_paster_container ce-tool__item">
            <div class="ce-tool__label">
                Title <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="title" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${title}</div>
        </div>
        <div class="_paster_container ce-tool__item">
            <div class="ce-tool__label">
                Text <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="text" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${text}</div>
        </div>
        <button data-list-item-delete class="ce-compare__list-itemDelete ce-tool-delete" type="button">
            <img src="/img/admin/icons/ico-trash.svg" alt="">
        </button>
      </div>
    `;
    child.querySelector('[data-list-item-delete]').addEventListener('click', () => {
      child.remove();
    });

    return child
  }

  generateComparingList(data = {}) {
    const { listName = '', items = [] } = data;
    let child = document.createElement('div');
    child.classList.add('col');
    child.dataset.comparingList = ''

    child.innerHTML = `
      <div class="ce-compare__list">
        <div class="_paster_container ce-tool__item">
            <div class="ce-tool__label">
                List name <button class="_paster_btn parser-btn" type="button"></button>
            </div>
            <div data-field="listName" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${listName}</div>
        </div>
        <button data-list-delete class="ce-compare__list-remove" type="button">remove list</button>
        <div data-list class="ce-compare__list-item"></div>
        <button data-add-list-item class="ce-compare__list-add" type="button">add list item</button>
      </div>
    `;

    const self = this;

    const listWrap = child.querySelector('[data-list]');

    if(items.length > 0) {
      items.forEach(item => {
        listWrap.appendChild(self.generateComparingListItem(items))
      })
    } else {
      listWrap.appendChild(self.generateComparingListItem({ title: '', text: ''}))
    }

    child.querySelector('[data-list-delete]').addEventListener('click', () => {
      child.remove();
    });
    child.querySelector('[data-add-list-item]').addEventListener('click', () => {
      listWrap.appendChild(self.generateComparingListItem({ title: '', text: ''}))
    });

    return child
  }

  generateChild(data = {}){
    const {
      id = '',
      img = this.imagePlaceholder,
      tabName = '',
      tabDesc = '',
      title = '',
      subTitle = '',
      text = '',
      compareTitle = '',
      lists = [],
    } = data;
    let child = document.createElement('div');
    child.dataset.tabs = '';

    child.innerHTML = `
        <div class="ce-compare__item">
            <div class="ce-compare__item-wrap">
                
                <div class="ce-compare__item-content">
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Tab name <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="tabName" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${tabName}</div>
                  </div>
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Tab description <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="tabDesc" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${tabDesc}</div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <label class="ce-tool__item-file">
                          <img data-img src="${img}" alt="" class="ce-compare__item-icon">
                          <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
                      </label>
                    </div>
                    <div class="col-6">
                        <div class="_paster_container ce-tool__item">
                            <div class="ce-tool__label">
                                Title <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="title" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${title}</div>
                        </div>
                        <div class="_paster_container ce-tool__item">
                            <div class="ce-tool__label">
                                Sub title <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="subTitle" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${subTitle}</div>
                        </div>
                        <div class="_paster_container ce-tool__item">
                            <div class="ce-tool__label">
                                Text <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="text" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-title">${text}</div>
                        </div>
                    </div>
                  </div>
                  
                  <div class="_paster_container ce-tool__item">
                      <div class="ce-tool__label">
                          Comparing lists title <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="compareTitle" contenteditable="true" class="_paster_target ce-tool__field ce-compare__item-text">${compareTitle}</div>
                  </div>
                </div>
                
                <button data-add-list class="ce-compare__add-list" type="button">Add compare list</button>
                
                <div data-lists class="row flex-nowrap"></div>
                
                
            </div>
            
            <button data-child-delete class="ce-compare__itemDelete ce-tool-delete" type="button">
                <img src="/img/admin/icons/ico-trash.svg" alt="">
            </button>
        </div>
    `;

    const self = this;
    const listsContainer = child.querySelector('[data-lists]');

    const image = child.querySelector( '[data-img]');
    const input = child.querySelector( '[data-img-input]');
    input.addEventListener( 'change', this.changeImage(image)  );

    this.pastData(child)

    if(lists.length > 0) {
      lists.forEach(item => {
        listsContainer.appendChild(self.generateComparingList(item))
      })
    } else {
      listsContainer.appendChild(self.generateComparingList())
    }

    child.querySelector('[data-add-list]')
      .addEventListener('click', e => {
        listsContainer.appendChild(self.generateComparingList())
      })

    child.querySelector('[data-child-delete]').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
  }

  render() {

    let node = this.createNode();
    const {
      title = '',
      tabs = []
    } = this.data

    node.innerHTML = `
        <div class="ce-pages ce-tool">
          <header class="ce-tool-head">
            <h2 class="ce-tool-head__title"> Comparing </h2>
            <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
          </header>
            
          <div class="ce-tool-container ce-tool-body ce-compare">
              <div class="ce-tool__item _paster_container">
                <div class="ce-tool__label">
                    Title <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="baseTitle" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
              </div>
              <div data-tab-btns class="ce-compare__tabs">
                <button type="button">new tab</button>
              </div>
              <div data-body class="row ce-compare__wrap"></div>
          </div>
        </div>
    `;

    this.nodes.body = node.querySelector('[data-body]');
    const self = this

    const tabsButtons = node.querySelector('[data-tab-btns]');

    const createTabBtn = (name, id) => {
      const btn = document.createElement('button');
      btn.innerHTML = name;
      btn.dataset.tabId = id;
      tabsButtons.appendChild(btn)
    }
  
    const createChild = (id) => {
      let child = this.generateChild({id});
      this.nodes.body.appendChild( child );
    };

    if( this.preloaded && this.data.tabs.length > 0 ){
      this.data.tabs.forEach(tab => {
        createTabBtn(tab.tabName, tab.tabId)
      })
      this.setChildData(this.data.tabs)
    } else {
      const id = uniqid();
      createTabBtn('new tab', id);
      createChild(id);
    }

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }


  onPaste( event ){
    console.log( event );
  }

  save(node) {
    return {
      title: node.querySelector('[data-field="baseTitle"]').innerHTML,
      tabs: [...node.querySelectorAll('[data-tabs]')].map(tab => ({
        tabName: tab.querySelector('[data-field="title"]').innerHTML,
        tabDesc: tab.querySelector('[data-field="title"]').innerHTML,
        compareTitle: tab.querySelector('[data-field="title"]').innerHTML,
        img: tab.querySelector('[data-img-input]').dataset.loaded,
        title: tab.querySelector('[data-field="title"]').innerHTML,
        subTitle: tab.querySelector('[data-field="title"]').innerHTML,
        text: tab.querySelector('[data-field="text"]').innerHTML,
        lists: [...tab.querySelectorAll('[data-comparing-list]')].map(list => ({
          listName: tab.querySelector('[data-field="listName"]').innerHTML,
          items: [...list.querySelectorAll('[data-comparing-list-item]')].map(item => ({
            title: item.querySelector('[data-field="title"]').innerHTML,
            text: item.querySelector('[data-field="text"]').innerHTML,
          }))
        }))
      }))
    }
  }

  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: true,
        a: true
      },
      title: {
        br: true,
        a: true
      },
      items: {
        br: true
      }
    };
  }
}



export default Comparing;