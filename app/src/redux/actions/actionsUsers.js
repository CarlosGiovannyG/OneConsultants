import { CONTINUE_FORM, FILLED_FORM_SCHOOL, FILLED_FORM_USER } from "../variables/users";


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
};
