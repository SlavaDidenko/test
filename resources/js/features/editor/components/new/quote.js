import Block from './Block';

export class Quote extends Block {

  static get toolbox() {
    return {
      title: 'Quote',
      icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H4.414C3.88361 11.0001 3.37499 11.2109 3 11.586L1 13.586V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14.793C2.10149e-05 14.8919 0.0293926 14.9886 0.0843973 15.0709C0.139402 15.1531 0.217567 15.2172 0.308999 15.255C0.400432 15.2928 0.501021 15.3026 0.598036 15.2832C0.695051 15.2638 0.784131 15.216 0.854 15.146L3.707 12.293C3.89449 12.1055 4.14881 12.0001 4.414 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0Z" fill="black"/>
            <path d="M7.06602 4.75998C6.87123 4.45663 6.58324 4.2247 6.24534 4.09904C5.90743 3.97339 5.53788 3.9608 5.19221 4.06317C4.84654 4.16554 4.54343 4.37734 4.32845 4.66673C4.11346 4.95612 3.99821 5.30748 4.00002 5.66798C4.0002 5.96652 4.08055 6.25953 4.23266 6.5164C4.38478 6.77327 4.60309 6.98458 4.86478 7.12825C5.12647 7.27192 5.42194 7.34267 5.72032 7.33313C6.0187 7.32358 6.30905 7.23408 6.56102 7.07398C6.43002 7.46298 6.18602 7.87798 5.78402 8.29398C5.70711 8.37355 5.66495 8.48041 5.66683 8.59105C5.6687 8.7017 5.71446 8.80707 5.79402 8.88398C5.87359 8.96089 5.98045 9.00305 6.09109 9.00117C6.20174 8.9993 6.30711 8.95355 6.38402 8.87398C7.87002 7.33398 7.67702 5.65998 7.06602 4.76198V4.75998ZM11.066 4.75998C10.8712 4.45663 10.5832 4.2247 10.2453 4.09904C9.90743 3.97339 9.53787 3.9608 9.19221 4.06317C8.84654 4.16554 8.54343 4.37734 8.32845 4.66673C8.11346 4.95612 7.99821 5.30748 8.00002 5.66798C8.0002 5.96652 8.08055 6.25953 8.23266 6.5164C8.38478 6.77327 8.60309 6.98458 8.86478 7.12825C9.12647 7.27192 9.42194 7.34267 9.72032 7.33313C10.0187 7.32358 10.309 7.23408 10.561 7.07398C10.43 7.46298 10.186 7.87798 9.78402 8.29398C9.70711 8.37355 9.66495 8.48041 9.66683 8.59105C9.6687 8.7017 9.71446 8.80707 9.79402 8.88398C9.87359 8.96089 9.98045 9.00305 10.0911 9.00117C10.2017 8.9993 10.3071 8.95355 10.384 8.87398C11.87 7.33398 11.677 5.65998 11.066 4.76198V4.75998Z" fill="black"/>
            </svg>`
    };
  }

  constructor({ data, api }){
    super();

    this.api = api;
    if( 'txt' in data ){
      this.data = data;
      this.preloaded = true;
    } else {
      this.data = {}
    }

    this.render = this.render.bind(this);
  }

  render() {

    let node = this.createNode();
    const {
      txt = ''
    } = this.data;

    node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head ce-quote__head">
                    <h2 class="ce-tool-head__title"> Quote </h2>
                </header>
               
                <div class="container-fluid ce-tool-body ce-quote">
                    <div data-body class="row ce-quote__wrap">
                        <div data-col-content class="col-10">
               
                          <div class="ce-tool__item _paster_container">
                            <div class="ce-tool__label">
                                Text <button class="_paster_btn parser-btn" type="button"></button>
                            </div>
                            <div data-field="text" contenteditable="true" class="ce-tool__field _paster_target">${txt}</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    this.pastData(node)

    this.nodes.body = node.querySelector('[data-body]');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      txt: node.querySelector('[data-field="text"]').innerHTML
    }
  }

  static get sanitize() {
    return {
      br: true
    };
  }
}



export default Quote;