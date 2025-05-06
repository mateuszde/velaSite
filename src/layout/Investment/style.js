import styled from "styled-components";
export const MapWrapper = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin-top: 80px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 80px auto 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin: 24px 0;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 24px 0 84px 0;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  width: 100%;
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  padding-right: 40px;
  margin-top: 40px;

  & div {
    margin-top: 30px;
  }
`;
export const Gallery = styled.div`
  width: 600px;
  display: flex;
  /* flex-direction: center; */
  align-items: center;

  @media (max-width: 1140px) {
    margin: 50px 0;
  }

  @media (max-width: 768px) {
    width: 500px;
    overflow: hidden;
  }
`;

export const ListItem = styled.li`
  margin-left: 40px;
  margin-bottom: 20px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 7px;
    width: 7px;
    top: 50%;
    transform: translateY(-50%);
    left: -15px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ParagraphWrapper = styled.div`
  margin-bottom: 20px;
`;
