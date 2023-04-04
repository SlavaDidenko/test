import Header from '@editorjs/header';
import List from '@editorjs/list';
import RawTool from '@editorjs/raw';
import Paragraph from '@editorjs/paragraph';
// import Tooltip from '../components/inline-tools/tooltip';

import Tooltip from 'editorjs-tooltip';

import {
  ContentBtnsImg,
  ImgSlider,
  IcoTitleText,
  Review,
  TwoColBlocks,
  ProductCards,
  LinkCards,
  NewLinkCards,
  GreenBlock,
  Numbers,
  Divider,
  Steps,
  FileDownloader,
  GreenBlockFile,
  Quote,
  ContentImgBtnColumn,
  Process,
  DemoForm,
  Newsletter,
  Cases,
  Comparing,
  Blog,
  Switch,
  Compare
} from '../components/new'

export const NEW_LANDING_CONFIG = {
  config_type: 'new-landing',
  tools: {
    header: Header,
    tooltip: {
      class: Tooltip,
      config: {
        location: 'top',
        highlightColor: '#FFEFD5',
        underline: true,
        backgroundColor: '#154360',
        textColor: '#FDFEFE',
        holder: 'editTest'
      }
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true
    },
    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L',
    },
    raw: RawTool,
    // comparing: {
    //   class: Comparing,
    //   inlineToolbar: true
    // },
    compare: {
      class: Compare,
      inlineToolbar: true
    },
    switch: {
      class: Switch,
      inlineToolbar: true
    },
    contentBtnsImg: {
      class: ContentBtnsImg,
      inlineToolbar: true
    },
    imgSlider: {
      class: ImgSlider,
      inlineToolbar: true
    },
    icoTitleText: {
      class: IcoTitleText,
      inlineToolbar: true
    },
    review: {
      class: Review,
      inlineToolbar: true
    },
    twoColBlocks: {
      class: TwoColBlocks,
      inlineToolbar: true
    },
    linkCards: {
      class: LinkCards,
      inlineToolbar: true
    },
    productCards: {
      class: ProductCards,
      inlineToolbar: true
    },
    newLinkCards: {
      class: NewLinkCards,
      inlineToolbar: true
    },
    // greenBlock: {
    //   class: GreenBlock,
    //   inlineToolbar: true
    // },
    numbers: {
      class: Numbers,
      inlineToolbar: true
    },
    divider: {
      class: Divider,
      inlineToolbar: true
    },
    steps: {
      class: Steps,
      inlineToolbar: true
    },
    file_downloader: {
      class: FileDownloader
    },
    quote: {
      class: Quote
    },
    contentImgBtnColumn: {
      class: ContentImgBtnColumn
    },
    process: {
      class: Process
    },
    demoForm: {
      class: DemoForm
    },
    newsletter: {
      class: Newsletter
    },
    cases: {
      class: Cases
    }
  }
}
