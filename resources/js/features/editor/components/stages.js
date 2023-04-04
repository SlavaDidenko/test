
export class Stages {

	static get toolbox() {
		return {
		title: 'Stages',
		icon: `<svg height="20" viewBox="0 0 510 510" width="20" xmlns="http://www.w3.org/2000/svg">
					<path d="m455 262.5c-26.911 0-49.354 19.433-54.072 45h-91.855c-4.718-25.567-27.161-45-54.072-45s-49.354 19.433-54.072 45h-91.855c-4.718-25.567-27.161-45-54.072-45-30.327 0-55 24.673-55 55s24.673 55 55 55c23.272 0 43.2-14.536 51.219-35h97.562c8.019 20.464 27.947 35 51.219 35s43.2-14.536 51.219-35h97.562c8.019 20.464 27.947 35 51.219 35 30.327 0 55-24.673 55-55s-24.675-55-55.002-55zm-400 80c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25zm200 0c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25zm200 0c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z"/>
					<path d="m105 202.5h-30v-120h-60v30h30v90h-30v30h90z"/>
					<path d="m300 202.5h-60v-16.385l60-35v-68.615h-90v30h60v21.385l-60 35v63.615h90z"/>
					<path d="m210 397.5h90v30h-90z"/>
					<path d="m495 82.5h-90v30h60v30h-45v30h45v30h-60v30h90z"/>
				</svg>
				`
		};
	}

	constructor({ data, api }){

		console.log('[data]', data, );

		this.nodes = {
			wrapper: null
		}


		this.preloaded = false;
		this.data = {
			title: '',
			items: []
		};

		if( 'items' in data ){
			this.data = data;
			this.preloaded = true;
		}

		this.render = this.render.bind(this);
	}


	generateChild( data = {}){

		const { title = '', text = '' } = data;
		let child = document.createElement('div');
		child.className = "ce-func__item _stages_item";

		child.innerHTML = `
			<div class="container-fluid ce-func__itemWrap">
				<div class="row">
					<div class="col-8">
						<div class="ce-tool__item">
							<div class="ce-tool__label">
								Title
							</div>
							<div contenteditable="true" class="ce-tool__field _stage_item_title">${title}</div>
						</div>
						<div class="ce-tool__item">
							<div class="ce-tool__label">
								Text
							</div>
							<div contenteditable="true" class="ce-tool__field ce-tool__field--wp _stage_item_text">${text}</div>
						</div>
						<button class="ce-func__itemDelete ce-tool-delete _item_delete" type="button">
							<img src="/img/editor/trash.svg" alt="">
						</button>
					</div>
				</div>
			</div>
		`;

		child.querySelector('._item_delete').addEventListener('click', () => {
			child.remove();
			this.save(this.nodes.wrapper);
		})

		return child;

	}
	

	generateChildOld(data = {}){
		const { title = '', list = [] } = data;
		let child = document.createElement('div');
		let rawList = '';

		function removeListItem(e) {
		// debugger
		}

		if(list.length > 0) {
			list.forEach(item => {
				rawList += `
					<div class="ce-stages__itemList-item _stages_item_list_item">
						<input type="text" placeholder="list item" value="${item.text}">
						<button class="ce-stages__itemDelete ce-tool-delete _stages_item_delete_list_item" type="button" onclick="removeListItem()">
							<img src="/img/editor/trash.svg" alt="">
						</button>
					</div>`
			})
		} else {
			rawList += `
				<div class="ce-stages__itemList-item _stages_item_list_item">
					<input type="text" placeholder="list item" value="">
					<button class="ce-stages__itemDelete ce-tool-delete _stages_item_delete_list_item" type="button" onclick="removeListItem()">
						<img src="/img/editor/trash.svg" alt="">
					</button>
				</div>
			`
		}

		child.innerHTML = `
			<div class="ce-stages__item _stages_item">
				<div class="ce-stages__itemWrap">
					<input type="text" class="ce-stages__input ce-tool-field _stages_item_title" placeholder="title" value="${title}"/>
					<button class="_stages_item_add_list_item" type="button">add list item</button>
					<div class="ce-stages__itemList _stages_item_list">
						${rawList}
					</div>

				</div>
				<button class="ce-stages__itemDelete ce-tool-delete _stages_item_delete" type="button">
					<img src="/img/editor/trash.svg" alt="">
				</button>
			</div>
		`;


		child.querySelector('._stages_item_add_list_item').addEventListener('click', e => {
			const list = child.querySelector('._stages_item_list');
			const singleItem = list.querySelector('._stages_item_list_item').cloneNode(true);
			singleItem.querySelector('input').value = '';
			list.appendChild(singleItem)
		});



		[...child.querySelectorAll('.ce-stages__input')].forEach(item => {
			item.addEventListener('input', () =>  {this.save(this.nodes.wrapper)})
		});

		child.querySelector('._stages_item_delete').addEventListener('click', () => {
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
			<div class="ce-stages">
				<header class="ce-tool-head ce-stages__head">
					<h2 class="ce-tool-head__title"> Stages </h2>
					<button class="ce-tool-head__btn ce-stages__featureSlot _stages_add_slot" type="button" > add </button>
				</header>
				<div class="ce-stages__body relative">
					<div class="ce-func__item _func_item">
						<div class="ce-tool__label">
							Block Title
						</div>
						<div contenteditable="true" class="ce-tool__field _stages_title" placeholder="title"></div>
					</div>
					<div class="row ce-stages__body-wrap _stages_body"></div>
				</div>
			</div>
		`;


		if( this.preloaded  ){
			this.data.items.map( item => {
				let child = this.generateChild( item );
				node.querySelector('._stages_body').appendChild( child );
			});
			node.querySelector('._stages_title').innerHTML = this.data.title
		}

		node.querySelector('._stages_add_slot').addEventListener('click', () => {
			let child = this.generateChild();
			node.querySelector('._stages_body').appendChild( child );
		});

		this.nodes.body = node.querySelector('._stages_body');

		return this.nodes.wrapper;
	}

	save(node) {

		// console.log('[saved]', this.data );
		// return this.data;
		let result = {
			title: node.querySelector('._stages_title').innerHTML || '',
			items: []
		}


		console.log('NODE', node, node.querySelectorAll('._stages_item') );

		node.querySelectorAll('._stages_item').forEach( item => {
			
			console.log('-----SAVE:', item );
			
			result.items.push({
				'title' : item.querySelector('._stage_item_title').innerHTML || '',
				'text' : item.querySelector('._stage_item_text').innerHTML || ''
			});

			// result.items.push({
			// 	title: item.querySelector('._stages_item_title').innerHTML,
			// 	list: [...item.querySelectorAll('._stage_item')].map( elem => {
			// 		return {
						// 'title' : elem.querySelector('._stage_item_title').innerHTML || '',
						// 'text' : elem.querySelector('._stage_item_text').innerHTML || ''
			// 		}
			// 	}),
			// })
		});

		return result
	}
}


export default Stages;