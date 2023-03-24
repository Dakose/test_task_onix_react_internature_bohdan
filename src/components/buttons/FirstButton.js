import React from 'react';
import PropTypes from 'prop-types';
import './FirstButton.scss';

export const FirstButton = ({
  text, variant, disabled, onClick,
}) => (
  <button type="button" disabled={disabled} className={`button ${variant} ${disabled ? 'disabled' : ''}`} onClick={onClick}>
    <span>{text}</span>
  </button>
);
