import $ from 'jquery';
import select2 from 'select2';

export const InitSelect2 = ( jquery_selector, additional_config, block = false, changeHandler = null ) => {
    let config = {};

    if( additional_config ){
        config = {
            ...config,
            ...additional_config
        }
        console.log('conf', config );
    }

    if( block ){
        jquery_selector.select2( config );

        if( changeHandler ){
            jquery_selector.on('change', changeHandler );
        }
    } else {    
        $( jquery_selector ).select2( config );
        if( changeHandler ){
            $( jquery_selector ).on('change', changeHandler );
        }
    }
}



export default InitSelect2;