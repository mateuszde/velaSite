import Line from "../../components/Line/Line";
import TextColor from "../../components/TextColor/TextColor";
import Button from "../../components/Button/Button";
import image from "../../assets/Images/Grubby1.jpg";
import { StyledNavHashLink } from "./style";

import styled from "styled-components";
import video from "../../assets/HeroVideo.mp4";

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  object-position: 10% 30%;
`;

import {
  Wrapper,
  LinearGradient,
  ContentWrapper,
  TitleWrapper,
  BackgroundImage,
  ButtonsWrapper,
  StyledParagraph,
} from "./style";

const Header = ({ subpage }) => {
  return (
    <Wrapper subpage={subpage}>
      {subpage && <BackgroundImage src={image} />}
      {!subpage && <StyledVideo src={video} autoPlay loop muted playsInline />}
      <LinearGradient />
      <ContentWrapper>
        <TitleWrapper>
          {!subpage && (
            // <h1>
            //   VELA <TextColor>PARK</TextColor> <br />
            //   TWÓJ NOWY DOM<TextColor>.</TextColor>
            // </h1>
            <h1>
              DOMY NAD <TextColor>POTOKIEM</TextColor>.
            </h1>
          )}
          {subpage && (
            <h1>
              DOMY <TextColor>GRUBBY</TextColor> .
            </h1>
          )}
        </TitleWrapper>

        <Line big />

        {!subpage && (
          <StyledParagraph>
            Domy Nad Potokiem to kameralna inwestycja zlokalizowana w Żukczynie,
            gmina Pruszcz Gdański, nad rzeką Kłodawa (dopływ Motławy o długości
            prawie 34km). To miejsce stworzone dla tych, którzy cenią ciszę,
            bliskość natury oraz komfort nowoczesnego budownictwa.
          </StyledParagraph>
        )}

        {subpage && (
          <>
            <StyledParagraph>
              Domy Grubby to kameralne osiedle domów jednorodzinnych,
              zrealizowane przez Vela Group w malowniczej okolicy Trąbek Małych.{" "}
            </StyledParagraph>
            <StyledParagraph>
              To idealne miejsce dla osób szukających harmonii między spokojem
              natury a bliskością aglomeracji Trójmiejskiej.
            </StyledParagraph>
          </>
        )}
        {!subpage && (
          <ButtonsWrapper>
            <StyledNavHashLink to="#contact">
              <Button primary>Skontaktuj się</Button>
            </StyledNavHashLink>
            <StyledNavHashLink to="#investment">
              <Button secondary>Poznaj ofertę</Button>
            </StyledNavHashLink>
          </ButtonsWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
