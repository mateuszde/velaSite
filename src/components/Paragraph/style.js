import styled from "styled-components";

export const StyledParagraph = styled.p`
  color: ${({ light, theme }) => (light ? theme.colors.white : "inherit")};
  margin-bottom: 10px;
`;
