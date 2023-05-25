import React, { useState } from 'react'

import { FieldDefaultProps, FieldProps } from '../../types'

function NumberField({ name, initialValue, fieldId, onChange }: FieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }

  return (
    <input
      type="number"
      name={name}
      data-field-id={fieldId}
      className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
      value={value}
      onChange={handleChange}
    />
  )
}

NumberField.defaultProps = FieldDefaultProps

export default NumberField
