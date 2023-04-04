import Header from '@editorjs/header';

import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import RawTool from '@editorjs/raw';
import LinkTool from '@editorjs/link';
import Marker from '@editorjs/marker';
import { ExtendedQuote } from '../components';


export const FULL_CONFIG = { 
    config_type: 'full',
    tools: {
        header: Header,
        quote: {
            class: ExtendedQuote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
        },
        list: {
            class: List,
            inlineToolbar: true,
        },
        raw: RawTool,
        image: {
            class: ImageTool,
            config: {
                endpoints: {
                    byFile: '/api/add-photo-to-post', // Your backend file uploader endpoint
                    byUrl: '/api/parse-photo', // Your endpoint that provides uploading by Url
                },
            },
        },
        embed: {
            class: Embed,
            inlineToolbar: true
        },
        linkTool: {
            class: LinkTool,
            config: {
                endpoint: '/api/fetch-meta-data'
            }
        },
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
        }
    }, 
    
}
