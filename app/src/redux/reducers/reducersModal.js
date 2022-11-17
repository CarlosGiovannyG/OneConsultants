import { CLOSE_MODAL, CLOSE_MODAL_ABSTRACT, CLOSE_MODAL_SCHOOL, OPEN_MODAL, OPEN_MODAL_ABSTRACT, OPEN_MODAL_SCHOOL } from "../variables/modal";

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
  openSchool: (state, action) => {
    if (action.type === OPEN_MODAL_SCHOOL) {
      return {
        ...state,
        showModalSchool: action.payload,
      };
    }
  },
  closeSchool: (state, action) => {
    if (action.type === CLOSE_MODAL_SCHOOL) {
      return {
        ...state,
        showModalSchool: action.payload,
      };
    }
  },
  openAbstract: (state, action) => {
    if (action.type === OPEN_MODAL_ABSTRACT) {
      return {
        ...state,
        showAbstract: action.payload,
      };
    }
  },
  closeAbstract: (state, action) => {
    if (action.type === CLOSE_MODAL_ABSTRACT) {
      return {
        ...state,
        showAbstract: action.payload,
      };
    }
  },
};
