//import libraries
import i18n from 'ex-react-native-i18n';
import { Localization } from 'expo-localization';


//import translations

import en from "./en.json";
import hi from "./hi.json";


//bind the translations with i18n

i18n.translations = {
    hi,
    en

};






//set app to local phone settings

const getLanguage = async () => {
    try {
        const choice = Localization.locale;
        i18n.fallbacks = true;
        i18n.locale = choice.substr(0, 2);
        i18n.initAsync();
    }

    catch (error) {
        console.log("error");
    }
    getLanguage();
}


//export module

export function t(name) {
    return i18n.t(name);
}

