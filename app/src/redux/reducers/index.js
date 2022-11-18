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
  GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
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
  loading: false,
  responseRegister: null,
  responseError: null,
  allUser: [],
  allUsersError: null,
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
    case REGISTER_USER:
      return reducersUsers.registerUser(state, action);
    case REGISTER_USER_SUCCESS:
      return reducersUsers.registerUserSuccess(state, action);
    case REGISTER_USER_FAIL:
      return reducersUsers.registerUserFail(state, action);
    case GET_ALL_USERS:
      return reducersUsers.getAllUsers(state, action);
    case GET_ALL_USERS_SUCCESS:
      return reducersUsers.getAllUsersSuccess(state, action);
    case GET_ALL_USERS_FAIL:
      return reducersUsers.getAllUsersFail(state, action);
    default:
      return state;
  }
}

export default reducer;
