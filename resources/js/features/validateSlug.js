
const SELECTOR = "._SLUG_VALIDATOR";
const VALIDATOR_PATTERN = /^[a-z0-9-_]+$/ig

const checkIfValidURLSlug = (str) => {
    // Regular expression to check if string is a valid url slug
    console.log('val:', VALIDATOR_PATTERN.test(str), str );
    return VALIDATOR_PATTERN.test(str);
}

export const SlugValidator = () => {
    document.querySelectorAll( SELECTOR ).forEach( item => {
        item.addEventListener('input', ( e ) => {
            let value = e.target.value;
            if( !checkIfValidURLSlug( value ) ){
                item.value = value
                .replace(/[^a-z0-9-_]/g, "") // remove invalid chars
                .replace(/\s+/g, "-") // collapse whitespace and replace by -
                .replace(/-+/g, "-") // collapse dashes
                .replace(/^-+/, "") // trim - from start of text
                // .replace(/-+$/, "");
            }
        });
    });  
}

export default SlugValidator;