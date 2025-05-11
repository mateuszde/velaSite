import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../Button/Button";
import RealEstateCard from "./RealEstateCard";
import TextColor from "../TextColor/TextColor";

import {
  CardsWrapper,
  TableWrapper,
  StyledTable,
  Thead,
  Th,
  Tr,
  Td,
} from "./StyleRealEstateTable";

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
    "~657 m2",
    5,
    <TextColor>Dostępny</TextColor>,
    <Button small downloadFile="PlanyA1.zip">
      Pobierz
    </Button>,
    "1 350 000"
  ),
  createData(
    "B1",
    "121,28 m2",
    "~350 m2",
    4,
    <TextColor>Dostępny</TextColor>,
    <Button small downloadFile="PlanyB1.zip">
      {" "}
      Pobierz
    </Button>,
    "950 000"
  ),
  createData(
    "B2",
    "121,28 m2",
    "~350 m2",
    4,
    "Rezerwacja",
    <Button small downloadFile="PlanyB2.zip">
      {" "}
      Pobierz
    </Button>,
    "950 000"
  ),
];

const RealEstateTable = () => {
  const [tableCardView, setTableCardView] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleCardView = () => {
    if (innerWidth < 730) {
      setTableCardView(true);
    } else {
      setTableCardView(false);
    }
  };

  window.addEventListener("scroll", handleCardView);

  return (
    <>
      {tableCardView && (
        <CardsWrapper>
          {rows.map((row) => (
            <RealEstateCard
              number={row.number}
              houseArea={row.houseArea}
              plotArea={row.plotArea}
              rooms={row.rooms}
              status={row.status}
              housePlan={row.housePlan}
              price={row.price}
            />
          ))}
        </CardsWrapper>
      )}
      {!tableCardView && (
        <TableWrapper data-aos="fade-up">
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
      )}
    </>
  );
};

export default RealEstateTable;
