import Paragraph from "../Paragraph/Paragraph";
import { Wrapper, TitleWrapper, Title } from "./style";
import TextColor from "../TextColor/TextColor";
import SubTitle from "../SubTitle/SubTitle";

const TextWithChildrenComponent = ({ title, text, children, subtitle }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SubTitle>{subtitle}</SubTitle>
        <Title>
          {title} <TextColor size="60px">.</TextColor>
        </Title>
        <Paragraph>{text}</Paragraph>
      </TitleWrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default TextWithChildrenComponent;
