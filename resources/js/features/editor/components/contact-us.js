
export class ContactUs {

  static get toolbox() {
    return {
      title: 'ContactUs',
      icon: `<svg height="20" viewBox="0 0 511.987 511.987" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m491.007 5.907c-20.045-11.575-45.767-4.681-57.338 15.364l-57.212 99.095h-123.383c-5.523 0-10 4.478-10 10s4.477 10 10 10h111.836l-41.518 71.912h-233.39c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h221.842l-23.094 40h-198.748c-5.523 0-10 4.478-10 10s4.477 10 10 10h194.612l-4.309 40h-190.303c-5.523 0-10 4.478-10 10s4.477 10 10 10h188.148l-.532 4.939c-.424 3.936 1.514 7.752 4.942 9.731 1.553.897 3.278 1.34 4.999 1.34 2.079 0 4.151-.647 5.9-1.925l63.851-46.645c1.125-.822 2.065-1.869 2.761-3.075l77.929-134.975v193.827c0 22.406-18.229 40.636-40.636 40.636h-231.751c-3.573 0-6.874 1.906-8.66 5l-34.967 60.565-34.967-60.565c-1.786-3.094-5.087-5-8.66-5h-17.723c-22.407 0-40.636-18.23-40.636-40.636v-194.493c0-22.406 18.229-40.636 40.636-40.636h102.439c5.523 0 10-4.478 10-10 0-5.523-4.477-10-10-10h-102.439c-33.435 0-60.636 27.201-60.636 60.636v194.493c0 33.435 27.201 60.636 60.636 60.636h11.949l40.741 70.565c1.786 3.094 5.087 5 8.66 5s6.874-1.906 8.66-5l40.741-70.565h225.978c33.435 0 60.636-27.201 60.636-60.636v-194.493c0-8.572-1.818-17.04-5.295-24.804l53.666-92.952c11.572-20.044 4.68-45.766-15.365-57.339zm-10 17.32c10.494 6.059 14.102 19.525 8.043 30.019l-5.714 9.897-38.061-21.975 5.714-9.897c6.059-10.493 19.524-14.1 30.018-8.044zm-176.679 272.779 28.786 16.62-33.188 24.245zm43.423 1.977-38.061-21.975 125.585-217.52 38.061 21.975z"/>
                <path d="m208.07 140.367c2.63 0 5.21-1.07 7.08-2.93 1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07c-1.87-1.859-4.44-2.93-7.08-2.93-2.63 0-5.21 1.07-7.07 2.93s-2.92 4.44-2.92 7.07 1.059 5.21 2.92 7.07c1.87 1.86 4.44 2.93 7.07 2.93z"/>
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
            <div class="ce-contact">
                <header class="ce-tool-head ce-contact__head">
                    <h2 class="ce-tool-head__title"> Contact us </h2>
                </header>
                <div class="container-fluid ce-contact__body relative">
                    <div class="row ce-contact__body-wrap _contact_body">
                        <div class="col-6">
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Title
                            </div>
                            <div contenteditable="true" class="ce-tool__field _contact_title"></div>
                          </div>
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Text
                            </div>
                            <div contenteditable="true" class="ce-tool__field _contact_text"></div>
                          </div>
                          <div class="ce-tool__item">
                            <div class="ce-tool__label">
                                Button title
                            </div>
                            <div contenteditable="true" class="ce-tool__field _contact_btn"></div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    const baseSelector = '._contact_';

    if(Object.keys(this.data).length > 0) {
      for(const item in this.data) {
        if(item in this.data) {
          const elem = node.querySelector(baseSelector + item);
          if(elem) {
            if(item === 'img') {
              elem.src = this.data[item];
              node.querySelector(`${baseSelector}${item}_input`).dataset.loaded = this.data[item];
            } else {
              elem.innerHTML = this.data[item]
            }
          }
        }
      }
    }

    this.nodes.body = node.querySelector('._contact_body');

    return this.nodes.wrapper;
  }
  save(twoColl) {
    console.log('[saved]', twoColl );
    // return this.data;
    let result = {
      title: twoColl.querySelector('._contact_title').innerHTML,
      text: twoColl.querySelector('._contact_text').innerHTML,
      btn: twoColl.querySelector('._contact_btn').innerHTML,
    }
    this.data = result
    console.log('[saved]', result );
    return result
  }
}



export default ContactUs;