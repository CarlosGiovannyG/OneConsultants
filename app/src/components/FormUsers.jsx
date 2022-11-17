import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import actions from "../redux/actions";
import styles from "../styles/formUsers.module.css";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  document: "",
  type:'user'
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.lastname.trim()) {
    errors.name = "El campo 'Apellido' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Apellido' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.phone) errors.phone = "Se requiere número telefónico";
  else if (/(?=[^0-9])/.test(form.phone))
    errors.phone = "Teléfono debe ser solo números";

  if (!form.document) errors.phone = "Se requiere número de identificación";
  else if (/(?=[^0-9])/.test(form.phone))
    errors.document = "La identificación debe ser solo números";

  return errors;
};

const FormUsers = () => {
  const continueForm = useSelector((state) => state.continueForm);
  const dispatch = useDispatch();

  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  const open = () => {
    dispatch(actions.closeModal());
    dispatch(actions.openModalSchool());
  };
  return (
    <div className={styles.containerFormUsers}>
      <h3>Datos Personales</h3>
      <form onSubmit={handleSubmit} className={styles.formUsers}>
        <input
          className={
            errors.name ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={errors.name ? `${errors.name}` : "Escribe tu nombre"}
          name="name"
          value={form.name}
          type="text"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="lastname"
          value={form.lastname}
          className={
            errors.lastname ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.lastname ? `${errors.lastname}` : "Escribe tu apellido"
          }
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
          placeholder={errors.email ? `${errors.email}` : "Escribe tu email"}
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
            errors.phone ? `${errors.phone}` : "Escribe tu número telefónico"
          }
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <input
          name="document"
          value={form.document}
          className={
            errors.document ? `${styles.inputError}` : `${styles.inputForm}`
          }
          placeholder={
            errors.document ? `${errors.document}` : "Escribe tu C. C."
          }
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {!form.name ||
          errors.document ||
          errors.name ||
          errors.lastname ||
          errors.phone ||
          errors.email || (
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

export default FormUsers;
