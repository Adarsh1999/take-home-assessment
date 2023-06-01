import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar';
import { vi } from 'vitest';

describe('ProgressBar', () => {
  it('renders the progress bar with correct width and value', () => {
    const current = 2;
    const max = 10;
    const { getByTestId, getByText } = render(
      <ProgressBar current={current} max={max} />
    );
    const progressBar = getByTestId('progress-bar-element');
    const valueText = "20%";
 
    expect(progressBar).toHaveStyle({
      width: valueText,
    });
    expect(getByText(valueText)).toBeInTheDocument();
  });
}); 
