import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FieldDefaultProps, FieldProps } from '../../types';

function PercentField({ name, initialValue, fieldId, onChange }: FieldProps) {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    [name]: Yup.number()
      .min(0, 'Number must be greater than or equal to 0')
      .max(100, 'Number must be less than or equal to 100')
      .required('Number is required')
  });

  // Initialize formik for form management
  const formik = useFormik({
    initialValues: {
      [name]: initialValue
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission if needed
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="number"
        name={name}
        data-field-id={fieldId}
        className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none my-3" // Added 'my-3' class for vertical margin
        onChange={(e) => {
          formik.handleChange(e);
          onChange(e);
        }}
        onBlur={formik.handleBlur}
        placeholder="Enter a percentage value between 0 and 100"
      />

      {/* Display error message if the field is touched and has an error */}
      {formik.touched[name] && formik.errors[name] ? (
        <div>{formik.errors[name]}</div>
      ) : null}
    </form>
  );
}

// Set default props for the PercentField component
PercentField.defaultProps = FieldDefaultProps;

export default PercentField;
