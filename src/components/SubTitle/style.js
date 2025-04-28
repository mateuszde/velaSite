import styled from "styled-components";

export const Title = styled.h2`
  font-size: 12px;
  margin-left: 50px;
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -45px;
    bottom: 50%;
    width: 30px;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
