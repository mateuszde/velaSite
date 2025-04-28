import styled from "styled-components";
import Paragraph from "../../components/Paragraph/Paragraph";

const currentTime = new Date();
const getCurrentYear = () => currentTime.getFullYear();

const FooterWrapper = styled.footer`
  height: 60px;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const Wrapper = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <Paragraph>
          VelaGroup Sp. z o.o. © {getCurrentYear()}. Wszelkie prawa zastrzeżone.
        </Paragraph>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
