import {
  CLOSE_MODAL,
  CLOSE_MODAL_ABSTRACT,
  CLOSE_MODAL_SCHOOL,
  OPEN_MODAL,
  OPEN_MODAL_ABSTRACT,
  OPEN_MODAL_SCHOOL,
} from "../variables/modal";
import {
  CONTINUE_FORM,
  FILLED_FORM_SCHOOL,
  FILLED_FORM_USER,
} from "../variables/users";
import { reducersModal } from "./reducersModal";
import { reducersUsers } from "./reducersUsers";

const initialState = {
  dataUser: {},
  dataUserSchool: {},
  continueForm: false,
  showModal: false,
  showModalSchool: false,
  showAbstract: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return reducersModal.open(state, action);
    case CLOSE_MODAL:
      return reducersModal.close(state, action);
    case OPEN_MODAL_SCHOOL:
      return reducersModal.openSchool(state, action);
    case CLOSE_MODAL_SCHOOL:
      return reducersModal.closeSchool(state, action);
    case OPEN_MODAL_ABSTRACT:
      return reducersModal.openAbstract(state, action);
    case CLOSE_MODAL_ABSTRACT:
      return reducersModal.closeAbstract(state, action);
    case FILLED_FORM_USER:
      return reducersUsers.filledForm(state, action);
    case FILLED_FORM_SCHOOL:
      return reducersUsers.filledFormSchool(state, action);
    case CONTINUE_FORM:
      return reducersUsers.continueForm(state, action);
    default:
      return state;
  }
}

export default reducer;
