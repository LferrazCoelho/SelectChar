import { UP_LVL } from './types';
import { DOWN_LVL } from './types';

var initialState = {
    name: 'Athas',
    race: 'Humano',
    class: 'Paladino',
    level: 1,
    bg: 'bgHum'
};

function Reducer(state=initialState, action) {
    switch(action.types) {
        case UP_LVL:
            return {...state, level: state.level + 1};
        case DOWN_LVL:
            return {...state, level: state.level - 1};
        default:
            return state;
    }
};

export default Reducer;

