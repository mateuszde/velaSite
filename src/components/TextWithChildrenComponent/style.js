import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
  & p {
    max-width: 80%;
  }
`;

export const Title = styled.h2`
  position: relative;
  /* text-transform: uppercase; */
  font-size: 40px;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
  font-weight: 600;
`;
