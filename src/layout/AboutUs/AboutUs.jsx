import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -20px;
  max-width: 80%;
`;

const AboutUs = () => {
  return (
    <ContainerWidth>
      <TextWithChildrenComponent
        id="aboutUs"
        title="O nas"
        subtitle="Vela Group Sp. z o.o."
        text="Jesteśmy firmą deweloperską tworzoną przez zespół doświadczonych specjalistów z ponad 30-letnim stażem w branży budowlanej. Naszą misją jest realizacja inwestycji, które łączą najwyższą jakość wykonania z dbałością o relacje – zarówno z klientami, jak i partnerami biznesowymi."
      >
        <Wrapper>
          <Paragraph>
            Dzięki wieloletniemu doświadczeniu oraz dogłębnej znajomości rynku
            tworzymy przestrzenie, które nie tylko spełniają oczekiwania
            przyszłych mieszkańców, ale także podnoszą standard życia. Stawiamy
            na solidność, terminowość oraz indywidualne podejście do każdej
            realizacji.
          </Paragraph>
          <Paragraph>
            W Vela Group wierzymy, że fundamentem sukcesu są trwałe relacje
            oparte na zaufaniu i profesjonalizmie. Każdy projekt to dla nas nie
            tylko inwestycja, ale także zobowiązanie do dostarczania rozwiązań,
            które zachwycają funkcjonalnością i estetyką.
          </Paragraph>
        </Wrapper>
      </TextWithChildrenComponent>
    </ContainerWidth>
  );
};

export default AboutUs;
