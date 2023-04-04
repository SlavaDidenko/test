import {FULL_CONFIG, FAQ_CONFIG, SHORT_CONFIG, EVENT_CONFIG, LANDING_CONFIG, NEW_LANDING_CONFIG} from './index';

export const getConfig = ( type ) => {
    if( type === "short"){
        return SHORT_CONFIG;
    }
    if( type === "full"){
        return FULL_CONFIG;
    }
    if( type === "faq"){
        return FAQ_CONFIG;
    }
    if( type === "event"){
        return EVENT_CONFIG;
    }
    if( type === "landing"){
        return LANDING_CONFIG;
    }
    if( type === "new-landing"){
        return NEW_LANDING_CONFIG;
    }
}