
export class AboutSystem {

  static get toolbox() {
    return {
      title: 'AboutSystem',
      icon: `<svg enable-background="new 0 0 512.004 512.004" height="20" viewBox="0 0 512.004 512.004" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m408.567 245.763c-9.403-2.502-16.172-8.642-19.577-17.756-1.471-3.94-3.106-7.882-4.858-11.715-4.05-8.858-3.608-17.996 1.278-26.423 10.524-18.151 7.528-41.175-7.286-55.988-14.814-14.815-37.838-17.811-55.989-7.286-8.427 4.886-17.563 5.328-26.422 1.279-3.828-1.75-7.77-3.384-11.714-4.857-9.115-3.403-15.255-10.173-17.758-19.578-5.394-20.274-23.792-34.434-44.741-34.434s-39.348 14.16-44.741 34.434c-2.502 9.404-8.643 16.173-17.757 19.577-3.941 1.472-7.883 3.105-11.715 4.857-8.857 4.05-17.994 3.608-26.422-1.279-18.151-10.525-41.175-7.528-55.989 7.287-18.048 18.047-18.048 47.413 0 65.46l1.806 1.806c-7.854 13.553-13.831 27.968-17.86 43.069h-2.534c-25.523 0-46.288 20.764-46.288 46.288 0 20.949 14.16 39.347 34.433 44.741 9.403 2.502 16.173 8.643 19.577 17.757 1.472 3.94 3.106 7.882 4.858 11.715 4.05 8.858 3.608 17.995-1.278 26.422-10.524 18.151-7.528 41.174 7.287 55.988 14.814 14.814 37.839 17.811 55.989 7.286 8.428-4.887 17.564-5.329 26.423-1.279 3.831 1.751 7.772 3.385 11.714 4.857 9.115 3.403 15.255 10.173 17.757 19.577 5.394 20.274 23.792 34.435 44.741 34.435s39.348-14.16 44.741-34.434c2.502-9.404 8.643-16.174 17.759-19.578 3.95-1.476 7.892-3.11 11.712-4.857 8.858-4.048 17.995-3.607 26.422 1.279 18.152 10.523 41.174 7.528 55.988-7.286 14.815-14.813 17.812-37.837 7.287-55.988-4.886-8.428-5.328-17.565-1.278-26.423 1.752-3.833 3.387-7.774 4.858-11.716 3.404-9.114 10.173-15.254 19.576-17.756 20.274-5.394 34.434-23.792 34.434-44.739 0-20.95-14.16-39.348-34.433-44.742zm-7.714 60.491c-18.922 5.036-33.115 17.91-39.966 36.251-1.223 3.276-2.582 6.553-4.038 9.738-8.15 17.827-7.224 36.984 2.609 53.944 3.713 6.403 2.666 14.516-2.546 19.728-5.211 5.212-13.324 6.258-19.728 2.546-16.958-9.833-36.115-10.76-53.944-2.609-3.176 1.452-6.452 2.811-9.735 4.037-18.344 6.85-31.219 21.044-36.254 39.969-1.903 7.152-8.379 12.147-15.75 12.147-7.37 0-13.847-4.995-15.75-12.148-5.036-18.924-17.911-33.119-36.254-39.968-3.276-1.224-6.552-2.582-9.736-4.037-8.038-3.675-16.345-5.504-24.6-5.504-10.055 0-20.031 2.714-29.344 8.114-6.404 3.712-14.516 2.666-19.729-2.547-5.212-5.211-6.259-13.323-2.546-19.727 9.833-16.959 10.759-36.117 2.61-53.943-1.457-3.187-2.815-6.463-4.039-9.738-6.85-18.342-21.043-31.217-39.967-36.253-7.151-1.903-12.146-8.38-12.146-15.75 0-8.981 7.307-16.288 16.288-16.288h14.469c7.185 0 13.361-5.095 14.727-12.15 3.802-19.643 11.431-38.042 22.676-54.688 4.021-5.953 3.257-13.922-1.823-19.003l-10.247-10.247c-6.351-6.351-6.351-16.684 0-23.035 5.212-5.211 13.324-6.259 19.728-2.546 16.959 9.833 36.117 10.761 53.942 2.61 3.185-1.456 6.461-2.814 9.737-4.037 18.343-6.85 31.218-21.044 36.253-39.968 1.903-7.152 8.379-12.147 15.75-12.147 7.37 0 13.847 4.995 15.75 12.147 5.036 18.924 17.911 33.119 36.254 39.968 3.279 1.224 6.554 2.583 9.736 4.037 17.827 8.149 36.984 7.222 53.942-2.61 6.402-3.714 14.516-2.666 19.728 2.547 5.212 5.211 6.259 13.324 2.546 19.727-9.833 16.959-10.759 36.117-2.609 53.944 1.457 3.187 2.816 6.463 4.039 9.738 6.851 18.342 21.044 31.216 39.966 36.251 7.152 1.903 12.147 8.38 12.147 15.75.001 7.37-4.994 13.847-12.146 15.75z"/>
                <path d="m221.501 173.297c-64.628 0-117.207 52.579-117.207 117.207s52.579 117.207 117.207 117.207 117.207-52.579 117.207-117.207-52.579-117.207-117.207-117.207zm0 204.414c-14.589 0-28.35-3.606-40.446-9.966 8.615-13.932 23.807-22.609 40.446-22.609 16.539 0 31.842 8.897 40.421 22.623-12.091 6.351-25.843 9.952-40.421 9.952zm-23.589-87.207c0-13.007 10.582-23.588 23.589-23.588s23.588 10.582 23.588 23.588-10.582 23.589-23.588 23.589-23.589-10.582-23.589-23.589zm87.833 58.906c-4.86-7.177-10.898-13.578-17.86-18.796-2.105-1.578-4.278-3.025-6.499-4.369 8.513-9.49 13.703-22.02 13.703-35.742 0-29.549-24.04-53.588-53.588-53.588s-53.589 24.04-53.589 53.588c0 13.707 5.179 26.223 13.675 35.709-9.618 5.786-17.964 13.653-24.369 23.155-14.227-15.524-22.923-36.197-22.923-58.865 0-48.086 39.121-87.207 87.207-87.207s87.207 39.121 87.207 87.207c-.001 22.69-8.713 43.379-22.964 58.908z"/>
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
    child.classList.add('col-6')

    child.innerHTML = `
			<div class="container-fluid ce-tool-child ce-abSys__itemWrap _ab_sys_item">
        <div class="ce-tool__item">
          <div class="ce-tool__label">
            Title
          </div>
          <div contenteditable="true" class="ce-tool__field _ab_sys_item_title"></div>
        </div>
        <div class="ce-tool__item">
          <div class="ce-tool__label">
            Description
          </div>
          <div contenteditable="true" class="ce-tool__field ce-tool__field--wp _ab_sys_item_text"></div>
        </div>
        <button class="ce-abSys__itemDelete ce-tool-delete _ab_sys_item_delete" type="button">
          <img src="/img/editor/trash.svg" alt="">
        </button>
			</div>
		`;

    const baseSelector = '._ab_sys_item_';
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

    child.querySelector('._ab_sys_item_delete').addEventListener('click', () => {
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
			<div class="ce-abSys">
				<header class="ce-tool-head ce-abSys__head">
					<h2 class="ce-tool-head__title"> About system </h2>
					<button class="ce-tool-head__btn ce-abSys__featureSlot _ab_sys_add_slot" type="button" > add </button>
				</header>
				<div class="ce-abSys__body">
          <div class="ce-tool__item">
            <div class="ce-tool__label">
              Title
            </div>
            <div contenteditable="true" class="ce-tool__field _ab_sys_title"></div>
          </div>
          <div class="ce-tool__item">
            <div class="ce-tool__label">
              Sub-title
            </div>
            <div contenteditable="true" class="ce-tool__field _ab_sys_subTitle"></div>
          </div>
					<div class="row ce-abSys__body-wrap _ab_sys_body"></div>
					<div class="ce-tool__item">
            <div class="ce-tool__label">
              Bottom text
            </div>
            <div contenteditable="true" class="ce-tool__field _ab_sys_bottomTxt"></div>
          </div>
          <div class="ce-tool__item">
            <div class="ce-tool__label">
              Button name
            </div>
            <div contenteditable="true" class="ce-tool__field _ab_sys_btn"></div>
          </div>
				</div>
			</div>
		`;

    this.counter = 0;

    if( this.preloaded  ){
      this.data.items.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._ab_sys_body').appendChild( child );
        this.counter++;
      });
      Object.keys(this.data.base).forEach(key => {
        if(key in this.data.base) {
          const field = node.querySelector(`._ab_sys_${key}`);
          if(field) {
            field.innerHTML = this.data.base[key]
          }
        }
      })
    }

    node.querySelector('._ab_sys_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._ab_sys_body').appendChild( child );
      this.counter++;
    });

    this.nodes.body = node.querySelector('._ab_sys_body');

    return this.nodes.wrapper;
  }

  save(node) {
    return {
      base: {
        title: node.querySelector('._ab_sys_title').innerHTML,
        subTitle: node.querySelector('._ab_sys_subTitle').innerHTML,
        bottomTxt: node.querySelector('._ab_sys_bottomTxt').innerHTML,
        btn: node.querySelector('._ab_sys_btn').innerHTML,
      },
      items: [...node.querySelectorAll('._ab_sys_item')].map(item => ({
        title: item.querySelector('._ab_sys_item_title').innerHTML,
        text: item.querySelector('._ab_sys_item_text').innerHTML
      }))
    }
  }
}



export default AboutSystem;