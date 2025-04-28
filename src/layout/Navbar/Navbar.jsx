import { NavbarContainer, LogoWrapper, NavWrapper, StyledList } from "./style";
import Button from "../../components/Button/Button";
import logo from "../../assets/Logo/VelaLogoWhite.svg";
import { fetchFile } from "../../utilites/fetchFile";

const Navbar = () => {
  const handleDownload = (fileName) => {
    fetchFile(fileName);
  };
  return (
    <NavbarContainer>
      <NavWrapper>
        <LogoWrapper>
          <img src={logo} alt="Logo VelaGroup" />
        </LogoWrapper>
        <div>
          <StyledList>
            <li>
              <p>Lokalizacja</p>
            </li>
            <li>
              <p>O inwestycji</p>
            </li>
            <li>
              <p>Realizacje</p>
            </li>
            <li>
              <p>O nas</p>
            </li>
            <li>
              <p>Kontakt</p>
            </li>
            <li>
              <Button navigation>Skontaktuj się</Button>
            </li>
          </StyledList>
        </div>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
