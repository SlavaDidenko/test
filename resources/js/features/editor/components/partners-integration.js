import saveImageToServer from '../../saveImageToServer';

export class PartnersIntegration {

  static get toolbox() {
    return {
      title: 'Partners & Integration',
      icon: `<svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m509.936 204.478-90.999-155.063c-4.173-7.109-13.299-9.52-20.436-5.398l-54.538 31.487-49.125-18.069c-15.364-5.651-32.308-4.198-46.485 3.988l-74.597 43.069-66.133-38.183c-3.516-2.03-7.703-2.547-11.609-1.436-3.904 1.112-7.191 3.758-9.11 7.337l-85.121 158.701c-3.828 7.139-1.297 16.03 5.719 20.08l33.777 19.502-16.939 29.339c-12.407 21.489-5.018 49.064 16.471 61.471 9.974 5.758 21.257 7.246 31.728 5.045 3.329 10.168 10.259 19.197 20.233 24.955s21.257 7.246 31.728 5.045c3.329 10.168 10.259 19.197 20.233 24.955s21.257 7.246 31.728 5.045c3.33 10.169 10.26 19.197 20.234 24.955 21.489 12.407 49.064 5.018 61.471-16.471l1.938-3.357 56.291 32.5c21.489 12.407 49.064 5.018 61.471-16.471 2.928-5.072 4.74-10.484 5.538-15.954 19.14 5.041 40.081-3.06 50.442-21.007 3.568-6.18 5.49-12.864 5.919-19.545 16.374.859 32.656-7.27 41.401-22.417s7.644-33.312-1.287-47.063c5.572-3.712 10.399-8.719 13.967-14.899 12.064-20.895 5.407-47.54-14.726-60.404l27.41-22.565c5.695-4.686 7.138-12.814 3.406-19.172zm-246.583-117.074c6.444-3.722 14.143-4.381 21.13-1.812l55.718 20.494c4.18 1.537 8.822 1.138 12.678-1.088l47.723-27.553 76.982 131.179-26.163 21.539-180.166-104.02c-4.641-2.68-10.359-2.68-15 0l-82.921 47.874c-6.901 4.175-16.603 1.576-20.49-5.49-4.175-6.899-1.575-16.604 5.49-20.49zm-207.541 247.918c-7.163-4.136-9.626-13.327-5.49-20.49l25-43.301c4.136-7.163 13.327-9.626 20.49-5.49s9.626 13.327 5.49 20.49l-25 43.301c-4.135 7.163-13.327 9.626-20.49 5.49zm51.961 30c-7.163-4.136-9.626-13.327-5.49-20.49l35-60.622c4.136-7.164 13.327-9.626 20.49-5.49s9.626 13.327 5.49 20.49l-35 60.622c-4.135 7.163-13.327 9.626-20.49 5.49zm51.961 30c-7.163-4.136-9.626-13.327-5.49-20.49l25-43.301c4.136-7.163 13.327-9.626 20.49-5.49s9.626 13.327 5.49 20.49l-25 43.301c-4.135 7.163-13.326 9.626-20.49 5.49zm51.962 30.001c-7.163-4.136-9.627-13.328-5.491-20.491l15-25.981c4.136-7.163 13.328-9.626 20.491-5.49s9.626 13.327 5.49 20.49l-15 25.981c-4.135 7.164-13.326 9.627-20.49 5.491zm243.492-71.742c-4.136 7.163-13.327 9.626-20.49 5.49l-77.942-45c-7.174-4.142-16.348-1.684-20.49 5.49s-1.684 16.348 5.49 20.49l60.621 35c7.163 4.136 9.626 13.327 5.49 20.49s-13.327 9.626-20.49 5.49l-60.621-35c-7.174-4.142-16.348-1.684-20.49 5.49s-1.684 16.348 5.49 20.49l34.641 20c7.163 4.136 9.626 13.327 5.49 20.49s-13.327 9.626-20.49 5.49l-56.445-32.589c9.792-20.909 2.102-46.271-18.255-58.024-6.18-3.568-12.864-5.491-19.546-5.92.859-16.374-7.269-32.656-22.416-41.402-6.18-3.568-12.864-5.49-19.545-5.919.859-16.374-7.27-32.656-22.417-41.401s-33.311-7.644-47.062 1.287c-3.712-5.572-8.719-10.399-14.899-13.967-17.296-9.986-38.528-7.139-52.627 5.553l-23.092-13.329 70.933-132.251 37.73 21.784-.422.244c-10.409 6.01-17.855 15.714-20.967 27.324-3.11 11.61-1.514 23.737 4.496 34.146s15.714 17.855 27.324 20.967c11.61 3.109 23.737 1.514 34.146-4.496l75.421-43.544 198.622 114.676c7.163 4.136 9.626 13.327 5.49 20.49s-13.327 9.626-20.49 5.49l-60.621-35c-7.174-4.142-16.348-1.684-20.49 5.49s-1.684 16.348 5.49 20.49l77.942 45c7.164 4.136 9.627 13.328 5.491 20.491z"/>
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

    // Old rehydration
    if( !data.type && Array.isArray( data ) ){
      data.type = "partners";
      data.items = data;
    }


    if( Object.keys(data).length > 0 ){
      this.data = data;
      this.preloaded = true;
    }

    this.render = this.render.bind(this);
    
  }

  generateChild(data = {}){
    const { img = '', link = ''} = data;
    const icon = img ? img : '/img/editor/file-load-placeholder.svg';
    let child = document.createElement('div');
    child.classList.add('col-3')

    child.innerHTML = `
                <div class="ce-partner__item _partner_item">
                    <div class="ce-partner__itemWrap">
                        <div class="ce-tool__item">
                          <div class="ce-tool__label">
                              Icon
                          </div>
                          <label class="ce-tool__item-file">
                            <img src="${icon}" alt="" class="ce-partner__itemIcon _partner_ico_preview _image-node">
                            <input type="file" class="admin-form__input _image-input" accept="image/*" value="${img}" data-loaded="${img}">
                          </label>
                        </div>
                        <div class="ce-tool__item">
                          <div class="ce-tool__label">
                              Link
                          </div>
                            <div contenteditable="true" class="ce-partner__input ce-tool__field _partner_item_link">${link}</div>
                        </div>

                    </div>
                    <button class="ce-partner__itemDelete ce-tool-delete _partner_item_delete" type="button">
                        <img src="/img/editor/trash.svg" alt="">
                    </button>
                </div>
            `;

    const ChangeImage = ( image_node ) => (e) => {
      let input = e.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
          image_node.setAttribute('src', e.target.result);
        });
        reader.readAsDataURL(input.files[0]);
        saveImageToServer(input.files[0], resp => {
          input.dataset.loaded = resp.file.url
        })
      }
    }
    const image = child.querySelector( '._image-node' );
    const input = child.querySelector( '._image-input' );
    input.addEventListener( 'change', ChangeImage(image)  );

    [...child.querySelectorAll('.ce-partner__input')].forEach(item => {
      item.addEventListener('input', () =>  {this.save(this.nodes.wrapper)})
    })

    child.querySelector('._partner_item_delete').addEventListener('click', () => {
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
        <div class="ce-partner">
            <header class="ce-tool-head ce-partner__head">
                <h2 class="ce-tool-head__title"> Partners </h2>
                <div class="ce-toggle container-fluid ce-toggle__container">
                  <span> Partners </span>
                  <label class="switch">
                    <input class="_type_switch" type="checkbox">
                    <span class="slider round"></span>
                  </label>
                  <span> Integration </span>
                </div>
                <button class="ce-tool-head__btn ce-partner__featureSlot _partner_add_slot" type="button" > add </button>
            </header>
            <div class="container-fluid ce-partner__body">
                <div class="row ce-partner__body-wrap _partner_body"></div>
            </div>
        </div>
    `;


    if( this.preloaded ){
      this.data.items.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._partner_body').appendChild( child );
      });
      const toggler = node.querySelector('._type_switch');
      if(this.data.type === 'integration') {
        toggler.setAttribute('checked', 'checked')
      } else {
        toggler.removeAttribute('checked')
      }
      toggler.value = this.data.type;
    }

    node.querySelector('._partner_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._partner_body').appendChild( child );
    });

    node.querySelector('._type_switch').addEventListener('change', e => {
      const target = e.target;
      if(target.checked) {
        target.value = 'integration'
      } else {
        target.value = 'partners'
      }
    })

    this.nodes.body = node.querySelector('._partner_body');

    return this.nodes.wrapper;
  }
  save(node) {
    return {
      type: node.querySelector('._type_switch').value,
      items: [...node.querySelectorAll('._partner_item')].map( item => ({
        img: item.querySelector('._image-input').dataset.loaded,
        link: item.querySelector('._partner_item_link').innerText,
      }))
    }
  }
}



export default PartnersIntegration;