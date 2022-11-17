import { CLOSE_MODAL, OPEN_MODAL } from "../variables/modal";

export const reducersModal = {
  open: (state, action) => {
    if (action.type === OPEN_MODAL) {
      return {
        ...state,
        showModal: action.payload,
      };
    }
  },
  close: (state, action) => {
    if (action.type === CLOSE_MODAL) {
      return {
        ...state,
        showModal: action.payload,
      };
    }
  },
};
