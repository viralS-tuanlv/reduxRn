import {combineReducers} from 'redux';
import getData from './counterReducer';

export default combineReducers({
  counter1: getData
});
