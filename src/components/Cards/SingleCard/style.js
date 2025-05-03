import styled from "styled-components";
import { device } from "../../../device";

export const SingleCardWrapper = styled.div`
  width: 30%;
  height: 250px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.02);

    & p {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 1100px) {
    padding: 30px;
    width: 35%;
  }

  @media (max-width: 1000px) {
    width: 45%;
    height: 210px;
  }

  @media (max-width: 715px) {
    height: 230px;
  }

  @media (max-width: 650px) {
    width: 90%;
    justify-content: center;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  & h2 {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 10px;
    transition: all 0.3s ease-in-out;

    @media ${device.desktop} {
      font-size: 20px;
    }
  }

  ${SingleCardWrapper}:hover & {
    & h2 {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
export const IconWrapper = styled.div`
  min-height: 70px;
  min-width: 70px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  font-size: 32px;

  ${SingleCardWrapper}:hover & {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media ${device.desktop} {
    min-height: 50px;
    min-width: 50px;
    font-size: 24px;
  }
`;
