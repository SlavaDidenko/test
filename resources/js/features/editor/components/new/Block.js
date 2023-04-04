import saveImageToServer from '../../../saveImageToServer';

class Block {
  constructor() {
    this.nodes = {
      wrapper: null,
      body: null
    };
    this.preloaded = false;
    this.data = null;
    this.imagePlaceholder = '/img/admin/file-load-placeholder.svg';
    this.settingsBlock = null;
    this.settings = [];
  }

  setSettings(settings) {
    this.settings = settings
  }

  renderSettings(settingsBlock, changeViewFn){
    if(this.settings.length === 0) return;

    this.settingsBlock = settingsBlock
    if(!settingsBlock) {
      this.settingsBlock = document.createElement('div');
    }

    const self = this;

    this.settings.forEach(tune => {
      let btn = document.createElement('div');

      btn.classList.add('cdx-settings-button', 'cdx-tool-btn');
      btn.setAttribute('title', tune.name);
      if(tune.id in self.data && self.data[tune.id]) {
        btn.classList.add('cdx-settings-button--active', 'cdx-tool-btn--active');
      }
      btn.innerHTML = tune.icon;
      self.settingsBlock.appendChild(btn);

      btn.addEventListener('click', () => {
        self._toggleTune(tune, changeViewFn);
        self.settingsBlock.querySelector('.cdx-tool-btn--active')
          .classList.remove('cdx-settings-button--active', 'cdx-tool-btn--active');

        btn.classList.toggle('cdx-settings-button--active');
        btn.classList.toggle('cdx-tool-btn--active');
      });
    })

    return this.settingsBlock
  }

  _toggleTune(tune, changeViewFn) {
    this.settings.forEach(item => {
      this.data[item.id] = false
    });
    this.data[tune.id] = !this.data[tune.id];
    changeViewFn(tune)
  }

  saveFileToServer(file, fn) {
    saveImageToServer(file, fn)
  }

  changeImage( image_node ) {
    return e => {
      let input = e.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
          image_node.setAttribute('src', e.target.result);
        });
        reader.readAsDataURL(input.files[0]);
        this.saveFileToServer(input.files[0], resp => {
          input.dataset.loaded = resp.file.url
        })
      }
    }
  }

  setDataBySelector(node = this.nodes.wrapper, data = this.data) {
    if(Object.keys(data).length > 0) {
      for(const item in data) {
        if(item in data) {
          if(item === 'img') {
            const img = node.querySelector('[data-img]');
            const input = node.querySelector('[data-img-input]');
            if(img && input) {
              img.src = data[item];
              input.dataset.loaded = data[item];
            }
          } else {
            const field = node.querySelector(`[data-field="${item}"]`)
            if(field) {
              field.innerHTML = data[item]
            }
          }
        }
      }
    }
  }

  generateChild() {
    return document.createElement('div')
  }

  setChildData(items) {
    items.map( item => {
      let child = this.generateChild( item );
      this.nodes.body.appendChild( child );
    });
  }

  pastData(node) {
    node.querySelectorAll('._paster_btn').forEach( item => {
      item.addEventListener('click', ( e ) => {
        navigator.clipboard.read().then((data) => {
          console.log('[paster]', data  );
        });
        navigator.clipboard.readText().then( clipText => {
          console.log('text', clipText );
          e.target.closest('._paster_container').querySelector('._paster_target').innerHTML = clipText;
        });
      });
    })
  }

  createNode() {

    let node;
    if (this.nodes.wrapper) {
      node = this.nodes.wrapper;
    } else {
      this.nodes.wrapper = document.createElement('div');
      node = this.nodes.wrapper;
    }

    return node
  }
}

export default Block