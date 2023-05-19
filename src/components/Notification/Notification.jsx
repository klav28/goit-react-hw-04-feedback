import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <div>
    <h3>{message}</h3>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
