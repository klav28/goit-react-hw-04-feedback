import styled from 'styled-components';

const StyledFeedback = styled.div`
  display: flex;
  gap: 10px;
  width: 600px;
  margin: 0 auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  outline: solid 1px #cccccc;
`;

StyledFeedback.Btn = styled.button`
  width: 33%;
  padding: 20px;
  font-size: 36px;
`;

export default StyledFeedback;
