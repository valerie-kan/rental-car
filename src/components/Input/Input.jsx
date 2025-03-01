import { Field, ErrorMessage } from "formik";

import css from "./Input.module.css";

const Input = ({ name, placeholder }) => {
  return (
    <>
      <Field name={name} placeholder={placeholder} className={css.input} />
      <ErrorMessage name={name} component="span" className={css.error} />
    </>
  );
};

export default Input;
