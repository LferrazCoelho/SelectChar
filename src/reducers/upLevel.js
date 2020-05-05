import { CLICK_UP_LEVEL } from '../actions/actionTypes';

const initialState = {
    level: 1
  };

  export const upLevel = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UP_LEVEL:
        return { ...state, level: state.level + 1};
      default:
        return state;
    }
  };