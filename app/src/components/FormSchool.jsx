import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import actions from "../redux/actions";
import styles from "../styles/formUsers.module.css";

const initialForm = {
  name: "",
  city: "",
  email: "",
  phone: "",
  teacher: "",
  type: "school",
};

const validationsForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errors.name = "El 'Nombre' del colegio es requerido";
  }

  if (!form.city.trim()) {
    errors.city = "La 'Ciudad' es requerida";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.phone) errors.phone = "Se requiere número telefónico";
  else if (/(?=[^0-9])/.test(form.phone))
    errors.phone = "Teléfono debe ser solo números";

  if (!form.teacher) errors.phone = "Se requiere número de identificación";
  else if (/(?=[^0-9])/.test(form.phone))
    errors.teacher = "El nombre del profesor es requerido";

  return errors;
};

const FormSchool = () => {
  const dispatch = useDispatch();
  const continueForm = useSelector((state) => state.continueForm);
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  useEffect(() => {
    dispatch(actions.continueForm(false));
  }, []);

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
            errors.name ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.name ? `${errors.name}` : "Escribe el nombre del colegio"
          }
          name="name"
          value={form.name}
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="city"
          value={form.city}
          className={
            errors.city ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={errors.city ? `${errors.city}` : "Escribe la Ciudad"}
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="email"
          value={form.email}
          className={
            errors.email ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.email ? `${errors.email}` : "Escribe el email del colegio"
          }
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="phone"
          value={form.phone}
          className={
            errors.phone ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.phone ? `${errors.phone}` : "Número telefónico del colegio"
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

        {!form.name ||
          errors.name ||
          errors.city ||
          errors.email ||
          errors.phone ||
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
