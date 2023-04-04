import Header from '@editorjs/header';
import List from '@editorjs/list';
import { ExtendedQuote } from '../components';

export const SHORT_CONFIG = {
    config_type: 'short',
    tools: {
        header: Header,
        quote: ExtendedQuote,
        list: {
            class: List,
            inlineToolbar: true,
        },
    }
}