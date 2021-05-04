import { SHOW_MODAL, HIDE_MODAL } from '../../types';

const initialState = {
  title: '',
  message: '',
  active: false,
};

const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        title: payload.title,
        message: payload.message,
        active: true,
      };

    case HIDE_MODAL:
      return {
        ...state,
        title: '',
        message: '',
        active: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
