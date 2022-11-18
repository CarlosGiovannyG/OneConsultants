import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import actions from "../redux/actions";
import styles from "../styles/formUsers.module.css";

const initialForm = {
  nameSchool: "",
  citySchool: "",
  emailSchool: "",
  phoneSchool: "",
  teacher: "",
  type: "school",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.nameSchool.trim()) {
    errors.nameSchool = "El 'Nombre' del colegio es requerido";
  }

  if (!form.citySchool.trim()) {
    errors.citySchool = "La 'Ciudad' es requerida";
  }

  if (!form.emailSchool.trim()) {
    errors.emailSchool = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.emailSchool.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.phoneSchool) errors.phoneSchool = "Se requiere número telefónico";
  else if (/(?=[^0-9])/.test(form.phoneSchool))
    errors.phoneSchool = "Teléfono debe ser solo números";

  if (!form.teacher) errors.teacher = "El nombre del profesor es requerido";
  

  return errors;
};

const FormSchool = () => {
  const dispatch = useDispatch();
  const continueForm = useSelector((state) => state.continueForm);
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );


  const open = () => {
    dispatch(actions.closeModalSchool());
    dispatch(actions.openAbstract());
  };

  return (
    <div className={styles.containerFormUsers}>
      <h3>Datos Escolares</h3>
      <form onSubmit={handleSubmit} className={styles.formUsers}>
        <input
          className={
            errors.nameSchool ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.nameSchool ? `${errors.nameSchool}` : "Escribe el nombre del colegio"
          }
          name="nameSchool"
          value={form.nameSchool}
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="citySchool"
          value={form.citySchool}
          className={
            errors.citySchool ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={errors.citySchool ? `${errors.citySchool}` : "Escribe la Ciudad"}
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="emailSchool"
          value={form.emailSchool}
          className={
            errors.emailSchool ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.emailSchool ? `${errors.emailSchool}` : "Escribe el email del colegio"
          }
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="phoneSchool"
          value={form.phoneSchool}
          className={
            errors.phoneSchool ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.phoneSchool ? `${errors.phoneSchool}` : "Número telefónico del colegio"
          }
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="teacher"
          value={form.teacher}
          className={
            errors.teacher ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.teacher
              ? `${errors.teacher}`
              : "Escribe el nombre del profesor@"
          }
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {!form.nameSchool ||
          errors.nameSchool ||
          errors.citySchool ||
          errors.emailSchool ||
          errors.phoneSchool ||
          errors.teacher || (
            <input
              className={styles.submitForm}
              type="submit"
              value="Guardar Información"
            />
          )}
      </form>
      {continueForm && (
        <button onClick={open} className={styles.submitForm}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default FormSchool;
