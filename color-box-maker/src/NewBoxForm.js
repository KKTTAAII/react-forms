import React from "react";
import { Formik } from "formik";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  return (
    <Formik
      initialValues={{ width: 0, height: 0, color: "" }}
      validate={values => {
        const errors = {};
        if (!values.width) {
          errors.width = "Width is required";
        } else if (!values.height) {
          errors.height = "Height is required";
        } else if (!values.color) {
          errors.color = "Color is required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          addBox(values);
          values.width = 0;
          values.height = 0;
          values.color = "";
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="NewBoxForm-container">
          <form onSubmit={handleSubmit} className="NewBoxForm-form">
            <label htmlFor="width">Width:</label>
            <input
              id="width"
              type="number"
              name="width"
              value={values.width}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            {errors.width && touched.width ? (
              <div className="NewBoxForm-err">{errors.width}</div>
            ) : null}
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="number"
              name="height"
              value={values.height}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            {errors.height && touched.height ? (
              <div className="NewBoxForm-err">{errors.height}</div>
            ) : null}
            <label htmlFor="color">Color:</label>
            <input
              id="color"
              type="text"
              name="color"
              value={values.color}
              placeholder="red"
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            {errors.color && touched.color ? (
              <div className="NewBoxForm-err">{errors.color}</div>
            ) : null}
            <button type="submit" disabled={isSubmitting} className="NewBoxForm-btn">
              Make a box!
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default NewBoxForm;
