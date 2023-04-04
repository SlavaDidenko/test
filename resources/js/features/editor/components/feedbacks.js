import InitSelect2 from '../../initSelect2';

export class Feedbacks {

    static get toolbox() {
        return {
            title: 'Feedbacks',
            icon: `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92682 2H14.0732C15.8965 1.99997 17.3663 1.99995 18.5223 2.15543C19.7225 2.31684 20.7331 2.66218 21.5354 3.4652C22.338 4.26743 22.6832 5.27785 22.8446 6.47771C23.0001 7.63368 23 9.10351 23 10.9268V11.0732C23 12.8965 23.0001 14.3663 22.8446 15.5223C22.6832 16.7221 22.338 17.7326 21.5354 18.5348C20.7331 19.3378 19.7225 19.6832 18.5223 19.8446C17.3663 20.0001 15.8965 20 14.0732 20H14C13.4477 20 13 19.5523 13 19C13 18.4477 13.4477 18 14 18C15.9138 18 17.2486 17.9979 18.2557 17.8624C19.2341 17.7308 19.7519 17.4902 20.1206 17.1212C20.4896 16.7525 20.7308 16.2341 20.8624 15.2557C20.9979 14.2486 21 12.9138 21 11C21 9.08622 20.9979 7.7514 20.8624 6.7443C20.7308 5.76595 20.4902 5.24808 20.1212 4.87941C19.7525 4.51042 19.2341 4.26916 18.2557 4.13758C17.2486 4.00213 15.9138 4 14 4H10C8.08622 4 6.7514 4.00213 5.7443 4.13758C4.76595 4.26916 4.24808 4.50982 3.87941 4.87881C3.51042 5.24748 3.26916 5.76595 3.13758 6.7443C3.00213 7.7514 3 9.08622 3 11C3 12.9138 3.00213 14.2486 3.13758 15.2557C3.26916 16.2341 3.50982 16.7519 3.87881 17.1206L3.87965 17.1214C4.29012 17.5325 4.88534 17.7843 6.09723 17.9027C6.6469 17.9564 7.04896 18.4456 6.99526 18.9952C6.94157 19.5449 6.45244 19.947 5.90277 19.8933C4.5149 19.7577 3.36028 19.4316 2.46482 18.535C1.66207 17.7328 1.31682 16.7223 1.15543 15.5223C0.999951 14.3663 0.999973 12.8965 1 11.0732V10.9268C0.999973 9.1035 0.999951 7.63368 1.15543 6.47771C1.31682 5.2777 1.6621 4.26718 2.46489 3.46489C3.26718 2.6621 4.2777 2.31682 5.47771 2.15543C6.63368 1.99995 8.1035 1.99997 9.92682 2Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.684 8.27047C16.0869 8.6482 16.1073 9.28103 15.7295 9.68394L11.9795 13.6839C11.6089 14.0793 10.9907 14.1075 10.5856 13.7474L8.33565 11.7474C7.92286 11.3805 7.88568 10.7484 8.2526 10.3356C8.61952 9.92286 9.25159 9.88568 9.66437 10.2526L11.1865 11.6056L14.2705 8.31606C14.6482 7.91315 15.281 7.89274 15.684 8.27047Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58976 16.504C7.13982 16.5536 7.54554 17.0397 7.49596 17.5898L7.45386 18.0569C7.35784 19.109 7.29612 19.8058 7.30901 20.2858C7.31016 20.3284 7.31189 20.3669 7.31402 20.4014C7.36435 20.3846 7.42195 20.3639 7.48754 20.3384C7.98544 20.1449 8.67626 19.7879 9.69833 19.2574C10.991 18.5866 12.5245 18 14 18C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20C13.0035 20 11.8129 20.4134 10.6197 21.0326L10.5584 21.0644C9.60988 21.5567 8.82295 21.9652 8.21195 22.2026C7.89784 22.3247 7.56458 22.4286 7.2357 22.4596C6.89383 22.4919 6.48566 22.451 6.11238 22.2001M6.58976 16.504C6.03971 16.4545 5.55361 16.8602 5.50404 17.4102ZM5.50404 17.4102L5.46214 17.8751ZM5.46214 17.8751C5.46027 17.8956 5.45835 17.9166 5.45649 17.937C5.36795 18.9067 5.29323 19.7252 5.30973 20.3395C5.32456 20.8913 5.41053 21.7285 6.11238 22.2001" fill="black"/>
                </svg>
            `
        };
    }

    constructor({ data, api }){
        this.api = api;

        this.nodes = {
            wrapper: null
        };

        if( Object.keys(data).length > 0 ){
            this.data = data;
            this.preloaded = true;
        } else {
            this.data = [];
        }

        this.handleCases = this.handleCases.bind(this);
    }

    handleCases( e ){
        /*
            Callback for saving data for posts.
        */
        let cases = [];
        console.log(this);
        let selectedPosts = this.nodes.wrapper.querySelector('._select2');
        console.log( selectedPosts, this.nodes );
        if( selectedPosts && selectedPosts.options.length > 0 ){
            [...selectedPosts.options].forEach( opt => {
                if( opt.selected ){
                    cases.push({
                        id: opt.value,
                        text: opt.text
                    });
                }
            });
            this.data = cases;
        }
        
    }

    getSelect2Config(){
        return({
            ajax: {
                url: "/api/feedbacks",
                dataType: 'json',
                data: function( params ){
                    console.log( params );
                    let query = {
                        search: params.term,
                    }
                    return query
                }, 
                method: 'GET',
                delay: 350
            }
        });
    }

    render(){
        let node;
        if (this.nodes.wrapper) {
            node = this.nodes.wrapper;
        } else {
            this.nodes.wrapper = document.createElement('div');
            node = this.nodes.wrapper;
        }

        node.innerHTML = `
            <div class="ce-values">
                <header class="ce-tool-head ce-values__head">
                    <h2 class="ce-tool-head__title"> Фідбеки </h2>
                </header>
                <div class="container-fluid ce-tool-body ce-values__body ">
                    <select class="_select2" name="feedbacks[]" multiple></select>
                </div>
            </div>
        `;

        if( this.data && this.data.length > 0 ){
            this.data.forEach( opt => {
                let option = new Option( opt.text, opt.id );
                option.selected = true;
                this.nodes.wrapper.querySelector('._select2').appendChild( option );
            });
        }

        this.init();
        
        return node;

    }

    handleCases( e ){
        /*
            Callback for saving data for posts.
        */
        let cases = [];
        console.log(this);
        let selectedPosts = this.nodes.wrapper.querySelector('._select2');
        console.log( selectedPosts, this.nodes );
        if( selectedPosts && selectedPosts.options.length > 0 ){
            [...selectedPosts.options].forEach( opt => {
                if( opt.selected ){
                    cases.push({
                        id: opt.value,
                        text: opt.text
                    });
                }
            });
            this.data = cases;
        }
        
    }

    init(){
        try {
            InitSelect2(  $( this.nodes.wrapper.querySelector('._select2') ) , this.getSelect2Config(), true, this.handleCases );
        } catch (error) {
            console.log('[error]', error );
        }
    }

    save(node) {
        return this.data;
    }

}