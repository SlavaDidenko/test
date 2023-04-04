import Block from './Block';

export class Divider extends Block {

  static get toolbox() {
    return {
      title: 'Divider',
      icon: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="0.5" y2="15.5" stroke="black" stroke-linecap="round"/>
            <line x1="23.5" y1="0.5" x2="23.5" y2="15.5" stroke="black" stroke-linecap="round"/>
            <line x1="4.5" y1="4.5" x2="19.5" y2="4.5" stroke="black" stroke-linecap="round"/>
            <line x1="4.5" y1="11.5" x2="19.5" y2="11.5" stroke="black" stroke-linecap="round"/>
            <path d="M4.5 11.5V14M19.5 11.5V14" stroke="black"/>
            <path d="M4.5 4.5V2M19.5 4.5V2" stroke="black"/>
            </svg>`
    };
  }

  constructor({ data, api }){
    super();

    this.api = api;

    if( 'size' in data && data.size ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {}
    }

    this.render = this.render.bind(this);
  }

  render() {

    let node = this.createNode();

    const { size = 'm' } = this.data;

    node.innerHTML = `
            <div data-block class="ce-page ce-tool ce-divider ce-divider--${size}">
                <header class="ce-tool-head ce-divider__head">
                    <h2 class="ce-tool-head__title"> Divider </h2>
                </header>
                  <form data-size class="ce-tool-config">
                    <div class="ce-tool-config__label">Divider size</div>
                      <div class="ce-tool-config__inline">
                        <div class="ce-tool-config__item">
                            <input id="size-m" name="size" value="m" ${size === 'm' ? 'checked' : ''} type="radio">
                            <label for="size-m">medium</label>
                        </div>
                        <div class="ce-tool-config__item">
                            <input id="size-b" name="size" value="b" ${size === 'b' ? 'checked' : ''} type="radio">
                            <label for="size-b">big</label>
                        </div>     
                      </div>           
                  </form>
            </div>
        `;

    const sizeConfig = node.querySelector('[data-size]');
    sizeConfig.addEventListener('change', e => {
      const block = node.querySelector('[data-block]');
      if(e.target.value === 'm') {
        block.classList.remove('ce-divider--b');
        block.classList.add('ce-divider--m');
      } else {
        block.classList.remove('ce-divider--m');
        block.classList.add('ce-divider--b');
      }
    })

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      size: node.querySelector('[data-size] input:checked').value,
    }
  }
}



export default Divider;