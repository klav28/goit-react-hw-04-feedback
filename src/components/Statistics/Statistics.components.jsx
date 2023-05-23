import styled from 'styled-components';

const StyledStatistics = styled.div`
  display: flex;
  gap: 10px;

  margin: 0 auto;
  padding: 20px;
`;

StyledStatistics.Table = styled.table`
  width: 100%;
  font-size: 24px;
  text-align: center;
`;

StyledStatistics.Th = styled.th`
  background-color: teal;
  width: 30%;
  color: white;
  padding: 15px;
`;

StyledStatistics.Td = styled.td`
  background-color: white;
  color: black;
  padding: 15px;
`;

StyledStatistics.P = styled.p`
  font-size: 30px;
  text-align: center;
`;

export default StyledStatistics;
