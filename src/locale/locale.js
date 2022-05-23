import en from './en'
import zh from './zh'
import es from './es'
import zh_tw from './zh_tw'
import pl from './pl'
import Store from '../store';

const localeObj = {en,zh,es,zh_tw,pl}

function locale(){
    return localeObj[Store.lang];
}

export default locale;