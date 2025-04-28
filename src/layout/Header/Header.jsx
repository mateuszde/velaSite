import Line from "../../components/Line/Line";
import TextColor from "../../components/TextColor/TextColor";
import Button from "../../components/Button/Button";
import image from "../../assets/HeroImage.jpg";

import {
  Wrapper,
  LinearGradient,
  ContentWrapper,
  TitleWrapper,
  BackgroundImage,
  ButtonsWrapper,
  StyledParagraph,
} from "./style";

const Header = () => {
  return (
    <Wrapper>
      <BackgroundImage src={image} />
      <LinearGradient />
      <ContentWrapper>
        <TitleWrapper>
          <h1>
            VELA <TextColor>PARK</TextColor> <br />
            TWÓJ NOWY DOM<TextColor>.</TextColor>
          </h1>
        </TitleWrapper>

        <Line big />

        <StyledParagraph>
          Vela Park to kameralna inwestycja zlokalizowana w Żukczynie, gmina
          Pruszcz Gdański, nad rzeką Kłodawa (dopływ Motławy o długości prawie
          34km). To miejsce stworzone dla tych, którzy cenią ciszę, bliskość
          natury oraz komfort nowoczesnego budownictwa.
        </StyledParagraph>

        <ButtonsWrapper>
          <Button primary>Skontaktuj się</Button>
          <Button secondary>Poznaj ofertę</Button>
        </ButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
