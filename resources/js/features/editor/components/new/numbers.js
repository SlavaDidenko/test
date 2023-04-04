import Block from './Block';

export class Numbers extends Block {

  static get toolbox() {
    return {
      title: 'Numbers',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="black" stroke-linecap="round"/>
            <line x1="23.5" y1="0.5" x2="23.5" y2="15.5" stroke="black" stroke-linecap="round"/>
            <line x1="3.5" y1="3.5" x2="14.5" y2="3.5" stroke="black" stroke-linecap="round"/>
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
      this.data = {};
    }

    this.render = this.render.bind(this);
  }

  generateChild(data = {}){
    const {
      isPercent = '1',
      num = '',
      char = '%',
      text = '',
      icon = '',
      iconHover = '',
    } = data;
    let child = document.createElement('div');
    child.classList.add('ce-numbers__item', 'col-4');
    child.dataset.item = '';

    child.innerHTML = `
          <form data-percent class="ce-tool-config">
            <div class="ce-tool-config__label">Select is percent</div>
              <div class="ce-tool-config__inline">
                <label class="ce-tool-config__item">
                    <input id="yes" name="isPercent" value="1" ${isPercent == "1" ? 'checked' : ''} type="radio">
                    <div for="yes">percent</div>
                </label>
                <label class="ce-tool-config__item">
                    <input id="no" name="isPercent" value="0" ${isPercent == "0" ? 'checked' : ''} type="radio">
                    <div for="no">symbol</div>
                </label>   
                <label class="ce-tool-config__item">
                    <input id="icon" name="isPercent" value="2" ${isPercent == "2" ? 'checked' : ''} type="radio">
                    <div for="icon">icon</div>
                </label>   

              </div>           
          </form>
          <div class="ce-numbers__item-wrap">
            <div class="_icon_type row ${ isPercent == 0 || isPercent == 1  ? 'd-none' : ''}">
              <div class="col-12">
                <input type="file" class="_select_icon" />
                <input type="file" class="_select_icon_hover" />
              </div>
               <div class="col-12">
                 <input type="text" class="_render_url_icon form-control" value="${icon}"/>
                 <input type="text" class="_render_url_icon_hover form-control" value="${iconHover}"/>
               </div>
            </div>
            <div class="_other_type row ${ isPercent == 2 ? 'd-none' : ''}">
                <div class="col-6">
                  <div class="ce-tool__item ce-numbers__text _paster_container">
                    <div class="ce-tool__label">
                        Number <button class="_paster_btn parser-btn" type="button"></button>
                    </div>
                    <div data-field="num" contenteditable="true" class="ce-tool__field _paster_target">${num}</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="ce-tool__item ce-numbers__author _paster_container">
                    <div class="ce-tool__label">
                        Symbol <button class="_paster_btn parser-btn" type="button"></button>
                    </div>
                    <div data-field="char" contenteditable="${parseInt(isPercent) ? 'false' : 'true'}" class="ce-tool__field _paster_target">${char}</div>
                  </div>
                </div>
            </div>
            <div class="ce-tool__item ce-numbers__text _paster_container">
              <div class="ce-tool__label">
                  Text <button class="_paster_btn parser-btn" type="button"></button>
              </div>
              <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${text}</div>
            </div>
           </div>
          
          <button data-child-delete class="ce-itt__itemDelete ce-tool-delete" type="button">
              <img src="/img/admin/icons/ico-trash.svg" alt="">
          </button>
    `;

    this.pastData(child)

    const percentConfig = child.querySelector('[data-percent]');
    percentConfig.addEventListener('change', e => {
      const charField = child.querySelector('[data-field="char"]');
      const isPercentVal = parseInt(e.target.value);
      if(isPercentVal == 1) {
        child.querySelector('._icon_type').classList.add('d-none');
        child.querySelector('._other_type').classList.remove('d-none'); 
        charField.setAttribute('contenteditable', 'false');
        charField.innerHTML = '%'
      } 
      if( isPercentVal == 0){
        child.querySelector('._icon_type').classList.add('d-none');
        child.querySelector('._other_type').classList.remove('d-none'); 
        charField.setAttribute('contenteditable', 'true');
        charField.innerHTML = ''
      }
      if( isPercentVal == 2){
        child.querySelector('._icon_type').classList.remove('d-none');
        child.querySelector('._other_type').classList.add('d-none');        
      }
    })

    const uploadIco = (inputFileSelector, renderSelector) => {
      const uploader = child.querySelector(inputFileSelector);
      if( uploader ){
        uploader.addEventListener('change', (e) => {
          console.log('[file]', e.target.files[0] );

          const formData = new FormData();
          formData.append('image', e.target.files[0] );


          fetch(`/api/add-photo-to-post`, {
            method: 'POST',
            body: formData
          })
            .then( res => res.json() )
            .then( res => {
              if( res.success ){
                child.querySelector(renderSelector).value = res.file.url;
                this.save(this.nodes.wrapper);
              }
            });
        });
      }
    }

    uploadIco('._select_icon', '._render_url_icon');
    uploadIco('._select_icon_hover', '._render_url_icon_hover');

    child.querySelector('[data-child-delete]').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
  }

  render() {

    let node = this.createNode();
    const {
      perRow = '4',
      title = '',
      items = []
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head">
                    <h2 class="ce-tool-head__title"> Numbers </h2>
                    <button data-add-slot class="ce-tool-head__btn" type="button" > Add </button>
                </header>
                <div class="ce-tool-config__wrap">
                  <form data-per-row class="ce-tool-config">
                      <div class="ce-tool-config__label">Items per row</div>
                        <div class="ce-tool-config__inline">
                          <div class="ce-tool-config__item">
                              <input id="col-5" name="col" value="3" ${perRow === '3' ? 'checked' : ''} type="radio">
                              <label for="col-5">4</label>
                          </div>
                          <div class="ce-tool-config__item">
                              <input id="col-6" name="col" value="4" ${perRow === '4' ? 'checked' : ''} type="radio">
                              <label for="col-6">3</label>
                          </div>     
                        </div>           
                    </form>
                </div>
                <div data-body class="ce-tool-container ce-tool-body row ce-numbers">
                    <div class="ce-tool__item _paster_container">
                      <div class="ce-tool__label">
                          Title <button class="_paster_btn parser-btn" type="button"></button>
                      </div>
                      <div data-field="baseTitle" contenteditable="true" class="ce-tool__field _paster_target">${title}</div>
                    </div>
                </div>
            </div>
        `;


    this.nodes.body = node.querySelector('[data-body]');

    const createChild = () => {
      let child = this.generateChild();
      this.nodes.body.appendChild( child );
    }

    if( this.preloaded && items.length > 0 ){
      this.setChildData(items)
    } else {
      createChild()
    }

    node.querySelector('[data-add-slot]').addEventListener('click', createChild);

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      title: node.querySelector('[data-field="baseTitle"]').innerHTML,
      perRow: node.querySelector('[data-per-row] input:checked').value,
      items: [...node.querySelectorAll('[data-item]')].map(item => ({
        isPercent: item.querySelector('[data-percent] input:checked').value,
        num: item.querySelector('[data-field="num"]').innerHTML,
        char: item.querySelector('[data-field="char"]').innerHTML,
        text: item.querySelector('[data-field="text"]').innerHTML,
        icon: item.querySelector('._render_url_icon').value,
        iconHover: item.querySelector('._render_url_icon_hover').value,
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
      },
      title: {
        br: true
      }
    };
  }
}



export default Numbers;