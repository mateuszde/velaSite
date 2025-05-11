import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const Wrapper = styled.header`
  min-height: ${({ subpage }) => (subpage ? "80vh" : "90vh")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

export const LinearGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7371323529411764) 7%,
    rgba(0, 0, 0, 0.639093137254902) 21%,
    rgba(0, 0, 0, 0.5298494397759104) 60%,
    rgba(0, 0, 0, 0) 85%
  );
`;

export const ContainerWrapper = styled.div`
  max-width: 650px;
  margin-top: 80px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-50px);
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* object-position: 50% 100%; */
  filter: brightness(95%);
`;

export const StyledHeading1 = styled.h1`
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;
  margin-top: 46px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  z-index: 1;
  margin-top: -80px;
  color: ${({ theme }) => theme.colors.white};

  width: 50%;

  & h1 {
    font-size: 70px;
    text-align: center;

    @media (max-width: 1150px) {
      font-size: 50px;
    }

    @media (max-width: 500px) {
      font-size: 40px;
    }

    @media (max-width: 400px) {
      font-size: 32px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -100px);
  }
`;

export const StyledParagraph = styled.p`
  margin: 24px 0;
  font-size: 22px;

  @media (max-width: 1150px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const StyledNavHashLink = styled(NavHashLink)`
  text-decoration: none;
  color: inherit;
  font-weight: 200;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1140px) {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
