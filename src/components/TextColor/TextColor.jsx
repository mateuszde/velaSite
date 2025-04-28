import styled from "styled-components";

const TextColorWrapper = styled.span`
  color: ${({ colorHEX, theme }) =>
    colorHEX ? colorHEX : theme.colors.primary};
  font-size: ${({ size }) => (size ? size : "inherit")};
`;

const TextColor = ({ children, colorHEX, size }) => {
  return (
    <TextColorWrapper colorHEX={colorHEX} size={size}>
      {children}
    </TextColorWrapper>
  );
};

export default TextColor;
