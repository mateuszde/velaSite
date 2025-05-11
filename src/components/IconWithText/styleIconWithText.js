import styled from "styled-components";

export const Wrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IconWrapper = styled.div`
  height: 90px;
  width: 90px;
  font-size: 40px;

  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
export const TextWrapper = styled.div`
  text-transform: uppercase;

  & h3 {
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in-out;
    text-align: center;
  }
`;
