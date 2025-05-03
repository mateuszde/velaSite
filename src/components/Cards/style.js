import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: -100px auto 0;
  padding: 60px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 1100px) {
    justify-content: space-around;
  }

  @media (max-width: 825px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 40px;
  }
`;
