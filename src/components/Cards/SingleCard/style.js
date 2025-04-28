import styled from "styled-components";

export const SingleCardWrapper = styled.div`
  /* height: 100px; */
  width: 30%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.02);

    & p {
      color: ${({ theme }) => theme.colors.white};
    }
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

  ${SingleCardWrapper}:hover & {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
