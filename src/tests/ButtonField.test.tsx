import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from "vitest";


import Button from '../components/Button';

describe('Button component', () => {
    it('renders with the correct Tailwind CSS class', () => {
      const { getByText } = render(<Button>Click me</Button>);
      const button = getByText('Click me');
  
      expect(button).toHaveClass('bg-primary-600');
      expect(button).toHaveClass('disabled:bg-gray-300');
    });
  

  it('renders correctly with primary variant', () => {
    const { getByText } = render(
      <Button variant="primary">Click me</Button>
    );
    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600');
  });

  it('renders correctly with outline variant', () => {
    const { getByText } = render(
      <Button variant="outline">Click me</Button>
    );
    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('border-gray-300');
  });

  it('applies custom className', () => {
    const { getByText } = render(
      <Button className="custom-class">Click me</Button>
    );
    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('custom-class');
  });

  it('calls onClick callback when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByText('Click me');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders correctly when disabled', () => {
    const { getByText } = render(
      <Button disabled>Click me</Button>
    );
    const button = getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveClass('disabled:bg-gray-300');
  });
});
