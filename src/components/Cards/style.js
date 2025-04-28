import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: -160px auto 0;
  padding: 60px;
  position: relative; /* Add this line */
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
