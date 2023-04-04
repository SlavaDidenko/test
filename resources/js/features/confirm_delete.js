const ConfirmDelete = () => {
    const CONFIRM_CLASSNAME = "._confirm";
    document.querySelectorAll( CONFIRM_CLASSNAME ).forEach( ( item ) => {
        item.addEventListener('click', e => {
            let title = e.target.dataset.title;
            if( !title ){
                title = '';
            }
            let result = confirm(` You want to delete ${title}?`);
            if( !result ){
                e.preventDefault();  
            }
        });
    });
}

export default ConfirmDelete;