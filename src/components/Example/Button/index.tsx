import React from 'react';

import './styles.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}

const Button: React.FC<IButtonProps> = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: 'null',
  primary: false,
  size: 'medium',
};

export default Button;
