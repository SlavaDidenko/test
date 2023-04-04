import saveImageToServer from '../../saveImageToServer';

export class Functionality {

	static get toolbox() {
		return {
			title: 'Functionality',
			icon: `<svg height="20" viewBox="0 0 513.943 513.943" width="20" xmlns="http://www.w3.org/2000/svg">
						<path d="m81.828 161.712c14.073 0 27.314-3.621 38.851-9.97h321.406c39.087 0 70.886-31.799 70.886-70.886s-31.799-70.886-70.886-70.886h-151.972c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h151.972c30.815 0 55.886 25.071 55.886 55.887 0 30.815-25.07 55.886-55.886 55.886h-301.88c13.57-14.236 21.434-32.579 22.378-51.896 1.093-21.821-6.72-43.475-22.379-59.877h114.909c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-134.434c-11.538-6.349-24.778-9.97-38.851-9.97-44.584 0-80.855 36.272-80.855 80.856s36.271 80.856 80.855 80.856zm0-146.712c36.444 0 65.856 29.732 65.856 65.856 0 35.824-29.105 65.856-65.856 65.856-36.313 0-65.855-29.543-65.855-65.856s29.543-65.856 65.855-65.856z"/>
						<path d="m81.828 513.943c14.073 0 27.313-3.621 38.85-9.97h321.406c39.087 0 70.886-31.799 70.886-70.886s-31.799-70.887-70.886-70.887h-321.406c-11.537-6.349-24.777-9.97-38.85-9.97-44.584 0-80.855 36.272-80.855 80.856 0 44.585 36.271 80.857 80.855 80.857zm360.257-136.742c30.815 0 55.886 25.071 55.886 55.887s-25.07 55.886-55.886 55.886h-301.881c14.418-15.101 22.48-35.003 22.48-55.886 0-20.789-7.988-40.698-22.479-55.887zm-360.257-9.97c36.61 0 65.856 29.89 65.856 65.856 0 36.3-29.551 65.856-65.856 65.856-36.313 0-65.855-29.543-65.855-65.856s29.543-65.856 65.855-65.856z"/>
						<path d="m75.149 63.906v45.756c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-57.612c0-2.582-1.328-4.982-3.516-6.354-2.188-1.373-4.928-1.522-7.251-.397l-9.654 4.671c-3.729 1.804-5.289 6.289-3.484 10.018 1.627 3.364 5.438 4.966 8.905 3.918z"/>
						<path d="m409.075 280.872c-2.059 2.176-2.625 5.369-1.44 8.12s3.894 4.534 6.889 4.534h35.183c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-17.765l15.277-16.152c.043-.045.085-.09.126-.136 5.21-5.788 7.76-12.902 7.179-20.033-.54-6.643-3.755-12.638-9.052-16.883-5.32-4.261-12.089-5.823-19.058-4.396-7.809 1.599-14.726 6.767-18.503 13.826-1.955 3.652-.579 8.197 3.073 10.151 3.653 1.955 8.196.578 10.151-3.073 1.673-3.125 4.849-5.505 8.287-6.209 1.784-.366 4.393-.417 6.67 1.407 2.071 1.66 3.275 3.871 3.48 6.393.24 2.951-.938 6.044-3.321 8.718z"/>
						<path d="m87.378 454.641h-15.008c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h15.008c12.146 0 22.027-9.881 22.027-22.027 0-5.561-2.071-10.646-5.482-14.527 3.411-3.88 5.482-8.967 5.482-14.527 0-12.146-9.882-22.027-22.027-22.027h-15.008c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h15.008c3.875 0 7.027 3.152 7.027 7.027s-3.152 7.027-7.027 7.027h-15.008c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h15.008c3.875 0 7.027 3.152 7.027 7.027s-3.152 7.027-7.027 7.027z"/>
						<path d="m71.858 327.858h321.407c11.537 6.348 24.777 9.969 38.85 9.969 37.357 0 69.647-25.319 78.523-61.572.984-4.023-1.479-8.083-5.502-9.068-4.018-.986-8.082 1.478-9.068 5.501-7.228 29.521-33.526 50.14-63.953 50.14-36.377 0-65.856-29.65-65.856-65.856 0-35.925 29.208-65.856 65.856-65.856 30.427 0 56.726 20.618 63.953 50.14.985 4.023 5.048 6.491 9.068 5.501 4.023-.985 6.486-5.045 5.502-9.068-8.876-36.253-41.166-61.572-78.523-61.572-14.073 0-27.313 3.621-38.85 9.969h-321.407c-39.087 0-70.886 31.8-70.886 70.887.001 39.086 31.799 70.885 70.886 70.885zm0-126.773h301.881c-15.423 16.16-23.489 37.712-22.379 59.878.92 18.842 8.501 37.354 22.379 51.896h-301.881c-30.815 0-55.886-25.071-55.886-55.887s25.071-55.887 55.886-55.887z"/>
						<path d="m197.126 411.533h91.475c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-91.475c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/>
						<path d="m197.126 440.972h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/>
						<path d="m197.126 470.412h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/>
						<path d="m288.601 43.532h-91.475c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h91.475c4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
						<path d="m395.209 72.971h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/>
						<path d="m395.209 102.41h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"/>
						<path d="m102.799 235.033h91.475c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-91.475c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/>
						<path d="m102.799 264.472h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/>
						<path d="m102.799 293.911h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"/>
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

		if( data.length > 0 ){
			this.data = data;
			this.preloaded = true;
		}

		this.render = this.render.bind(this);
		this.generateChild = this.generateChild.bind(this);
		
	}

	generateChild(data = {}, counter ){

		const icon = '/img/editor/file-load-placeholder.svg';
		let child = document.createElement('div');
		child.className = "ce-func__item _func_item";


		child.innerHTML = `
			<div class="container-fluid ce-func__itemWrap">
				<div class="row">
					<div class="col-3" style="min-width: 150px; max-width: 150px">
						<div class="ce-tool__item">
							<div class="ce-tool__label">
								Icon
							</div>
							<label class="ce-tool__item-file">
								<img src="${icon}" alt="" class="ce-for__itemIcon _func_item_img _image-node" style="max-width: 100%">
								<input type="file" class="_image-input _func_item_img_input" accept="image/*" value="" data-loaded="">
							</label>
						</div>
						</div>
					<div class="col-6" style="width: 100%">
						<div class="ce-tool__item">
							<div class="ce-tool__label">
								Title
							</div>
							<div contenteditable="true" class="ce-tool__field _func_item_title"></div>
						</div>
						<div class="ce-tool__item">
							<div class="ce-tool__label">
								Text
							</div>
							<div contenteditable="true" class="ce-tool__field ce-tool__field--wp _func_item_text"></div>
						</div>
						<button class="ce-func__itemDelete ce-tool-delete _func_item_delete" type="button">
							<img src="/img/editor/trash.svg" alt="">
						</button>
					</div>
				</div>
			</div>
		`;

		const baseSelector = '._func_item_';

		if(Object.keys(data).length > 0) {
			for(const item in data) {
				if(item in data) {
				const elem = child.querySelector(baseSelector + item);
				if(elem) {
					if(item === 'img') {
					elem.src = data[item];
					child.querySelector(`${baseSelector}${item}_input`).dataset.loaded = data[item];
					} else {
					elem.innerHTML = data[item]
					}
				}
				}
			}
		}

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

		[...child.querySelectorAll('.ce-func__input')].forEach(item => {
			item.addEventListener('input', () =>  {this.save(this.nodes.wrapper)})
		})

		child.querySelector('._func_item_delete').addEventListener('click', () => {
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
			<div class="ce-func">
				<header class="ce-tool-head ce-func__head">
					<h2 class="ce-tool-head__title"> Functionality </h2>
					<button class="ce-tool-head__btn ce-func__featureSlot _func_add_slot" type="button" > add </button>
				</header>
				<div class="ce-func__body">
					<div class="row ce-func__body-wrap _func_body"></div>
				</div>
			</div>
		`;

		this.counter = 0;

		if( this.preloaded  ){
			this.data.map( item => {
				
				let child = this.generateChild( item );
				node.querySelector('._func_body').appendChild( child );
				this.counter++;
			});
		}

		node.querySelector('._func_add_slot').addEventListener('click', () => {
			let child = this.generateChild();
			node.querySelector('._func_body').appendChild( child );
			this.counter++;
		});

		this.nodes.body = node.querySelector('._func_body');

		return this.nodes.wrapper;
	}

	save(node) {
		return [...node.querySelectorAll('._func_item')].map( item => ({
			img: item.querySelector('._image-input').dataset.loaded,
			title: item.querySelector('._func_item_title').innerHTML,
			text: item.querySelector('._func_item_text').innerHTML
		}));
	}
}



export default Functionality;