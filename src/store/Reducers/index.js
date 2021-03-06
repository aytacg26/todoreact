import { combineReducers } from 'redux';
import modalReducer from './ModalReducer/modalReducer';
import todoReducer from './TodoReducer/todoReducer';

//This is our rootReducer and we will combine our reducers with the help of combineReducers func of redux

export default combineReducers({
  todo: todoReducer,
  modal: modalReducer,
});
