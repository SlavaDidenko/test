import Block from './Block';
import List from '@editorjs/list';

export class TwoColBlocks extends Block {
  static get enableLineBreaks() {
    return true;
  }

  static get toolbox() {
    return {
      title: 'Two col blocks',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="black" stroke-linecap="round"/>
              <line x1="23.5" y1="0.5" x2="23.5" y2="15.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="3.5" x2="9.5" y2="3.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="6.5" x2="9.5" y2="6.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="8.5" x2="9.5" y2="8.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="10.5" x2="9.5" y2="10.5" stroke="black" stroke-linecap="round"/>
              <line x1="4.5" y1="12.5" x2="9.5" y2="12.5" stroke="black" stroke-linecap="round"/>
              <rect x="13.5" y="5.5" width="6" height="5" rx="1.5" stroke="black" fill="#fff"/>
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

  generateChild( data = {}){
    if( !data.subitems ){ data.subitems = []; }
    if( !data.list ){ data.list = []; }

    const {
      img = this.imagePlaceholder,
      type = 'text',
      title = '',
      text = '',
      link = '',
      subitems_title = '',
      videoImg = 0,
      videoId = '',
      list,
      subitems: [],
      learn_more = false
    } = data;

    let child = document.createElement('div');
    child.dataset.item = '';
    child.classList.add('ce-tcb__item', 'row');

    const listInstance = new List({
      data: { style: 'unordered', items: list },
      api: this.api,
      readOnly: false
    });
    const listNode = listInstance.render();
    listNode.dataset.field = 'list';

    child.innerHTML = `
          <div class="col-12">
            <form data-type class="ce-tool-config">
                <div class="ce-tool-config__label">Content type</div>
                <div class="ce-tool-config__inline">
                  <div class="ce-tool-config__item">
                      <input id="text" name="contentType" value="text" ${type === 'text' ? 'checked' : ''} type="radio">
                      <label for="text">text</label>
                  </div>
                  <div class="ce-tool-config__item">
                      <input id="list" name="contentType" value="list" ${type === 'list' ? 'checked' : ''} type="radio">
                      <label for="list">list</label>
                  </div>     
                </div>           
            </form>
             <form data-videoImg class="ce-tool-config">
                <div class="ce-tool-config__label">Video or image</div>
                  <div class="ce-tool-config__inline">
                    <div class="ce-tool-config__item">
                        <input id="isvideo" name="videoImg" value="1" ${parseInt(videoImg) === 1 ? 'checked' : ''} type="radio">
                        <label for="isvideo">Video</label>
                    </div>
                    <div class="ce-tool-config__item">
                        <input id="isimage" name="videoImg" value="0" ${parseInt(videoImg) === 0 ? 'checked' : ''} type="radio">
                        <label for="isimage">Image</label>
                    </div>     
                  </div>           
              </form>
          </div>
          
          <div class="col-6 ce-tcb__item-content">
            <div class="ce-tool__item ce-tcb__text _paster_container">
              <div class="ce-tool__label">
                  Title <button class="_paster_btn parser-btn" type="button"></button>
              </div>
              <div data-field="title" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
            </div>
            <div data-type-text class="ce-tool__item ce-tcb__author _paster_container">
              <div class="ce-tool__label">
                  Text <button class="_paster_btn parser-btn" type="button"></button>
              </div>
              <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${text}</div>
            </div>
            <div data-type-text class="ce-tool__item ce-tcb__author _paster_container">
              <div class="ce-tool__label">
                  Link <button class="_paster_btn parser-btn" type="button"></button>
              </div>
              <div data-field="link" contenteditable="true" class="ce-tool__field _paster_target">${link}</div>
            </div>
            <label data-type-text class="ce-tool__item ce-tcb__author">
              <div class="ce-tool__label">
                  Show "Learn more" link
              </div>
              <input type="checkbox" data-field="learn-more" ${ learn_more ? 'checked' : ''}/>
            </label>

            <div data-type-text class="ce-tool__item ce-tcb__author _paster_container">
              <div class="ce-tool__label">
                  Subitems title <button class="_paster_btn parser-btn" type="button"></button>
              </div>
              <div data-field="subitems_title" contenteditable="true" class="ce-tool__field _paster_target">${subitems_title}</div>
            </div>

            <div data-type-list class="ce-tool__item ce-tcb__author">
              <div class="ce-tool__label">
                  List
              </div>
            </div>
          </div>
          <div class="col-6">
              <div data-block-video class="ce-tool__item _paster_container" style="display: ${parseInt(videoImg) === 0 ? 'none' : ''}">
                <div class="ce-tool__label">
                    Video ID <button class="_paster_btn parser-btn" type="button"></button>
                </div>
                <div data-field="videoId" contenteditable="true" class="ce-tool__field _paster_target">${videoId}</div>
              </div>
                <div data-block-image class="ce-tool__item" style="display: ${parseInt(videoImg) === 1 ? 'none' : ''}">
                      <div class="ce-tool__label">
                          Image
                      </div>
                      <label class="ce-tool__item-file">
                        <img data-img src="${img}" alt="" class="ce-mediaText__item-img">
                        <input data-img-input type="file" accept="image/*" value="" data-loaded="${img}">
                    </label>
                </div>
          </div>
          <br />
          <br />
          <div class="col-12 row" style="margin-top: 20px">
            <div class="col-10">
              <h3> Subitems:</h3>
            </div>
            <div class="col-2">
              <button class="_subitem_add" type="button"> Add item</button>
            </div>
          </div>
          <div class="row col-12 _subitems_container"></div>
          <div class="col-12">
              <button data-child-delete class="ce-tcb__itemDelete ce-tool-delete" type="button">
                  <img src="/img/admin/icons/ico-trash.svg" alt="">
              </button> 
          </div>
    `;

    const nodeWrapText = child.querySelector('[data-type-text]');
    const nodeWrapList = child.querySelector('[data-type-list]');

    nodeWrapList.appendChild(listNode);

    const typeToggle = type => {
      if(type === 'text') {
        nodeWrapText.style.display = '';
        nodeWrapList.style.display = 'none';
      } else {
        nodeWrapText.style.display = 'none';
        nodeWrapList.style.display = '';
      }
    }

    typeToggle(type);

    const videImgConfig = child.querySelector('[data-videoImg]');
    videImgConfig.addEventListener('change', e => {
      const imageBlock = child.querySelector('[data-block-image]');
      const videoBlock = child.querySelector('[data-block-video]');
      if(parseInt(e.target.value) === 0) {
        imageBlock.style.display = ''
        videoBlock.style.display = 'none'
      } else {
        imageBlock.style.display = 'none'
        videoBlock.style.display = ''
      }
    })

    const image = child.querySelector( '[data-img]');
    const input = child.querySelector( '[data-img-input]');
    input.addEventListener( 'change', this.changeImage(image)  );

    this.pastData(child)

    child.querySelector('[data-child-delete]').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    const typeConfig = child.querySelector('[data-type]');
    typeConfig.addEventListener('change', e => {
      typeToggle(e.target.value)
    })

    const renderSubitem = ( subitem_data = { text: '' }) => {
      const node = document.createElement('div');
      node.className = "col-4";
      node.innerHTML = `
        <div data-subitem class="ce-tool__item ce-tcb__author _subitem_block _paster_container">
          <div class="ce-tool__label" style="display:flex; justify-content: space-between; align-items: center;">
              Text
              <button type="button" class="ce-tool-delete _remove_subitem" style="padding: 3px 10px">x</button>
          </div>
          <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${subitem_data.text}</div>
        </div>
      `;

      node.querySelector('._remove_subitem').addEventListener('click', () => {
        node.remove();
      });

      return node;
    }


    child.querySelector('._subitem_add').addEventListener('click', () => {
      const target = child.querySelector('._subitems_container');
      const node = renderSubitem();
      target.appendChild( node );
    });

    if( data.subitems && Array.isArray(data.subitems) ){
      data.subitems.map(  subitem => {
        const target = child.querySelector('._subitems_container');
        const node = renderSubitem(subitem);
        target.appendChild( node );
      });
    }

    return child;
  }

  render() {

    let node = this.createNode();
    const {
      size = 'semi',
      border = '1',
      counter = '1',
      direction = 'base',
      title = '',
      text = ''
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head">
                    <h2 class="ce-tool-head__title"> Two col blocks </h2>
                    <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
                </header>
                
                <div class="ce-tool-config__wrap">
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
                  <form data-counter class="ce-tool-config">
                    <div class="ce-tool-config__label">On/off block counter</div>
                    <div class="ce-tool-config__inline">
                      <div class="ce-tool-config__item">
                          <input id="counter" name="counter" value="1" ${parseInt(counter) ? 'checked' : ''} type="radio">
                          <label for="counter">on</label>
                      </div>
                      <div class="ce-tool-config__item">
                          <input id="without" name="counter" value="0" ${!parseInt(counter) ? 'checked' : ''} type="radio">
                          <label for="without">off</label>
                      </div>         
                    </div>
                  </form>
                  <form data-direction class="ce-tool-config">
                      <div class="ce-tool-config__label">Cols direction</div>
                      <div class="ce-tool-config__inline">
                        <div class="ce-tool-config__item">
                            <input id="base" name="direction" value="base" ${direction === 'base' ? 'checked' : ''} type="radio">
                            <label for="base">base</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="reverse" name="direction" value="reverse" ${direction === 'reverse' ? 'checked' : ''} type="radio">
                            <label for="reverse">reverse</label>
                        </div>         
                      </div>
                  </form>
                  <form data-size class="ce-tool-config">
                      <div class="ce-tool-config__label">Content size</div>
                      <div class="ce-tool-config__inline">
                        <div class="ce-tool-config__item">
                            <input id="img" name="direction" value="img" ${size === 'img' ? 'checked' : ''} type="radio">
                            <label for="img">Big image</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="text" name="direction" value="text" ${size === 'text' ? 'checked' : ''} type="radio">
                            <label for="text">Big text</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="semi" name="direction" value="semi" ${size === 'semi' ? 'checked' : ''} type="radio">
                            <label for="semi">Semi</label>
                        </div>         
                      </div>
                  </form>
                </div>
                
                  
                <div class="container-fluid ce-tool-body ce-tcb">
                    <div data-body data-counter="${counter}" data-direction="${direction}" class="ce-tcb__wrap ce-tcb__wrap--${direction} ${parseInt(counter) ? 'ce-tcb__wrap--counter' : ''}">
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
                </div>
            </div>
        `;

    this.nodes.body = node.querySelector('[data-body]');

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    };

    const self = this;
    const directionConfig = this.nodes.wrapper.querySelector('[data-direction]');
    directionConfig.addEventListener('change', e => {
      const container = self.nodes.wrapper.querySelector('[data-body]');
      if(e.target.value === 'base') {
        container.classList.add('ce-tcb__wrap--base')
        container.classList.remove('ce-tcb__wrap--reverse')
      } else {
        container.classList.add('ce-tcb__wrap--reverse')
        container.classList.remove('ce-tcb__wrap--base')
      }
      container.dataset.direction = e.target.value
    })

    const counterConfig = this.nodes.wrapper.querySelector('[data-counter]');
    counterConfig.addEventListener('change', e => {
      const container = self.nodes.wrapper.querySelector('[data-body]');
      if(parseInt(e.target.value)) {
        container.classList.add('ce-tcb__wrap--counter')
      } else {
        container.classList.remove('ce-tcb__wrap--counter')
      }
      container.dataset.counter = e.target.value
    })

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
      size: node.querySelector('[data-size] input:checked').value,
      border: node.querySelector('[data-border] input:checked').value,
      counter: node.querySelector('[data-body]').dataset.counter,
      direction: node.querySelector('[data-body]').dataset.direction,
      title: node.querySelector('[data-field="title"]').innerHTML,
      text: node.querySelector('[data-field="text"]').innerHTML,
      items: [...node.querySelectorAll('[data-item]')].map(item => ({
        type: item.querySelector('[data-type] input:checked').value,
        img: item.querySelector('[data-img-input]').dataset.loaded,
        title: item.querySelector('[data-field="title"]').innerHTML,
        text: item.querySelector('[data-field="text"]').innerHTML,
        link: item.querySelector('[data-field="link"]').innerHTML,
        learn_more: item.querySelector('[data-field="learn-more"]').checked,
        videoImg: parseInt(item.querySelector('[data-videoImg] input:checked').value),
        videoId: item.querySelector('[data-field="videoId"]').innerHTML,
        subitems_title: item.querySelector('[data-field="subitems_title"]').innerHTML,
        list: [...item.querySelectorAll('[data-field="list"] li')].map(el => el.innerHTML),
        subitems: [ ...item.querySelectorAll('._subitem_block') ].map( item => ({
          text: item.querySelector('[data-field="text"]').innerHTML,
        }))
      })),
    }
  }

  static get sanitize() {
    return {
      title: {
        br: true,
      },
      text: {
        br: true,
      },
      items: {
        br: true,
      }
    };
  }
}



export default TwoColBlocks;
