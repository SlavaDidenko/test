import Header from '@editorjs/header';

import List from '@editorjs/list';
// import ImageTool from '@editorjs/image';
// import Embed from '@editorjs/embed';
// import RawTool from '@editorjs/raw';
// import LinkTool from '@editorjs/link';
// import Marker from '@editorjs/marker';
// import Table from '@editorjs/table';
import {
  TwoColl,
  Values,
  For,
  Functionality,
  PartnersIntegration,
  Stages,
  ContactUs,
  Faq,
  AboutSystem,
  Next,
  // CustomButton,
  IconTwoCols,
  IconTwoColsG,
  TitleBtn,
  TitleTextBtn,
  Cases,
  Feedbacks,
  Downloader,
} from '../components';

export const LANDING_CONFIG = {
  config_type: 'landing',
  tools: {
    header: Header,
    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L',
    },
    twoColl: {
      class: TwoColl,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+C',
    },
    values: {
      class: Values,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+V',
    },
    for: {
      class: For,
      shortcut: 'CMD+SHIFT+F',
    },
    functionality: {
      class: Functionality,
      shortcut: 'CMD+SHIFT+N',
      inlineToolbar: true,
    },
    partners: {
      class: PartnersIntegration,
      shortcut: 'CMD+SHIFT+T',
    },
    stages: {
      class: Stages,
      shortcut: 'CMD+SHIFT+S',
    },
    contactUs: {
      class: ContactUs,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+U',
    },
    faq: {
      class: Faq,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+Q',
    },
    'about-system': {
      class: AboutSystem,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+A',
    },
    next: {
      class: Next,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+X',
    },
    // button: {
    //   class: CustomButton,
    //   inlineToolbar: true,
    //   shortcut: 'CMD+SHIFT+B',
    // },
    icon_two_cols: {
      class: IconTwoCols,
      inlineToolbar: true
    },
    icon_two_cols_g: {
      class: IconTwoColsG,
      inlineToolbar: true
    },
    title_btn: {
      class: TitleBtn,
      inlineToolbar: true
    },
    title_text_btn: {
      class: TitleTextBtn,
      inlineToolbar: true
    },
    cases: {
      class: Cases
    },
    feedbacks: {
      class: Feedbacks
    },
    // downloader: {
    //   class: Downloader
    // }
  }
}