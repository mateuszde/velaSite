import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMap,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";

import image from "../../assets/DawidRoman.jpg";
import Line from "../../components/Line/Line";

import {
  Wrapper,
  ImageWrapper,
  ContactWrapper,
  ContactItem,
  IconWrapper,
  NameWrapper,
  StyledParagraph,
  StyledLink,
} from "./style.js";

const Contact = () => {
  return (
    <ContainerWidth>
      <TextWithChildrenComponent
        id="contact"
        title="Kontakt"
        subtitle="chcesz się dowiedzieć więcej?"
        text="Masz pytania lub potrzebujesz dodatkowych informacji? Skontaktuj się z nami, a odpowiemy na wszelkie wątpliwości!"
      >
        <Wrapper>
          <ImageWrapper>
            <img src={image} alt="zdjęcie Dawid Roman" />
          </ImageWrapper>
          <ContactWrapper>
            <NameWrapper>
              <h2>Dawid Roman</h2>
              <Line big />
            </NameWrapper>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMobileAlt} />
              </IconWrapper>
              <StyledLink href="tel:+48 555 555 555">
                +48 555 555 555
              </StyledLink>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMessage} />
              </IconWrapper>
              <StyledLink href="mailto:ten@domena.pl">ten@domena.pl</StyledLink>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMap} />
              </IconWrapper>
              <StyledParagraph>
                Nad Potokiem,
                <br />
                83-031 Żukczyn
              </StyledParagraph>
            </ContactItem>
          </ContactWrapper>
        </Wrapper>
      </TextWithChildrenComponent>
    </ContainerWidth>
  );
};

export default Contact;
