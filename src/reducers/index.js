import { upLevel } from './upLevel';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  lvlUpState: upLevel
});