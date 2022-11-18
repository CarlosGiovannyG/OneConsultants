import {
  CONTINUE_FORM,
  FILLED_FORM_SCHOOL,
  FILLED_FORM_USER,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../variables/users";

export const reducersUsers = {
  filledForm: (state, action) => {
    if (action.type === FILLED_FORM_USER) {
      return {
        ...state,
        dataUser: action.payload,
      };
    }
  },
  filledFormSchool: (state, action) => {
    if (action.type === FILLED_FORM_SCHOOL) {
      return {
        ...state,
        dataUserSchool: action.payload,
      };
    }
  },
  continueForm: (state, action) => {
    if (action.type === CONTINUE_FORM) {
      return {
        ...state,
        continueForm: action.payload,
      };
    }
  },
  registerUser: (state, action) => {
    if (action.type === REGISTER_USER) {
      return {
        ...state,
        loading: action.payload,
      };
    }
  },
  registerUserSuccess: (state, action) => {
    if (action.type === REGISTER_USER_SUCCESS) {
      return {
        ...state,
        loading: false,
        responseRegister: action.payload,
      };
    }
  },
  registerUserFail: (state, action) => {
    if (action.type === REGISTER_USER_FAIL) {
      return {
        ...state,
        loading: false,
        responseError: action.payload,
      };
    }
  },
};
