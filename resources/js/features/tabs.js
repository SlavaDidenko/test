
const BTNS = '_langs_container';
const TABS_CLASSNAME = '._tabs';
const ITEMS_CLASSNAME = '._tabs__item';
const INPUT_CLASSNAME = '._input';

export const Tabs = () => {
    console.log('[tabs]');
    let active_tab = "en";
    const container = document.getElementById( BTNS );

    if( container ){
        const inputs = container.querySelectorAll(INPUT_CLASSNAME);
    
        const makeActive = ( lang ) => {
            console.log('[lang]', lang );
    
            document.querySelectorAll( ITEMS_CLASSNAME ).forEach( item => {
                if( item.dataset.lang === lang ){
                    item.classList.add('tab-active');
                } else {
                    item.classList.remove('tab-active');
                }
                console.log( item );
            })
        }
    
        inputs.forEach( btn => {
            btn.addEventListener('click', () => {
                makeActive( btn.dataset.lang );
            })
        });
    
        makeActive( active_tab );
        console.log('[c]', container, inputs );
    }

}


export default Tabs;