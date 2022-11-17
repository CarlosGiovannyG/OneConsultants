import {
  CLOSE_MODAL,
  CLOSE_MODAL_ABSTRACT,
  CLOSE_MODAL_SCHOOL,
  OPEN_MODAL,
  OPEN_MODAL_ABSTRACT,
  OPEN_MODAL_SCHOOL,
} from "../variables/modal";

export const actionsModal = {
  open: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: OPEN_MODAL, payload: true }));
    };
  },

  close: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: CLOSE_MODAL, payload: false }));
    };
  },
  openSchool: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: OPEN_MODAL_SCHOOL, payload: true }));
    };
  },

  closeSchool: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: CLOSE_MODAL_SCHOOL, payload: false }));
    };
  },
  openAbstract: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: OPEN_MODAL_ABSTRACT, payload: true }));
    };
  },

  closeAbstract: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: CLOSE_MODAL_ABSTRACT, payload: false }));
    };
  },
};
