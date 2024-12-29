import React from 'react';

import PropTypes from 'prop-types';

export const DocButton = ({ mode, label, disabled, icon: Icon, hasLeftIcon, hasRightIcon, extraColor, size, padding, rounded, type, onClick }) => {
    const bgColor = modeToBgColor[mode] || '';
    const fillColor = modeToIconFillColor[mode] || extraColor;

  return (
    <button 
        className={`${bgColor} ${padding} ${rounded} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
    >
        <div className="flex items-center justify-center gap-4">
            {hasLeftIcon && Icon && (
              <Icon className={`${fillColor} ${size}`} />
            )}
            <span className={`${fillColor} whitespace-nowrap`}>
              {label}
            </span>
            {hasRightIcon && Icon && (
              <Icon className={`${fillColor} ${size}`} />
            )}
          </div>
    </button>
  );
};

const modeToBgColor = {
  main: 'bg-purpleInfo text-light',
  error: 'bg-redInfo text-light',
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
  transparent: '',
};

const modeToIconFillColor = {
    dark: 'text-fill-light',
    light: 'text-fill-dark',
    transparent: 'text-fill-blueInfo text-blueInfo',
  };


DocButton.propTypes = {
    mode: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.boolean,
    icon: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    hasRightIcon: PropTypes.bool,
    extraColor: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.string,
    type: PropTypes.string,

    onClick: PropTypes.func,
};

DocButton.defaultProps = {
    mode: 'dark',
    label: 'click me',
    disabled: false,
    icon: '',
    hasLeftIcon: false,
    hasRightIcon: false,
    extraColor: '',
    size: 'w-6 h-6',
    padding: 'py-2 px-4',
    rounded: 'rounded-md',
    type: 'button',
    onClick: undefined,
};
