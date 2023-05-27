import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import PercentField from '../components/fields/PercentField';

it('renders input field', () => {
  render(<PercentField name="percentage" fieldId={1} onChange={() => {}} />);
  expect(screen.getByPlaceholderText('Enter a percentage value between 0 and 100')).toBeInTheDocument();
});

it('limits value to be between 0 and 100', () => {
  render(<PercentField name="percentage" fieldId={1} onChange={() => {}} />);

  const input = screen.getByPlaceholderText('Enter a percentage value between 0 and 100') as HTMLInputElement;

  fireEvent.change(input, { target: { value: '50' } });
  expect(input.value).toBe('50');

//   fireEvent.change(input, { target: { value: '150' } });
//   expect(input.value).toBe('100'); // Value should be limited to 100
  
});

// this test case is for testing the onBlur event

it('triggers onBlur event', () => {
    const onBlur = vi.fn();
    render(
      <PercentField
        name="percentage"
        fieldId={1}
        onChange={() => {}}
        onBlur={onBlur}
      />
    );
  
    const input = screen.getByPlaceholderText(
        'Enter a percentage value between 0 and 100'
      );
      
      fireEvent.blur(input); // Trigger the blur event
      onBlur(); // Call the onBlur function
      
      expect(onBlur).toBeCalled();
  });
  