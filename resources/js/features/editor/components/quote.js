import Quote from '@editorjs/quote';

export class ExtendedQuote extends Quote {
    /*
        Added regexp to save method to replace &nbsp; (No Space Breack) for \n
        Support for line breaks;
    */
    save( quoteElement ){
        const text = quoteElement.querySelector(`.${this.CSS.text}`);
        const caption = quoteElement.querySelector(`.${this.CSS.caption}`);

        const regex = /&nbsp;/gi
        let val = text.innerHTML.replace(regex, '\n')

        return Object.assign(this.data, {
            text: val,
            caption: caption.innerHTML
        });
    }
}

export default ExtendedQuote;