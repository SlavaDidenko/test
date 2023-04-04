
export class Faq {

  static get toolbox() {
    return {
      title: 'Faq',
      icon: `<svg height="20" viewBox="0 -26 512.002 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m422.257812 0h-331.441406c-50.078125 0-90.816406 40.648438-90.816406 90.613281v338.878907c0 12 7.28125 22.960937 18.558594 27.921874 3.988281 1.753907 8.207031 2.605469 12.398437 2.605469 7.5 0 14.898438-2.734375 20.628907-7.949219 41.546874-37.59375 95.316406-58.292968 151.421874-58.292968h.011719l219.296875.015625c49.453125 0 89.6875-40.320313 89.6875-89.882813v-214.367187c-.003906-49.375-40.261718-89.542969-89.746094-89.542969zm59.742188 303.910156c0 33.019532-26.773438 59.878906-59.683594 59.878906l-219.296875-.015624h-.015625c-63.550781 0-124.480468 23.460937-171.582031 66.078124-.144531.132813-.554687.199219-.785156.101563-.335938-.148437-.566407-.421875-.636719-.5625v-338.777344c0-33.421875 27.28125-60.609375 60.8125-60.609375h331.441406c32.941406 0 59.742188 26.707032 59.742188 59.539063v214.367187zm0 0"/>
                <path d="m127.800781 138.992188h48.4375c8.285157 0 15-6.714844 15-15 0-8.28125-6.714843-15-15-15h-48.4375c-21.050781 0-38.171875 17.125-38.171875 38.171874v121.691407c0 8.285156 6.714844 15 15 15 8.28125 0 15-6.714844 15-15v-36.609375h56.609375c8.285157 0 15-6.714844 15-15s-6.714843-15-15-15h-56.609375v-55.082032c0-4.503906 3.664063-8.171874 8.171875-8.171874zm0 0"/>
                <path d="m256.183594 108.992188c-28.011719 0-50.804688 22.792968-50.804688 50.808593v109.058594c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-37.433594h41.609375v37.433594c0 8.28125 6.71875 15 15 15 8.285157 0 15-6.71875 15-15v-109.058594c0-28.015625-22.789062-50.808593-50.804687-50.808593zm-20.804688 92.433593v-41.625c0-11.472656 9.332032-20.808593 20.804688-20.808593s20.808594 9.335937 20.808594 20.808593v41.625zm0 0"/>
                <path d="m440.121094 253.859375h-11.882813v-94.058594c0-28.015625-22.789062-50.808593-50.804687-50.808593s-50.808594 22.792968-50.808594 50.808593v73.25c0 28.015625 22.792969 50.808594 50.808594 50.808594h62.6875c8.28125 0 15-6.71875 15-15 0-8.285156-6.71875-15-15-15zm-83.492188-20.808594v-73.25c0-11.472656 9.332032-20.808593 20.804688-20.808593s20.804687 9.335937 20.804687 20.808593v94.058594h-20.804687c-11.472656 0-20.804688-9.335937-20.804688-20.808594zm0 0"/>
            </svg>
					`
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
    this.generateChild = this.generateChild.bind(this);

  }

  generateChild(data = {}, counter ){
    let child = document.createElement('div');
    child.classList.add('ce-tool-child')

    child.innerHTML = `
			<div class="container-fluid ce-func__itemWrap _faq_item">
        <div class="ce-tool__item">
          <div class="ce-tool__label">
            Question
          </div>
          <div contenteditable="true" class="ce-tool__field _faq_item_title"></div>
        </div>
        <div class="ce-tool__item">
          <div class="ce-tool__label">
            Answer
          </div>
          <div contenteditable="true" class="ce-tool__field ce-tool__field--wp _faq_item_text"></div>
        </div>
        <button class="ce-func__itemDelete ce-tool-delete _faq_item_delete" type="button">
          <img src="/img/editor/trash.svg" alt="">
        </button>
			</div>
		`;

    const baseSelector = '._faq_item_';
    if(Object.keys(data).length > 0) {
      for(const item in data) {
        if(item in data) {
          const elem = child.querySelector(baseSelector + item);
          if(elem) {
            elem.innerHTML = data[item]
          }
        }
      }
    }

    child.querySelector('._faq_item_delete').addEventListener('click', () => {
      child.remove();
      this.save(this.nodes.wrapper);
    });

    return child;
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
			<div class="ce-func">
				<header class="ce-tool-head ce-func__head">
					<h2 class="ce-tool-head__title"> Faq </h2>
					<button class="ce-tool-head__btn ce-func__featureSlot _faq_add_slot" type="button" > add </button>
				</header>
				<div class="ce-func__body">
          <div class="ce-tool__item">
            <div class="ce-tool__label">
              Title
            </div>
            <div contenteditable="true" class="ce-tool__field _faq_title"></div>
          </div>
					<div class="row ce-func__body-wrap _faq_body"></div>
				</div>
			</div>
		`;

    this.counter = 0;

    if( this.preloaded  ){
      this.data.items.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._faq_body').appendChild( child );
        this.counter++;
      });
      node.querySelector('._faq_title').innerHTML = this.data.title
    }

    node.querySelector('._faq_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._faq_body').appendChild( child );
      this.counter++;
    });

    this.nodes.body = node.querySelector('._faq_body');

    return this.nodes.wrapper;
  }

  save(node) {
    return {
      title: node.querySelector('._faq_title').innerHTML,
      items: [...node.querySelectorAll('._faq_item')].map(item => ({
        title: item.querySelector('._faq_item_title').innerHTML,
        text: item.querySelector('._faq_item_text').innerHTML
      }))
    }
  }
}



export default Faq;