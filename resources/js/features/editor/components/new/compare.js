import Block from './Block';

export class Compare extends Block {

  static get toolbox() {
    return {
      title: 'Compare',
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

    if( data ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {}
    }

    this.render = this.render.bind(this);
  }

  render() {

    let node = this.createNode();

    node.innerHTML = `
            <div data-block class="ce-page ce-tool ce-divider">
                <header class="ce-tool-head ce-divider__head">
                    <h2 class="ce-tool-head__title"> Compare </h2>
                </header>
            </div>
        `;

    return this.nodes.wrapper;
  }
  save(node) {
    return true
  }
}



export default Compare;