import { StyledParagraph } from "./style";
const Paragraph = ({ children, light }) => {
  return <StyledParagraph light={light}>{children}</StyledParagraph>;
};

export default Paragraph;
