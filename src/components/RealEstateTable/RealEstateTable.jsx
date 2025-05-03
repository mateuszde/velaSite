import Button from "../Button/Button";
import styled from "styled-components";

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

function createData(
  number,
  houseArea,
  plotArea,
  rooms,
  status,
  housePlan,
  price
) {
  return { number, houseArea, plotArea, rooms, status, housePlan, price };
}

const rows = [
  createData(
    "A1",
    "184,59 m2",
    "657 m2",
    5,
    "Dostępny",
    <Button small> Pobierz</Button>,
    "1 350 000"
  ),
  createData(
    "B1",
    "116,69 m2",
    "350 m2",
    4,
    "Dostępny",
    <Button small> Pobierz</Button>,
    "950 000"
  ),
  createData(
    "B2",
    "116,69 m2",
    "350 m2",
    4,
    "Rezerwacja",
    <Button small> Pobierz</Button>,
    "950 000"
  ),
];

const RealEstateTable = () => {
  return (
    <TableWrapper>
      <StyledTable>
        <Thead>
          <tr>
            <Th>Nr.</Th>
            <Th>Powierzchnia</Th>
            <Th>Działka</Th>
            <Th>Pokoje</Th>
            <Th>Status</Th>
            <Th>Plan domu</Th>
            <Th>Cena [zł]</Th>
          </tr>
        </Thead>
        <tbody>
          {rows.map((row, index) => (
            <Tr key={row.number} even={index % 2 === 0}>
              <Td>{row.number}</Td>
              <Td>{row.houseArea}</Td>
              <Td>{row.plotArea}</Td>
              <Td>{row.rooms}</Td>
              <Td>{row.status}</Td>
              <Td>{row.housePlan}</Td>
              <Td>{row.price}</Td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default RealEstateTable;
