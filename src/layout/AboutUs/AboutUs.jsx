import ContainerWidth from "../../components/ContainerWidth/ContainerWidth";
import TextWithChildrenComponent from "../../components/TextWithChildrenComponent/TextWithChildrenComponent";
import Paragraph from "../../components/Paragraph/Paragraph";
import logo from "../../assets/Logo/VelaLogoBlack.svg";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
  & div:first-child {
    width: 50%;
  }

  &div:last-child {
    width: 40%;
  }
`;

const LogoWrapper = styled.div`
  height: 120px;

  & img {
    height: 100%;
    width: auto;
  }
`;

const AboutUs = () => {
  return (
    <ContainerWidth>
      <TextWithChildrenComponent
        title="O nas"
        subtitle="Vela Group Sp. z o.o."
        text="Jesteśmy firmą deweloperską tworzoną przez zespół doświadczonych specjalistów z ponad 30-letnim stażem w branży budowlanej. Naszą misją jest realizacja inwestycji, które łączą najwyższą jakość wykonania z dbałością o relacje – zarówno z klientami, jak i partnerami biznesowymi."
      >
        <Wrapper>
          <div>
            <Paragraph>
              Dzięki wieloletniemu doświadczeniu oraz dogłębnej znajomości rynku
              tworzymy przestrzenie, które nie tylko spełniają oczekiwania
              przyszłych mieszkańców, ale także podnoszą standard życia.
              Stawiamy na solidność, terminowość oraz indywidualne podejście do
              każdej realizacji.
            </Paragraph>
            <Paragraph>
              W Vela Group wierzymy, że fundamentem sukcesu są trwałe relacje
              oparte na zaufaniu i profesjonalizmie. Każdy projekt to dla nas
              nie tylko inwestycja, ale także zobowiązanie do dostarczania
              rozwiązań, które zachwycają funkcjonalnością i estetyką.
            </Paragraph>
          </div>
          <LogoWrapper>
            <img src={logo} alt="Logo VelaGroup" />
          </LogoWrapper>
        </Wrapper>
      </TextWithChildrenComponent>
    </ContainerWidth>
  );
};

export default AboutUs;
