const STORAGE_KEY = 'leafeo_h';
const HISTORY_FORM_SELECTOR = "._history_selector";

export class HistoryLocalObserver {
    constructor(){
        this.history = [];
        this.nodes = [];

        this.addHistory = this.addHistory.bind( this );
        this.save = this.save.bind( this );
        this.init = this.init.bind( this );
        this.clearHistory = this.clearHistory.bind( this );
        this.renderValue = this.renderValue.bind( this );

        this.init();
    }   

    init(){
        const localHistory = sessionStorage.getItem( STORAGE_KEY );
        if( localHistory ){
            this.history = JSON.parse( localHistory );
        }

        this.nodes = [...document.querySelectorAll( HISTORY_FORM_SELECTOR )];
    }

    renderValue(){
        this.nodes.forEach( node => {
            node.value = JSON.stringify( this.history );
        });
    }

    save(){
        sessionStorage.setItem( STORAGE_KEY, JSON.stringify( this.history ) );
    }

    addHistory(){


        if( this.history.length === 0 ){
            
            if( document.referrer !== ""){
                let refferer = {
                    path: document.referrer,
                    time: new Date()
                }
                this.history.push(refferer);
            }
        }

        let historyItem = {
            path: window.location.href,
            time: new Date()
        }
        this.history.push(historyItem);
        this.save();
        this.renderValue();
    }

    clearHistory(){
        this.history = [];
        sessionStorage.removeItem( STORAGE_KEY );
    }

}