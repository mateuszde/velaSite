import { useEffect } from "react";
import { Wrapper, TitleWrapper, Title } from "./style";

import TextColor from "../TextColor/TextColor";
import SubTitle from "../SubTitle/SubTitle";
import Paragraph from "../Paragraph/Paragraph";

import AOS from "aos";
import "aos/dist/aos.css";

const TextWithChildrenComponent = ({ id, title, text, children, subtitle }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Wrapper id={id}>
      <TitleWrapper data-aos="fade-up">
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
