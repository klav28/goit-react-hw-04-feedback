import React from 'react';
import PropTypes from 'prop-types';
import StyledFeedback from './FeedbackOptions.components';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <StyledFeedback>
    {options.map(btn => (
      <StyledFeedback.Btn
        key={btn}
        type="button"
        onClick={onLeaveFeedback}
        name={btn}
      >
        {btn}
      </StyledFeedback.Btn>
    ))}
  </StyledFeedback>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
