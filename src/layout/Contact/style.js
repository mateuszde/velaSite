import styled from "styled-components";

export const Wrapper = styled.div`
  width: 800px;
  display: flex;
  gap: 60px;
  margin: 40px auto;
  background-color: #fff;
  border-radius: 25px;

  @media (max-width: 900px) {
    width: 100%;
    gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background-color: transparent;
  }
`;
export const ImageWrapper = styled.div`
  border-radius: 25px;
  box-shadow: rgba(3, 98, 76, 0.3) 0 4px 9px;

  overflow: hidden;
  height: 350px;
  width: 300px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  font-size: 20px;
  margin-right: 20px;

  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
`;

export const NameWrapper = styled.div`
  margin-bottom: 20px;
  & div {
    margin-top: 10px;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ light, theme }) => (light ? theme.colors.white : "inherit")};
  font-weight: 300;
`;

export const StyledLink = styled.a`
  color: ${({ light, theme }) => (light ? theme.colors.white : "inherit")};
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 0.05em;
  font-weight: 300;
`;
