
export class Tickets {

  static get toolbox() {
    return {
      title: 'tickets',
      icon: `<svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m14.627 17c-.147 0-.295-.043-.422-.13l-2.205-1.5-2.205 1.5c-.257.175-.596.173-.852-.006s-.374-.497-.297-.798l.69-2.728-2.074-1.771c-.232-.199-.321-.52-.224-.81.098-.29.362-.492.669-.509l2.632-.149.956-2.607c.109-.296.391-.492.705-.492s.596.196.704.492l.956 2.607 2.632.149c.307.018.571.219.669.509.098.291.009.611-.224.81l-2.074 1.771.69 2.728c.077.302-.041.62-.297.798-.128.091-.279.136-.429.136z"/>
                <path d="m21 20h-18c-1.654 0-3-1.346-3-3v-1.5c0-.379.214-.725.553-.895.892-.446 1.447-1.343 1.447-2.341v-.528c0-.998-.555-1.895-1.447-2.341-.339-.17-.553-.516-.553-.895v-1.5c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3v1.5c0 .379-.214.725-.553.895-.892.446-1.447 1.343-1.447 2.341v.528c0 .998.554 1.895 1.446 2.341.339.169.553.515.553.894l.001 1.501c0 1.654-1.346 3-3 3zm-19-3.931v.931c0 .551.448 1 1 1h18c.552 0 1-.449 1-1v-.93c-1.247-.854-2-2.261-2-3.805v-.528c0-1.544.753-2.951 2-3.805v-.932c0-.551-.448-1-1-1h-18c-.552 0-1 .449-1 1v.931c1.247.854 2 2.261 2 3.805v.528c0 1.544-.753 2.951-2 3.805z"/>
            </svg>`
    };
  }

  constructor({ data, api }){

    this.nodes = {
      wrapper: null
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
            <div class="ce-tickets">
                <header class="ce-tool-head ce-tickets__head">
                    <h2 class="ce-tool-head__title"> Квитки </h2>
                    <p>Тут будуть розміщені квитки</p>
                </header>
            </div>
        `;
    return this.nodes.wrapper;
  }

  save() {
    return true
  }

}



export default Tickets;