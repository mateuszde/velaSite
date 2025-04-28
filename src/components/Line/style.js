import styled from "styled-components";

export const LineWrapper = styled.div`
  height: ${({ size }) => (size ? "7px" : "2px")};
  width: ${({ size }) => (size ? "400px" : "50px")};
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;
