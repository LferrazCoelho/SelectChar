import { 
    UP_LVL,
    DOWN_LVL,
    CHAR_HUM,
    CHAR_ANA,
    CHAR_GNO,
    CHAR_ELF,
    CHAR_ORC, 
    CHAR_TRO, 
    CHAR_TAU, 
    CHAR_UND,
    CHAR_HUMF,
    CHAR_ANAF,
    CHAR_GNOF,
    CHAR_ELFF,
    CHAR_ORCF, 
    CHAR_TROF, 
    CHAR_TAUF, 
    CHAR_UNDF,
    MASC,
    FEMI,
    CLASSWAR,
    CLASSWOR,
    CLASSROU,
    CLASSMAG,
    CLASSPRI,
    CLASSHUN,
    CLASSXAM,
    CLASSPAL,
    CLASSDRU,
    NAMEVALUE
} from './types';

import charHum from './assets/img/charHum.gif'
import charAna from './assets/img/charAna.gif'
import charGno from './assets/img/charGno.gif'
import charElf from './assets/img/charElf.gif'
import charOrc from './assets/img/charOrc.gif'
import charTro from './assets/img/charTro.gif'
import charTau from './assets/img/charTau.gif'
import charUnd from './assets/img/charUnd.gif'

import charHumf from './assets/img/charHumf.gif'
import charAnaf from './assets/img/charAnaf.gif'
import charGnof from './assets/img/charGnof.gif'
import charElff from './assets/img/charElff.gif'
import charOrcf from './assets/img/charOrcf.gif'
import charTrof from './assets/img/charTrof.gif'
import charTauf from './assets/img/charTauf.gif'
import charUndf from './assets/img/charUndf.gif'

var initialState = {
    name: 'Athas',
    race: 'Humano',
    class: 'Paladino',
    level: 10,
    bg: 'bgHum',
    char: charHum,
    cardColor: 'primary',
    tabState: '1'
};

function Reducer(state=initialState, action) {
    switch(action.type) {
        case UP_LVL:
            let uplevel = state.level + 10;
            if ( uplevel >= 60 ) {
                uplevel = 60;
            }
            return {...state, level: uplevel};
        case DOWN_LVL:
            let downlevel = state.level - 10;
            if ( downlevel <= 10) {
                downlevel = 10;
            }
            return {...state, level: downlevel};
        case CHAR_HUM:
            return {...state, race:'Humano' , char: charHum, bg: 'bgHum'}
        case CHAR_ANA:
            return {...state, race:'Anão' , char: charAna, bg: 'bgAna'}
        case CHAR_GNO:
            return {...state, race:'Gnomo' , char: charGno, bg: 'bgGno'}
        case CHAR_ELF:
            return {...state, race:'Elfo Noturno' , char: charElf, bg: 'bgElf'}
        case CHAR_ORC:
            return {...state, race:'Orc' , char: charOrc, bg: 'bgOrc'}
        case CHAR_TRO:
            return {...state, race:'Troll' , char: charTro, bg: 'bgTro'}
        case CHAR_TAU:
            return {...state, race:'Tauren' , char: charTau, bg: 'bgTau'}
        case CHAR_UND:
            return {...state, race:'Morto Vivo' , char: charUnd, bg: 'bgUnd'}
        case CHAR_HUMF:
            return {...state, race:'Humano' , char: charHumf, bg: 'bgHum'}
        case CHAR_ANAF:
            return {...state, race:'Anão' , char: charAnaf, bg: 'bgAna'}
        case CHAR_GNOF:
            return {...state, race:'Gnomo' , char: charGnof, bg: 'bgGno'}
        case CHAR_ELFF:
            return {...state, race:'Elfo Noturno' , char: charElff, bg: 'bgElf'}
        case CHAR_ORCF:
            return {...state, race:'Orc' , char: charOrcf, bg: 'bgOrc'}
        case CHAR_TROF:
            return {...state, race:'Troll' , char: charTrof, bg: 'bgTro'}
        case CHAR_TAUF:
            return {...state, race:'Tauren' , char: charTauf, bg: 'bgTau'}
        case CHAR_UNDF:
            return {...state, race:'Morto Vivo' , char: charUndf, bg: 'bgUnd'}
        case CLASSWAR:
            return {...state, class: 'Guerreiro'}
        case CLASSWOR:
            return {...state, class: 'Bruxo'}
        case CLASSPRI:
            return {...state, class: 'Sacerdote'}
        case CLASSMAG:
            return {...state, class: 'Mago'}
        case CLASSHUN:
            return {...state, class: 'Caçador'}
        case CLASSDRU:
            return {...state, class: 'Druida'}
        case CLASSROU:
            return {...state, class: 'Ladino'}
        case CLASSPAL:
            return {...state, class: 'Paladino'}
        case CLASSXAM:
            return {...state, class: 'Xamã'}
        case MASC:
            return {...state, tabState: '1'}
        case FEMI:
            return {...state, tabState: '2'}
        case NAMEVALUE:
            return {...state, name: action.name}
        default:
            return state;
    }
};

export default Reducer;

