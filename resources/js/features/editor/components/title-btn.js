
export class TitleBtn {

  static get toolbox() {
    return {
      title: 'TitleBtn',
      icon: `<svg enable-background="new 0 0 32 32" height="20px" viewBox="0 0 32 32" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="none" height="20" width="20"/>
                  <polygon points="2,6 2,4 30,4 30,6 2,6  "/>
                  <polygon points="2,14 2,12 30,12 30,14 2,14  "/>
                  <polygon points="2,22 2,20 30,20 30,22 2,22  "/>
                  <polygon points="2,10 2,8 22,8 22,10 2,10  "/>
                  <polygon points="2,18 2,16 22,16 22,18 2,18  "/>
                  <polygon points="2,26 2,24.001 22,24.001 22,26 2,26  "/>
              </svg>`
    };
  }

  constructor({ data, api }){

    this.nodes = {
      wrapper: null
    }

    this.preloaded = false;
    this.data = {};

    if( Object.keys(data).length > 0 ){
      this.data = data;
      this.preloaded = true;
    }

    this.render = this.render.bind(this);
  }

  render() {

    let node;
    if( this.nodes.wrapper ){
      node = this.nodes.wrapper;
    } else {
      this.nodes.wrapper =  document.createElement('div');
      node = this.nodes.wrapper;
    }

    node.innerHTML = `
            <div class="ce-titleBtn">
                <header class="ce-tool-head ce-titleBtn__head">
                    <h2 class="ce-tool-head__title"> Title & Button </h2>
                </header>
                <div class="container-fluid ce-titleBtn__body relative">
                    <div class="ce-titleBtn__body-wrap _titleBtn_body">
                        <div class="ce-tool__item">
                          <div class="ce-tool__label">
                              Title
                          </div>
                          <div contenteditable="true" class="ce-tool__field _titleBtn_title"></div>
                        </div>
                        <div class="ce-tool__item">
                          <div class="ce-tool__label">
                              Button title
                          </div>
                          <div contenteditable="true" class="ce-tool__field _titleBtn_btn"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    const baseSelector = '._titleBtn_';

    if(Object.keys(this.data).length > 0) {
      for(const item in this.data) {
        if(item in this.data) {
          const elem = node.querySelector(baseSelector + item);
          if(elem) {
            elem.innerHTML = this.data[item]
          }
        }
      }
    }

    this.nodes.body = node.querySelector('._titleBtn_body');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      title: node.querySelector('._titleBtn_title').innerHTML,
      btn: node.querySelector('._titleBtn_btn').innerHTML,
    }
  }
}



export default TitleBtn;