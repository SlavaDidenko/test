
export class Features {

  static get toolbox() {
    return {
      title: 'features',
      icon: `<svg height="19" viewBox="0 0 512.004 512.004" width="19" xmlns="http://www.w3.org/2000/svg">
                <path d="m498.605 126.864c-9.419-10.1-22.743-15.893-36.556-15.893-4.672 0-9.25.635-13.642 1.876v-27.056c0-17.377-14.15-31.514-31.542-31.514h-139.321c-8.342 0-15.938 3.253-21.584 8.555-5.638-5.255-13.199-8.475-21.5-8.475h-139.321c-17.392 0-31.542 14.137-31.542 31.514v217.264c-5.433-1.538-11.138-2.162-16.859-1.803-24.84 1.564-44.878 21.443-46.611 46.24-.978 14 3.736 27.343 13.273 37.57 9.419 10.1 22.743 15.893 36.556 15.893 4.672 0 9.25-.635 13.642-1.876v27.057c0 17.377 14.15 31.514 31.542 31.514h139.32c8.342 0 15.938-3.253 21.584-8.555 5.638 5.255 13.199 8.475 21.5 8.475h139.321c17.392 0 31.542-14.137 31.542-31.514v-217.265c5.433 1.538 11.135 2.16 16.859 1.803 24.84-1.564 44.878-21.443 46.611-46.24.979-14.001-3.735-27.343-13.272-37.57zm-252.603 299.35c0 6.349-5.178 11.514-11.542 11.514h-139.321c-6.364 0-11.542-5.165-11.542-11.514v-42.577c0-3.57-1.732-7.004-4.778-8.865-1.614-.987-3.422-1.471-5.221-1.471-2.091 0-4.17.655-5.919 1.939-5.575 4.094-12.278 6.103-19.274 5.755-7.338-.365-14.352-3.47-19.561-8.65-6.259-6.225-9.381-14.581-8.766-23.379 1.037-14.84 13.039-26.737 27.917-27.674 7.087-.44 13.821 1.491 19.504 5.601 2.365 1.71 5.336 2.482 8.187 1.855 4.739-1.042 7.911-5.174 7.911-9.785v-52.921h50.566c.012 0 .569-.043 1.498-.117 8.12-.641 11.827-10.45 6.166-16.307l-.004-.005c-4.5-5.362-6.978-12.176-6.978-19.186 0-8.373 3.377-16.134 9.51-21.854 6.142-5.729 14.174-8.56 22.616-7.972 14.865 1.036 26.782 13.018 27.72 27.87.481 7.618-1.893 15.014-6.689 20.868-2.103 2.567-3.088 5.944-2.262 9.158 1.161 4.521 5.193 7.544 9.696 7.544h50.567v160.173zm182.405-.08c0 6.349-5.178 11.514-11.542 11.514h-139.321c-6.364 0-11.542-5.165-11.542-11.514v-160.171h33.745c-1.972 5.99-2.802 12.364-2.394 18.83 1.566 24.814 21.466 44.832 46.289 46.562 1.212.084 2.419.126 3.62.126 12.702 0 24.671-4.696 34.028-13.424 10.084-9.406 15.868-22.703 15.868-36.48 0-5.338-.861-10.609-2.512-15.614h33.76v160.171zm63.519-263.094c-1.037 14.84-13.039 26.737-27.917 27.674-7.089.444-13.819-1.49-19.503-5.6-2.366-1.711-5.338-2.483-8.19-1.856-4.739 1.042-7.91 5.174-7.91 9.785v52.921h-50.566c-.003 0-.034.003-.09.009-7.954.797-12.131 9.849-7.573 16.415l.003.004c3.393 4.111 5.779 9.012 6.596 14.28 1.583 10.207-1.812 19.936-9.128 26.76-6.142 5.729-14.179 8.561-22.616 7.972-14.865-1.036-26.782-13.018-27.72-27.87-.488-7.737 1.968-15.245 6.916-21.142.001-.001.119-.21.326-.576 3.733-6.604-.415-14.917-7.944-15.848-.026-.003-.04-.005-.042-.005h-50.567v-28.537c0-5.326-4.019-9.977-9.335-10.321-5.824-.377-10.665 4.235-10.665 9.978v28.958h-33.745c1.972-5.99 2.802-12.364 2.394-18.83-1.566-24.814-21.466-44.832-46.289-46.562-14.036-.976-27.406 3.744-37.648 13.297-10.084 9.406-15.868 22.703-15.868 36.48 0 5.338.861 10.609 2.512 15.614h-33.76v-160.17c0-6.349 5.178-11.514 11.542-11.514h139.321c6.364 0 11.542 5.165 11.542 11.514v.004s0 .003 0 .004v40.451c0 5.326 4.019 9.977 9.335 10.321 5.824.377 10.665-4.235 10.665-9.978v-40.794c0-.001 0-.003 0-.004s0-.003 0-.004c0-.018 0-.035 0-.053 0-.009 0-.017 0-.026 0-6.349 5.178-11.514 11.542-11.514h139.321c6.364 0 11.542 5.165 11.542 11.514v42.683c0 2.967 1.197 5.863 3.451 7.793 3.64 3.117 8.785 3.202 12.468.498 5.575-4.094 12.278-6.103 19.274-5.755 7.338.365 14.352 3.47 19.561 8.65 6.259 6.225 9.38 14.582 8.765 23.38z"/>
                <path d="m256.002 181.692c-4.178 0-7.985-2.69-9.402-6.615-1.38-3.821-.245-8.221 2.808-10.902 3.272-2.873 8.176-3.255 11.87-.97 3.47 2.146 5.319 6.354 4.542 10.361-.901 4.656-5.069 8.126-9.818 8.126z"/>
            </svg>
            `
    };
  }

  constructor({ data, api }){

    this.nodes = {
      wrapper: null
    }


    this.preloaded = false;
    this.data = []

    if( data.length > 0 ){
      this.data = data;
      this.preloaded = true;
    }


    // if( data.program_id ){
    //     this.data = {
    //       program_id: data.program_id,
    //       programList: {
    //           title_uk: data.title_uk,
    //           body_uk: data.body_uk,
    //           cover: data.cover,
    //       },
    //       uploaded: true,
    //       loaded: true
    //     }
    //     this.render();
    // }

    this.render = this.render.bind(this);
    this.getList = this.getList.bind(this);
    
  }

  getList(){
    const imgPath = '/images/icons/';

    return [
      { label: "Оберіть іконку", value: ``},
      { label: "Квитки", value: `${imgPath}ico-feature-ticket.svg` },
      { label: "Куб", value: `${imgPath}ico-feature-cube.svg` },
      { label: "Руки-лиця", value: `${imgPath}ico-feature-hand-face.svg` },
      { label: "Чашка", value: `${imgPath}ico-feature-cup.svg` },
      { label: "Пакет", value: `${imgPath}ico-feature-bag.svg` },
      { label: "Ланки", value: `${imgPath}ico-feature-connect.svg` },
      { label: "Захист", value: `${imgPath}ico-defend.png` },
    ]
  }

  generateChild(data = {}){
    const imgPath = '/images/icons/';
    const { icon = `${imgPath}ico-feature-ticket.svg`, title = '', description = '' } = data;
    let child = document.createElement('div');

    child.innerHTML = `
                <div class="ce-feature__item _feature_item">
                    <div class="ce-feature__itemWrap">
                        <img src="${icon}" alt="" class="ce-feature__itemIcon _feature_ico_preview">
                        <select class="ce-feature__input ce-tool-field _feature_icon">
                            ${
                              this.getList().map( item => {
                                return `<option value="${item.value}" ${ item.value === data.icon ? "selected" :  "" }>${item.label}</option>`
                              }).join('')
                            }
                        </select>
                        <input type="text" class="ce-feature__input ce-tool-field _feature_title" placeholder="Назва" value="${title}"/>
                        <textarea class="ce-feature__input ce-tool-field _feature_desc" rows="2" placeholder="Опис">${description}</textarea>

                    </div>
                    <button class="ce-feature__itemDelete ce-tool-delete _feature_item_delete" type="button">
                        <svg height="25" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="red" d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/>
                            <path fill="red" d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                            <path fill="red" d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                            <path fill="red" d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                        </svg>
                    </button>
                </div>
            `;

    [...child.querySelectorAll('.ce-feature__input')].forEach(item => {
      item.addEventListener('input', () =>  {this.save(this.nodes.wrapper)})
    })
    const icoPreview = child.querySelector('._feature_ico_preview')
    child.querySelector('._feature_icon').addEventListener('change', e => {
      icoPreview.src = e.target.value
    })
    child.querySelector('._feature_item_delete').addEventListener('click', () => {
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
            <div class="ce-feature">
                <header class="ce-tool-head ce-feature__head">
                    <h2 class="ce-tool-head__title"> Переваги </h2>
                    <button class="ce-tool-head__btn ce-feature__featureSlot _feature_add_slot" type="button" > Додати </button>
                </header>
                <div class="ce-feature__body relative">
                    <div class="row ce-feature__body-wrap _feature_body"></div>
                </div>
            </div>
        `;


    if( this.preloaded  ){
      console.log(this.data)
      this.data.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._feature_body').appendChild( child );
      });
    }

    node.querySelector('._feature_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._feature_body').appendChild( child );
    });

    this.nodes.body = node.querySelector('._feature_body');

    return this.nodes.wrapper;
  }
  save(program) {

    // console.log('[saved]', this.data );
    // return this.data;
    let result = []
    program.querySelectorAll('._feature_item').forEach( item => {
      const icon = item.querySelector('._feature_icon').value || '';
      const title = item.querySelector('._feature_title').value || '';
      const description = item.querySelector('._feature_desc').value || '';

      result.push({
        icon,
        title,
        description
      })
    });

    return result
  }
}



export default Features;