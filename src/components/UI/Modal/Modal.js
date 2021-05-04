import React from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const Modal = (props) => {
  return createPortal(<ModalOverlay />, document.getElementById('modal-root'));
};

export default Modal;
