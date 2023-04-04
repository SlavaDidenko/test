
export class Program {

  static get toolbox() {
    return {
      title: 'program',
      icon: `<svg version="1.1" width="17px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.883 464.883">
                <path d="M396.409,212.577L396.409,212.577V95.33c0-27.866-22.819-50.882-50.687-50.882h-6.313V36.5c0-19.882-16.118-36-36-36s-36,16.118-36,36v7.948h-132V36.5c0-20.158-16.342-36.5-36.5-36.5s-36.5,16.342-36.5,36.5v7.948h-5.455c-27.867,0-50.545,23.016-50.545,50.882v269.224c0,27.867,22.678,50.894,50.545,50.894h158.594c26.147,31.276,64.795,49.375,105.561,49.435c75.7,0,137.365-61.677,137.365-137.379C458.476,279.523,433.409,237.131,396.409,212.577z M287.409,36.5c-0.154-8.71,6.781-15.896,15.491-16.05c0.14-0.002,0.28-0.003,0.42-0.002c8.792-0.093,15.996,6.959,16.089,15.752c0.001,0.1,0.001,0.2,0,0.3v38.948h-32V36.5z M82.409,36.5c0.095-8.961,7.437-16.148,16.398-16.053c0.016,0,0.031,0,0.046,0.001c8.994,0,16.556,7.059,16.556,16.052v38.948h-33V36.5z M26.409,95.33c0-16.839,13.706-30.882,30.545-30.882h5.455v21.416c0,5.522,4.612,9.584,10.135,9.584h52.62c5.522,0,10.245-4.062,10.245-9.584V64.448h132v21.416c-0.148,5.145,3.903,9.436,9.048,9.584c0.184,0.005,0.368,0.005,0.552,0h52.62c5.225,0.174,9.602-3.921,9.776-9.146c0.005-0.146,0.006-0.292,0.004-0.438V64.448h6.313c16.953,0.171,30.623,13.929,30.687,30.882v32.118h-350V95.33z M56.954,395.448c-16.839,0-30.545-14.055-30.545-30.894V147.448h350v54.254c-17.407-7.643-36.213-11.585-55.224-11.578c-75.7,0-137.327,61.767-137.327,137.469c-0.038,23.783,6.109,47.166,17.839,67.855L56.954,395.448z M321.109,444.705c-64.778,0-117.291-52.513-117.291-117.291c0-64.778,52.513-117.291,117.291-117.291S438.4,262.636,438.4,327.414c0,0,0,0.001,0,0.001C438.327,392.162,385.857,444.632,321.109,444.705z"/>
                <path d="M368.219,327.448h-43.81v-60.17c0-5.523-4.477-10-10-10c-5.523,0-10,4.477-10,10v70.16c0.088,5.561,4.626,10.02,10.188,10.01h53.622c5.523,0,10-4.477,10-10C378.219,331.925,373.742,327.448,368.219,327.448z"/>
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
  }

  generateChild(data = {}){
    const { timeFrom = '00:00', timeTo = '00:00', title = '', description = '' } = data;
    let child = document.createElement('div');

    child.innerHTML = `
                <div class="ce-program__item _program_item">
                    <div class="ce-program__itemLeft">
                        <div class="ce-program__itemTime">
                            <input type="time" class="ce-program__input ce-tool-field _program_time_from" value="${timeFrom}"/>
                            <input type="time" class="ce-program__input ce-tool-field _program_time_to" value="${timeTo}"/>
                        </div>
                        <button class="ce-program__itemDelete ce-tool-delete _program_item_delete" type="button">
                            <svg height="25" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="red" d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/>
                                <path fill="red" d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                                <path fill="red" d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                                <path fill="red" d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="ce-program__itemInfo">
                        <input type="text"  class="ce-program__input ce-tool-field _program_title" value="${title}" placeholder="Назва"/>
                        <textarea class="ce-program__input ce-tool-field _program_desc" rows="5" placeholder="Опис">${description}</textarea>
                        
                    </div>
                </div>
            `;

    [...child.querySelectorAll('.ce-program__input')].forEach(item => {
      item.addEventListener('input', () =>  {this.save(this.nodes.wrapper)})
    })
    child.querySelector('._program_item_delete').addEventListener('click', () => {
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
            <div class="ce-program">
                <header class="ce-program__head ce-tool-head">
                    <h2 class="ce-tool-head__title"> Програма </h2>
                    <button class="ce-tool-head__btn ce-program__programSlot _program_add_slot" type="button" > Додати </button>
                </header>
                <div class="ce-program__body relative _program_body"></div>
            </div>
        `;


    if( this.preloaded  ){
      console.log(this.data)
      this.data.map( item => {
        let child = this.generateChild( item );
        node.querySelector('._program_body').appendChild( child );
      });
    }

    node.querySelector('._program_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._program_body').appendChild( child );
    });

    this.nodes.body = node.querySelector('._program_body');

    return this.nodes.wrapper;
  }
  save(program) {

    // console.log('[saved]', this.data );
    // return this.data;
    let result = []
    program.querySelectorAll('._program_item').forEach( item => {
      const timeFrom = item.querySelector('._program_time_from').value || '';
      const timeTo = item.querySelector('._program_time_to').value || '';
      const title = item.querySelector('._program_title').value || '';
      const description = item.querySelector('._program_desc').value || '';

      result.push({
        timeFrom,
        timeTo,
        title,
        description
      })
    });

    return result
  }
}



export default Program;