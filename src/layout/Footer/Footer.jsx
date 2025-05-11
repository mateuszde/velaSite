import styled from "styled-components";
import Paragraph from "../../components/Paragraph/Paragraph";

const currentTime = new Date();
const getCurrentYear = () => currentTime.getFullYear();

const FooterWrapper = styled.footer`
  min-height: 100px;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const Wrapper = styled.div`
  max-width: 1400px;
  padding: 40px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  & h4 {
    margin-bottom: 24px;
  }
`;

const CopyrightWrapper = styled.div`
  margin-top: 46px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <TextWrapper>
          <h4>Dane rejestrowe:</h4>
          <Paragraph>VELA GROUP Sp. z o.o.</Paragraph>
          <Paragraph>ul. Fryderyka Chopina 38/7</Paragraph>
          <Paragraph>83-000 Pruszcz Gdański</Paragraph>
          <Paragraph>NIP: 6040224536</Paragraph>
        </TextWrapper>

        <CopyrightWrapper>
          <Paragraph>
            VelaGroup Sp. z o.o. © {getCurrentYear()}. Wszelkie prawa
            zastrzeżone.
          </Paragraph>
        </CopyrightWrapper>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
