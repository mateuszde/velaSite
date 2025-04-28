import styled from "styled-components";

export const SquareWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 25px;
  height: 25px;
  margin-left: 10px;
  transform: translateY(-50%);
`;
