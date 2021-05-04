import { combineReducers } from 'redux';
import todoReducer from './TodoReducer/todoReducer';

//This is our rootReducer and we will combine our reducers with the help of combineReducers func of redux

export default combineReducers({
  todo: todoReducer,
});
