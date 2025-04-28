import { Wrapper } from "./styled";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "../Button/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#03624c",
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
    <Wrapper>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nr.</StyledTableCell>
              <StyledTableCell align="center">Powierzchnia</StyledTableCell>
              <StyledTableCell align="center">Działka</StyledTableCell>
              <StyledTableCell align="center">Pokoje</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Plan domu</StyledTableCell>
              <StyledTableCell align="right">Cena [zł]</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.number}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.houseArea}
                </StyledTableCell>
                <StyledTableCell align="center">{row.plotArea}</StyledTableCell>
                <StyledTableCell align="center">{row.rooms}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.housePlan}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default RealEstateTable;
