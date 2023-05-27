import React from 'react';
import { classNames } from '../utils';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({
  variant, className, disabled, onClick, children,
}: ButtonProps) {
  const variantClassNames = {
    primary: 'bg-primary-600 text-white border-primary-600 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-500',
    outline: 'border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-600',
    default: '',
  };

  variantClassNames.default = variantClassNames.primary;

  return (
    <button
      type="button"
      className={classNames(
        'inline-block rounded-lg py-2 px-4 font-bold transition border-2',
        variantClassNames[variant || 'default'],
        (className || ''),
      )}
      onClick={onClick}
      disabled={disabled}
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
      }}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  className: '',
  disabled: false,
  onClick: () => { },
  children: undefined,
};

export default Button;
