import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";

export const useForm = (initialForm, validateForm) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      if (initialForm.type === 'user') {
        dispatch(actions.filledForm(form));
        dispatch(actions.continueForm(true));        
      }
      if (initialForm.type === 'school') {
        dispatch(actions.filledFormSchool(form));
        dispatch(actions.continueForm(true));        
      }
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
