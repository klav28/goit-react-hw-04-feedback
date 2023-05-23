import StyledSection from './Section.components';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <h2>{title}</h2>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
