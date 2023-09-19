import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit'
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variation?: string;
  overrideStyles?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type='button', label, onClick, disabled = false, className = '', variation = 'primary', overrideStyles = false }) => {

  const getClasses = () => {
    let classList = 'px-6 py-3 rounded-md';

    if (overrideStyles === true) { return classList = ''}

    switch (variation) {
      case 'secondary':
        return `${classList} bg-yellow-500`;
      default:
        return `${classList} bg-[#392b8b] text-white`;
    }
  }



  return (
    <button
      type={type}
      className={`${getClasses()} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
