import { SHOW_MODAL, HIDE_MODAL } from '../../types';

export const setAlert = (title, message, duration = 8000) => (dispatch) => {
  dispatch({ type: SHOW_MODAL, payload: { title, message } });

  setTimeout(() => {
    dispatch({ type: HIDE_MODAL });
  }, duration);
};

export const hideAlert = () => {
  return {
    type: HIDE_MODAL,
  };
};
