import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: rgba(3, 98, 76, 0.2) 0 4px 9px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary}; /* zielony */
  color: white;
`;

export const Th = styled.th`
  padding: 16px;
  text-align: center;
`;

export const Tr = styled.tr`
  background-color: ${(props) => (props.even ? "#ffffff" : "#f5f5f5")};
  text-align: center;
`;

export const Td = styled.td`
  padding: 12px;
  border-top: 1px solid #eee;
`;
