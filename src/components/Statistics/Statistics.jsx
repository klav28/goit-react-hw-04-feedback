import React from 'react';
import StyledStatistics from './Statistics.components';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <StyledStatistics.Table>
      <thead>
        <tr>
          <StyledStatistics.Th>Good:</StyledStatistics.Th>
          <StyledStatistics.Th>Neutral:</StyledStatistics.Th>
          <StyledStatistics.Th>Bad:</StyledStatistics.Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <StyledStatistics.Td>{good}</StyledStatistics.Td>
          <StyledStatistics.Td>{neutral}</StyledStatistics.Td>
          <StyledStatistics.Td>{bad}</StyledStatistics.Td>
        </tr>
      </tbody>
    </StyledStatistics.Table>
    <StyledStatistics.P>Total: {total}</StyledStatistics.P>
    <StyledStatistics.P>Positive: {positivePercentage}%</StyledStatistics.P>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
