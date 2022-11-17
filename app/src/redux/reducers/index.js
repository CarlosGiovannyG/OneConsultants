import { CLOSE_MODAL, OPEN_MODAL } from "../variables/modal";
import { reducersModal } from "./reducersModal";

const initialState = {
  showModal: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return reducersModal.open(state, action);
    case CLOSE_MODAL:
      return reducersModal.close(state, action);
    default:
      return state;
  }
}

export default reducer;
