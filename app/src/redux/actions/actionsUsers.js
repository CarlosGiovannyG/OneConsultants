import axios from "axios";
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
      console.log({ userData });
      const config = {
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };

      axios
        .post("http://localhost:3001/users", userData, config)
        .then((response) => {
          dispatch({ type: REGISTER_USER_SUCCESS, payload: true });
        })
        .catch((error) => {
          dispatch({ type: REGISTER_USER_FAIL, payload: error });
        });
    };
  },
  getAllUser: () => {
    return (dispatch) => {
      dispatch(dispatch({ type: GET_ALL_USERS, payload: true }));
      const config = {
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };

      axios
        .get("http://localhost:3001/users", config)
        .then((response) => {
          dispatch({ type: GET_ALL_USERS_SUCCESS, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: GET_ALL_USERS_FAIL, payload: error });
        });
    };
  },
};
