import Button from "../Button/Button";
import { TableWrapper, StyledTable, Thead, Th, Tr, Td } from "./styled";

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
