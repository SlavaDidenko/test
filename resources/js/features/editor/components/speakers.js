
export class Speakers {

  static get toolbox() {
    return {
      title: 'speakers',
      icon: `
        <svg height="17" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
            <path d="m21.25 20h-4.18c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.654l1.455-4h-20.359l1.455 4h3.655c.414 0 .75.336.75.75s-.336.75-.75.75h-4.18c-.315 0-.597-.197-.705-.494l-2-5.5c-.083-.23-.05-.486.091-.687.14-.2.369-.319.614-.319h22.5c.245 0 .474.119.614.32.141.2.174.457.091.687l-2 5.5c-.108.296-.39.493-.705.493z"/>
            <path d="m16.251 24c-.038 0-.076-.003-.115-.009-.409-.063-.69-.446-.627-.855l.867-5.636h-8.752l.867 5.636c.063.41-.218.792-.627.855-.409.067-.793-.217-.855-.627l-1-6.5c-.033-.216.029-.437.172-.603s.35-.261.569-.261h10.5c.219 0 .427.096.569.262s.205.386.172.603l-1 6.5c-.056.37-.376.635-.74.635z"/>
            <path d="m22.5 14.25c-.414 0-.75-.336-.75-.75 0-1.979-1.058-3.852-2.761-4.889-.354-.216-.466-.677-.25-1.031s.677-.466 1.031-.25c2.146 1.308 3.479 3.672 3.479 6.17.001.414-.335.75-.749.75z"/>
            <circle cx="18.5" cy="7.5" r="1.5"/>
            <path d="m12 8c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6.5c-1.379 0-2.5 1.122-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.121-2.5-2.5-2.5z"/>
            <path d="m19.5 14.5c-.414 0-.75-.336-.75-.75 0-1.792-1.458-3.25-3.25-3.25h-7c-1.792 0-3.25 1.458-3.25 3.25 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-2.619 2.131-4.75 4.75-4.75h7c2.619 0 4.75 2.131 4.75 4.75 0 .414-.336.75-.75.75z"/>
        </svg>
      `
    };
  }

  constructor({ data, api }){
    this.nodes = {
      wrapper: null
    }


    this.preloaded = false;
    this.data = [];
    this.order = 0;
    this.speakers = [];

    if( data.length > 0 ){
      this.data = data;
      this.order = data.length
      this.preloaded = true;
    }

    this.render = this.render.bind(this);
  }

  getSpeakers() {
    return fetch('/api/speakers')
      .then(resp => resp.json())
      .catch(err => err)
  }

  generateChild(data = {}){
    const { id = null, order = this.order++ } = data;
    let child = document.createElement('div');

    child.innerHTML = `
        <div class="ce-speakers__item _speaker_item">
            <div class="ce-speakers__itemWrap">
                <img src="" alt="" class="ce-speakers__itemLogo _speaker_logo">
               
            </div>
            <div class="ce-speakers__actions">
                <select class="ce-speakers__input ce-tool-field _speaker_select">
                    <option selected>Виберіть спікера</option>
                </select>
                <input type="number" class="ce-speakers__input ce-tool-field _speaker_order" placeholder="Порядок" value="${order}"/>

                <button class="ce-speakers__itemDelete ce-tool-delete _speaker_item_delete" type="button">
                    <svg height="25" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="red" d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/>
                        <path fill="red" d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                        <path fill="red" d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                        <path fill="red" d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    const speakerSelect = child.querySelector('._speaker_select');
    const speakerLogo = child.querySelector('._speaker_logo');
    for(let i = 0; i < this.speakers.length; i++) {
      const speaker = this.speakers[i];

      const el = document.createElement("option");
      el.text = speaker.name_uk;
      el.value = speaker.id;
      if(speaker.id === parseInt(id)) {
        el.selected = true;
        speakerLogo.src = speaker.photo
      }

      speakerSelect.add(el);
    }

    [...child.querySelectorAll('.ce-speakers__input')].forEach(item => {
      item.addEventListener('input', () =>  {this.save(this.nodes.wrapper)})
    })
    child.querySelector('._speaker_select').addEventListener('change', e => {
      speakerLogo.src = this.speakers.find(speaker => speaker.id === parseInt(e.target.value)).photo
    })
    child.querySelector('._speaker_item_delete').addEventListener('click', () => {
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
            <div class="ce-speakers">
                <header class="ce-tool-head ce-speakers__head">
                    <h2 class="ce-tool-head__title"> Спікери </h2>
                    <button class="ce-tool-head__btn ce-speakers__speakerSlot _speaker_add_slot" type="button" > Додати </button>
                </header>
                <div class="ce-speakers__body relative">
                    <div class="row ce-speakers__body-wrap _speaker_body"></div>
                </div>
            </div>
        `;

    this.getSpeakers()
      .then(resp => {
        this.speakers = resp.data

        if( this.preloaded  ){
          console.log(this.data)
          this.data.map( item => {
            let child = this.generateChild( item );
            node.querySelector('._speaker_body').appendChild( child );
          });
        }
      })
      .catch(err => {
        console.log(err)
      })

    node.querySelector('._speaker_add_slot').addEventListener('click', () => {
      let child = this.generateChild();
      node.querySelector('._speaker_body').appendChild( child );
    });
    this.nodes.body = node.querySelector('._speaker_body');

    return this.nodes.wrapper;
  }
  save(program) {

    // console.log('[saved]', this.data );
    // return this.data;
    let result = []
    program.querySelectorAll('._speaker_item').forEach( item => {
      result.push({
        id: item.querySelector('._speaker_select').value || '',
        order: item.querySelector('._speaker_order').value || ''
      })
    });

    return result
  }
}



export default Speakers;