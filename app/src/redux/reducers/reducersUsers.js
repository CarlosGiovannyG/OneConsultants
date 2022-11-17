import { CONTINUE_FORM, FILLED_FORM_SCHOOL, FILLED_FORM_USER } from "../variables/users";

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
};
