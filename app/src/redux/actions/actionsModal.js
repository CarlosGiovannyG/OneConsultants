import { CLOSE_MODAL, OPEN_MODAL } from "../variables/modal";

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
};
