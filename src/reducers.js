import { SET_UPLVL } from './actions'

const initialState = {
    level: 1
};

function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_UPLVL:
            return { level: state.level + 1 };
        // case SET_DOWNLVL:
        //     return {...state, level: state.level - 1};
        default:
            return state;
    }
}

export default reducer;
