import { SET_UPLVL } from './actions'

var initialState = {
    level: 1
};

function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_UPLVL:
            return { level: state.level + 1 };
        default:
            return state;
    }
}

export default reducer;
