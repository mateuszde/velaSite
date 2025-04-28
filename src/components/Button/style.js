import styled from "styled-components";

export const StyledNavButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  border-radius: 25px;
  box-shadow: rgba(3, 98, 76, 0.2) 0 4px 9px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  font-weight: bold;
  line-height: 1.5;
  transition: 0.2s ease-in-out;

  & p {
    margin: 0;
    font-size: 16px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const PrimaryButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  border-radius: 25px;
  box-shadow: rgba(3, 98, 76, 0.2) 0 4px 9px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  font-weight: bold;
  line-height: 1.5;
  transition: 0.2s ease-in-out;

  & p {
    margin: 0;
    font-size: 16px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

export const SecondaryButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  border-radius: 25px;
  box-shadow: rgba(3, 98, 76, 0.2) 0 4px 9px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 16px 24px;
  font-weight: bold;
  line-height: 1.5;
  transition: 0.2s ease-in-out;

  & p {
    margin: 0;
    font-size: 16px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
  }
`;

export const SmallButton = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  border-radius: 25px;
  box-shadow: rgba(3, 98, 76, 0.2) 0 4px 9px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  font-weight: bold;
  line-height: 1.5;
  transition: 0.2s ease-in-out;

  & p {
    margin: 0;
    font-size: 14px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;
