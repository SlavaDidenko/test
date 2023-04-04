
import saveImageToServer from '../../saveImageToServer';

class ValueItem {

	constructor( data = null ){

		console.log( this, data );
		// Image or Number
		this.type = 'number';
		this.src = '';
		this.text = '';
		this.number = '';
		this.node = null;


		if( data ){
			if( data.type ){
				this.type = data.type;
			} else {
				this.type = 'number';
			}
			this.text = data.text;
			this.src = data.image;
			this.number = data.number;
		}

		this.render = this.render.bind( this );
		this.destroy = this.destroy.bind( this );
		this.changeType = this.changeType.bind( this );
		this.uploadImage = this.uploadImage.bind( this );
	}

	destroy(){
		if( this.node ){
			this.node.remove();
		}
	}

	changeType(){
		if( this.type === 'image'){
			this.type = 'number';
		} else {
			this.type = 'image';
		}
		this.render();
	}

	uploadImage( e ){

		let input = e.target;

		if (input.files && input.files[0]) {

			const reader = new FileReader();
			reader.addEventListener('load', (e) => {
				this.node.querySelector('._image-node').setAttribute('src', e.target.result);
			});

			reader.readAsDataURL(input.files[0]);
			saveImageToServer(
				input.files[0],
				( resp ) => {
					input.dataset.loaded = resp.file.url
					this.node.querySelector('._img_src').value = resp.file.url;
					this.src = resp.file.url;
				}
			)
		}
		// this.render();
	}

	render( parent ){

		let { title, text, node } = this;

		if( node === null ){
			node = document.createElement('div');
			node.className = "ce-func__item _values_item";
		}

		let icon = '/img/editor/file-load-placeholder.svg';
		if( this.src !== ""){
			icon = this.src;
		}

		node.innerHTML = `
				<div class="ce-toggle container-fluid ce-toggle__container">
					<span> Image </span>
					<label class="switch">
						<input class="_type_switch" type="checkbox" ${ this.type === "number" ? "checked" : "" }>
						<span class="slider round"></span>
					</label>
					<span> Number </span>
				</div>

				<div class="ce-values__itemWrap">
					${
						this.type === "number" ? (
							`
								<div class="ce-tool__item">
									<div class="ce-tool__label">
										Number
									</div>
									<div contenteditable="true" class="ce-tool__field _values_item_num">${ this.number !== "" ? this.number : ""}</div>
								</div>
							`
						) : ''
					}

					${
						this.type === "image" ? (
							`
								<label class="ce-tool__item">
									<div class="ce-tool__label">
										Image
									</div>
									<img src="${icon}" alt="" class="ce-tool__itemIcon _image-node" style="max-width: 100%">
									<input type="file" class="_image" style="width: 100%">
									<input hidden type="text" class="_img_src" value="${ this.src !== "" ? this.src : ""}"/>
								</label>
							`
						) : ''
					}

					<div class="ce-tool__item">
						<div class="ce-tool__label">
							Text
						</div>
						<div contenteditable="true" class="ce-tool__field _values_item_text">${ this.text !== "" ? this.text : ""}</div>

						<input hidden class="_value_type" value="${this.type}" />
					</div>
				</div>

				<button class="ce-func__itemDelete ce-tool-delete _item_delete" type="button">
					<img src="/img/editor/trash.svg" alt="">
				</button>
			`;

		if( this.type === "image"){
			node.querySelector('._image').addEventListener('change', this.uploadImage );
		}

		node.querySelector('._item_delete').addEventListener('click', this.destroy );
		node.querySelector('._type_switch').addEventListener('change', this.changeType );

		if( this.node === null ){

			parent.appendChild( node );
			this.node = node;
		}

	}

}



export class Values {

	static get toolbox() {
		return {
		title: 'values',
		icon: `<svg height="18" viewBox="0 0 512 512" width="18" xmlns="http://www.w3.org/2000/svg">
						<path d="m437.02 187c-48.353-48.352-112.64-74.98-181.02-74.98s-132.667 26.627-181.02 74.98c-48.351 48.352-74.98 112.639-74.98 181.019v31.379h195.201l1.203-13.687c1.304-14.835 8.083-28.587 19.086-38.723 11.065-10.192 25.452-15.805 40.51-15.805 3.17 0 6.308.263 9.394.752l-24.394 33.7v34.346h30v-24.627l22.434-30.992c1.048.842 2.08 1.709 3.076 2.627 11.004 10.136 17.783 23.888 19.087 38.723l1.203 13.687h195.2v-31.379c0-68.381-26.629-132.668-74.98-181.02zm44.98 182.398h-138.796c-4.196-16.98-13.297-32.434-26.37-44.476-1.867-1.72-3.806-3.339-5.793-4.883l62.806-86.764-24.301-17.591-65.206 90.079c-9.049-3.005-18.6-4.578-28.34-4.578-22.609 0-44.214 8.431-60.834 23.738-13.074 12.042-22.173 27.496-26.37 44.476h-138.796v-1.379c0-60.367 23.508-117.12 66.194-159.806s99.439-66.194 159.806-66.194 117.12 23.508 159.806 66.194c42.686 42.685 66.194 99.438 66.194 159.805z"/>
				</svg>`
		};
	}

	constructor({ data, api }){

		this.nodes = {
			wrapper: null
		}

		this.preloaded = false;

		this.data = {
			title : '',
			values: []
		};

		if( Object.keys(data).length > 0 ){
			if( data.title !== "" && data.values && data.values.length > 0 ){
				this.data.title = data.title;
				this.data.values = data.values;
				this.preloaded = true;
			}

		}

		this.render = this.render.bind(this);
	}

	generateChild(item = {}){

		let child = document.createElement('div');
		child.classList.add('col-4')

		child.innerHTML = `<div class="ce-values__item _values_item"></div>`;

		const baseSelector = '._values_item_';

		if(Object.keys(item).length > 0) {
			for(const value in item) {
				if(value in item) {
					const elem = child.querySelector(baseSelector + value);
					if(elem) {
						elem.innerHTML = item[value]
					}
				}
			}
		}

		child.querySelector('._values_item_delete').addEventListener('click', () => {
			child.remove();
			this.save(this.nodes.wrapper);
		});

		return child;
	}

	render() {

		const { title } = this.data;

		let node;
		if( this.nodes.wrapper ){
			node = this.nodes.wrapper;
		} else {
			this.nodes.wrapper =  document.createElement('div');
			node = this.nodes.wrapper;
		}

		node.innerHTML = `
				<div class="ce-values">
					<header class="ce-tool-head ce-values__head">
						<h2 class="ce-tool-head__title"> Values </h2>
						<button class="ce-tool-head__btn ce-values__valueSlot _values_add_slot" type="button" > add </button>
					</header>
					<div class="container-fluid ce-tool-body ce-values__body ">
						<div class="ce-tool__item">
							<div class="ce-tool__label">
								Block Title
							</div>
							<div contenteditable="true" class="ce-tool__field _values_title">${title}</div>
						</div>
						<div class="row ce-values__body-wrap _values_body"></div>
					</div>
				</div>
			`;


			console.log('RENDER', this.preloaded, this.data.values );

		if( this.preloaded  ){
			this.data.values.map( item => {
				let child = new ValueItem( item );
				console.log('[item pre]', this, child );
				child.render( node.querySelector('._values_body') );
			});
			node.querySelector('._values_title').innerHTML = this.data.title
		}

		node.querySelector('._values_add_slot').addEventListener('click', () => {
			let child = new ValueItem();
			console.log('[item]', this, child );
			child.render( node.querySelector('._values_body') );
		});

		this.nodes.body = node.querySelector('._values_body');

		return this.nodes.wrapper;
	}

	save(node) {
		return {
			title: node.querySelector('._values_title').innerHTML,
			values: [...node.querySelectorAll('._values_item')].map(item => {


				let type = item.querySelector('._value_type').value;

				if( type === "image"){
					return {
						type: item.querySelector('._value_type').value,
						text: item.querySelector('._values_item_text').innerHTML,
						image: item.querySelector('._img_src').value,
					}
				}

				if( type === "number"){
					return {
						type: item.querySelector('._value_type').value,
						text: item.querySelector('._values_item_text').innerHTML,
						number: item.querySelector('._values_item_num').innerHTML,
					}
				}

			})
		}

	}

}



export default Values;
