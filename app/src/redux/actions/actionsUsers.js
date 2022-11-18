import axios from "axios";
import {
  CONTINUE_FORM,
  FILLED_FORM_SCHOOL,
  FILLED_FORM_USER,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
} from "../variables/users";

export const actionsUsers = {
  filledForm: (data) => {
    return (dispatch) => {
      dispatch(dispatch({ type: FILLED_FORM_USER, payload: data }));
    };
  },

  filledFormSchool: (data) => {
    return (dispatch) => {
      dispatch(dispatch({ type: FILLED_FORM_SCHOOL, payload: data }));
    };
  },

  continueForm: (action) => {
    return (dispatch) => {
      dispatch(dispatch({ type: CONTINUE_FORM, payload: action }));
    };
  },
  registerUser: (userData) => {
    return (dispatch) => {
      dispatch(dispatch({ type: REGISTER_USER, payload: true }));
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        axios
          .post("/api/users/register", userData, config)
          .then((response) => {
            dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
          })
          .catch((error) => {
            dispatch({ type: REGISTER_USER_FAIL, payload: error });
          });
      } catch (error) {}
    };
  },
};
