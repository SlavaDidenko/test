import Header from '@editorjs/header';

import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import RawTool from '@editorjs/raw';
import LinkTool from '@editorjs/link';
import Marker from '@editorjs/marker';
import Table from '@editorjs/table';
import { ExtendedQuote, Program, Features, Gallery, GalleryRow, Tickets, Speakers } from '../components';

export const EVENT_CONFIG = { 
    config_type: 'event',
    tools: {
        header: Header,
        speakers: {
            class: Speakers,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+K',
        },
        // partners: {
        //     class: Partners,
        //     inlineToolbar: true,
        //     shortcut: 'CMD+SHIFT+S',
        // },
        table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+E',
        },
        tickets: {
            class: Tickets,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+T',
        },
        galleryRow: {
            class: GalleryRow,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+R',
        },
        gallery: {
            class: Gallery,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+G',
        },
        features: {
            class: Features,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+F',
        },
        program: {
            class: Program,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+P',
        },
        quote: {
            class: ExtendedQuote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
        },
        list: {
            class: List,
            inlineToolbar: true,
        },
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
