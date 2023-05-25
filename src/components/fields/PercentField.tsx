import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FieldDefaultProps, FieldProps } from '../../types'

function PercentField({ name, initialValue, fieldId, onChange }: FieldProps) {
  const validationSchema = Yup.object().shape({
    [name]: Yup.number()
      .min(0, 'Number must be greater than or equal to 0')
      .max(100, 'Number must be less than or equal to 100')
      .required('Number is required')
  })

  const formik = useFormik({
    initialValues: {
      [name]: 0
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(formik.errors, 'eerors', formik, formik.values, 'name ', name)

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="number"
        name={name}
        data-field-id={fieldId}
        className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
        onChange={(e) => {
          formik.handleChange(e)
          onChange(e)
        }}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div>{formik.errors[name]}</div>
      ) : null}
    </form>
  )
}

PercentField.defaultProps = FieldDefaultProps

export default PercentField
