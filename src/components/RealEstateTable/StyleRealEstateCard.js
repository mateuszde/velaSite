import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
  padding: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const NumberTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 36px;
`;

export const StatusParagraph = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledParagraph = styled.p`
  margin: 16px 0;
`;

export const PlanWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
