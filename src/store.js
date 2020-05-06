import { createStore } from 'redux';
import Reducer from './reducers';

var store = createStore(Reducer);

export default store
