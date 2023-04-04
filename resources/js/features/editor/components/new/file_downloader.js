import Block from './Block';

export class FileDownloader extends Block {

    static get toolbox() {
        return {
            title: 'File Downloader',
            icon: `
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.6555 36.1484C27.6964 36.2007 27.7487 36.243 27.8084 36.2721C27.8681 36.3012 27.9336 36.3163 28 36.3163C28.0664 36.3163 28.1319 36.3012 28.1916 36.2721C28.2513 36.243 28.3036 36.2007 28.3445 36.1484L34.4695 28.3992C34.6937 28.1148 34.4914 27.6937 34.125 27.6937H30.0727V9.1875C30.0727 8.94687 29.8758 8.75 29.6352 8.75H26.3539C26.1133 8.75 25.9164 8.94687 25.9164 9.1875V27.6883H21.875C21.5086 27.6883 21.3063 28.1094 21.5305 28.3938L27.6555 36.1484ZM48.0156 34.2344H44.7344C44.4937 34.2344 44.2969 34.4312 44.2969 34.6719V43.0938H11.7031V34.6719C11.7031 34.4312 11.5063 34.2344 11.2656 34.2344H7.98438C7.74375 34.2344 7.54688 34.4312 7.54688 34.6719V45.5C7.54688 46.468 8.32891 47.25 9.29688 47.25H46.7031C47.6711 47.25 48.4531 46.468 48.4531 45.5V34.6719C48.4531 34.4312 48.2563 34.2344 48.0156 34.2344Z" fill="black"/>
            </svg>
            `
        };
    }   

    constructor({ data, api }){
        super();
    
        if( Object.keys(data).length > 0 ){
            this.data = data;
            this.preloaded = true;
        } else {
            this.data = {
                url: "",
                title: "",
                text: "",
                button: "",
                placeholder: "",
            }
        }
    
        this.render = this.render.bind(this);
    }


    render(){
        let node = this.createNode();

        node.innerHTML = `
            <div class="ce-page ce-tool">
                <header class="ce-tool-head ce-greenBox__head">
                    <h2 class="ce-tool-head__title"> File downloader </h2>
                </header>

                <div>
                    
                    <label class="w-100">
                        <b>Title</b>
                        <input type="text" name="link" placeholder="Title" class="_text_title form-control"  /> 
                    </label>
                    <label class="w-100">
                        <b>Text</b>
                        <input type="text" name="link" placeholder="Text" class="_text_text form-control"  /> 
                    </label>

                    <label class="w-100">
                        <b>Button</b>
                        <input type="text" name="link" placeholder="Title" class="_text_btn form-control"  /> 
                    </label>

                    <label class="w-100">
                        <b>Placeholder</b>
                        <input type="text" name="link" placeholder="Title" class="_text_placeholder form-control"  /> 
                    </label>

                    <div class="w-100">
                        <b>File:</b>
                        <div class="loc-item flex">
                            <input type="file" name="file" class="w-100 _file_upload" /> 
                            <input type="text" name="link"  class="_loc_link form-control"  /> 
                        </div> 
                    </div>

                </div>
            </div>
        `;

        if( this.preloaded ){
            node.querySelector('._loc_link').value = this.data.url;
            node.querySelector('._text_title').value = this.data.title;
            node.querySelector('._text_text').value = this.data.text;
            node.querySelector('._text_btn').value = this.data.button;
            node.querySelector('._text_placeholder').value = this.data.placeholder;
        }

        node.querySelector('._file_upload').addEventListener('change', (e) => {

            console.log('[file]', e.target.files[0] );

            const formData = new FormData();
            formData.append('image', e.target.files[0] );


            fetch(`/api/add-photo-to-post`, {
                method: 'POST',
                body: formData
            })
            .then( res => res.json() )
            .then( res => {
                if( res.success ){
                    node.querySelector('._loc_link').value = res.file.url;
                    this.save(this.nodes.wrapper);
                }
            });

        });

        return this.nodes.wrapper;
    }

    save( node ){
        return {
            title: node.querySelector('._text_title').value,
            text: node.querySelector('._text_text').value,
            button: node.querySelector('._text_btn').value,
            placeholder: node.querySelector('._text_placeholder').value,
            url: node.querySelector('._loc_link').value
        }
    }
}