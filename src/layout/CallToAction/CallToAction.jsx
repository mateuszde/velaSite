import Button from "../../components/Button/Button";
import Paragraph from "../../components/Paragraph/Paragraph";
import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextColor from "../../components/TextColor/TextColor";
import TextBolder from "../../components/TextBolder/TextBolder";

import {
  Wrapper,
  ContainerWrapper,
  BackgroundImage,
  StyledHeading2,
  ButtonsWrapper,
} from "./style";
import image from "../../assets/Images/1_hr.jpg";

const CallToAction = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} />
      <ContainerWidth>
        <ContainerWrapper>
          <StyledHeading2>
            Jesteś zainteresowany <TextColor>?</TextColor>
          </StyledHeading2>
          <Paragraph light="true">
            <TextBolder>Vela Park</TextBolder> to wyjątkowe połączenie komfortu,
            nowoczesnych technologii i bliskości natury. To miejsce, w którym
            możesz stworzyć swój wymarzony dom. Skontaktuj się z nami i
            zarezerwuj swój dom już dziś!
          </Paragraph>
          <ButtonsWrapper>
            <Button primary>Zadzwoń teraz</Button>
          </ButtonsWrapper>
        </ContainerWrapper>
      </ContainerWidth>
    </Wrapper>
  );
};

export default CallToAction;
