import { UP_LVL, DOWN_LVL } from './types';

var initialState = {
    name: 'Athas',
    race: 'Humano',
    class: 'Paladino',
    level: 10,
    bg: 'bgHum'
};

function Reducer(state=initialState, action) {
    switch(action.type) {
        case UP_LVL:
            // return {...state, level: state.level + 1};
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
        default:
            return state;
    }
};

export default Reducer;

