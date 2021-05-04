import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './ModalOverlay.module.css';
import { hideAlert } from '../../../../store/Actions/ModalActions/modalActions';

const ModalOverlay = () => {
  const { title, message, active } = useSelector((state) => ({
    title: state.modal.title,
    message: state.modal.message,
    active: state.modal.active,
  }));

  const dispatch = useDispatch();

  const modalClass = active
    ? `${classes.Modal} ${classes.Show}`
    : classes.Modal;

  return (
    <Fragment>
      <Backdrop onClick={() => dispatch(hideAlert())} active={active} />
      <div className={modalClass}>
        <div className={classes.TitleArea}>
          <span>{title}</span>
          <span className={classes.Close} onClick={() => dispatch(hideAlert())}>
            &#10006;
          </span>
        </div>
        <div className={classes.Content}>{message}</div>
      </div>
    </Fragment>
  );
};

export default ModalOverlay;
