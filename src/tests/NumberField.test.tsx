import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import NumberField from '../components/fields/NumberField';

it('renders the number input', () => {
  render(
    <NumberField name="numberField" initialValue="" onChange={vi.fn()} fieldId={1} />
  );
  const numberInput = screen.getByPlaceholderText('Enter a number') as HTMLInputElement;
  expect(numberInput).toBeInTheDocument();
});

it('triggers onChange event on value change', () => {
  const onChangeMock = vi.fn();
  render(
    <NumberField name="numberField" initialValue="" onChange={onChangeMock} fieldId={1} />
  );
  const numberInput = screen.getByPlaceholderText('Enter a number') as HTMLInputElement;

  fireEvent.change(numberInput, { target: { value: '42' } });

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
});

it('renders with the initial value', () => {
  const initialValue = 10;
  render(
    <NumberField
      name="numberField"
      initialValue={initialValue.toString()} // Convert initialValue to string explicitly
      onChange={vi.fn()}
      fieldId={1}
    />
  );
  const numberInput = screen.getByPlaceholderText('Enter a number') as HTMLInputElement;

  expect(numberInput.value).toBe(initialValue.toString());
});
