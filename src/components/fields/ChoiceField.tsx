import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { FieldProps, FieldDefaultProps } from '../../types';
import { classNames } from '../../utils';

interface ChoiceFieldProps extends FieldProps {
  options: string[];
}

function ChoiceField({
  name,
  initialValue,
  fieldId,
  options,
  onChange
}: ChoiceFieldProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="grid grid-cols-4 items-stretch gap-5 my-3">
      {/* Render each option as a button */}
      {options?.map((option) => (
        <button
          type="button"
          name={name}
          key={nanoid()} // Generate a unique key for each option
          data-field-id={fieldId}
          className={classNames(
            'inline-block rounded-lg border-2 bg-white p-5 text-center font-semibold text-gray-800 transition-colors',
            option === value
              ? 'border-primary-600 bg-primary-50' // Apply active styles if the option is selected
              : 'border-gray-300'
          )}
          onClick={() => {
            if (value === option) {
              setValue('');
              onChange({
                target: { name, value: '' }
              } as React.ChangeEvent<HTMLInputElement>);
            } else {
              setValue(option);
              onChange({
                target: {
                  name,
                  value: option,
                  dataset: { fieldId: fieldId.toString() }
                }
              } as unknown as React.ChangeEvent<HTMLInputElement>);
            }
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// Set default props for the ChoiceField component
ChoiceField.defaultProps = FieldDefaultProps;

export default ChoiceField;
