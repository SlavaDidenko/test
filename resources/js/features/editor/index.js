import EditorJS from '@editorjs/editorjs';
import { getConfig } from './configs';


const CONTAINER_SELECTOR = '._EDITOR_CONTAINER';
const VALUE_SELECTOR = '._EDITOR_VALUE';
const EDITOR_SELECTOR = '._EDITORS';

/*
    Template: 
    <div class="_EDITOR_CONTAINER">
        <textarea class="_EDITOR_VALUE" name="short_review_uk"></textarea>
        <div 
            class="_EDITORS" 
            data-type="full"
            data-placeholder="Вступ до статті"    
        ></div>
    </div>

    Types:
    full, short, faq
*/

const InitEditor = ( editor_node, value_node ) => {


    if( !editor_node && !value_node ){
        console.error(`You don't setted valid values to editor node and/or save input`);
    } 

    const { type = 'short', placeholder = '' } = editor_node.dataset;
    let preloaded;

    if( value_node.value != ''){
        try {
            preloaded = JSON.parse( value_node.value  );
        } catch (error) {
            preloaded = {};
        }
    }

    const config = getConfig( type );
    console.log('config', type, config, editor_node.dataset.config, preloaded );

    const editor = new EditorJS({
        ...config,
        holder: editor_node,
        placeholder: placeholder,
        data: preloaded,
        onChange: () => {

            console.log('START');
            editor.save().then( output => {
                value_node.value = JSON.stringify( output );
                console.log('SAVED');
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
        }
    });

    const main_form = document.getElementById('landings_form');

    if( main_form ){

        main_form.addEventListener('submit', (e) => {

            e.preventDefault();

            editor.save().then( output => {
                value_node.value = JSON.stringify( output );
                console.log('SAVED');

                main_form.submit();

            }).catch((error) => {
                console.log('Saving failed: ', error)
            });

        });

    }

    console.log('[Editor]', editor );
} // EDITOR INIT


const Editor = () => {

    const EDITOR_CONTAINERS = document.querySelectorAll( CONTAINER_SELECTOR );
    EDITOR_CONTAINERS.forEach( container => {
        const editor = container.querySelector( EDITOR_SELECTOR );
        const value = container.querySelector( VALUE_SELECTOR );
        InitEditor( editor, value );
    });
    
}


export default Editor;