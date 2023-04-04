import Block from './Block';
import InitSelect2 from '../../../initSelect2';

export class Cases extends Block {

  static get toolbox() {
    return {
      title: 'Cases',
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

    if( Object.keys(data).length > 0 ){
      this.data = data;
      this.preloaded = true;
    } else {
        this.data = [];
    }

    this.render = this.render.bind(this);
    this.handleCases = this.handleCases.bind(this);
  }

  render() {

    let node = this.createNode();

    node.innerHTML = `
            <div data-block class="ce-page ce-tool ce-simpleBlock ce-cases">
                <header class="ce-tool-head ce-simpleBlock__head">
                    <h2 class="ce-tool-head__title"> Cases </h2>
                </header>
                <div class="row">
                    <div class="col-12">
                        <select class="_select2" name="cases[]" multiple></select>
                    </div>
                </div>
            </div>
        `;

        if( this.data && this.data.length > 0 ){
          this.data.forEach( opt => {
              let option = new Option( opt.text, opt.id );
              option.selected = true;
              this.nodes.wrapper.querySelector('._select2').appendChild( option );
          });
      }

      this.init();

      return node;
  }


  getSelect2Config(){
    return({
        ajax: {
            url: "/api/cases",
            dataType: 'json',
            data: function( params ){
                console.log( params );
                let query = {
                    search: params.term,
                }
                return query
            }, 
            method: 'GET',
            delay: 350
        }
    });
  }

  handleCases( e ){
    /*
        Callback for saving data for posts.
    */
    let cases = [];
    console.log(this);
    let selectedPosts = this.nodes.wrapper.querySelector('._select2');
    console.log('ssss', selectedPosts, this.nodes );
    if( selectedPosts && selectedPosts.options.length > 0 ){
        [...selectedPosts.options].forEach( opt => {
            if( opt.selected ){
                cases.push({
                    id: opt.value,
                    text: opt.text
                });
            }
        });
        this.data = cases;
    }
    
}

init(){
    try {
        InitSelect2(  $( this.nodes.wrapper.querySelector('._select2') ) , this.getSelect2Config(), true, this.handleCases );
    } catch (error) {
        console.log('[error]', error );
    }

}

  save(node) {
    return this.data;
  }
}



export default Cases;