import {
  NavbarContainer,
  LogoWrapper,
  NavWrapper,
  StyledList,
  StyledNavHashLink,
  Burger,
  NavLinksWrapper,
} from "./style";
import { useState } from "react";
import Button from "../../components/Button/Button";
import logoWhite from "../../assets/Logo/VelaLogoWhite.svg";
import logoBlack from "../../assets/Logo/VelaLogoBlack.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [color, setColor] = useState(false);
  const checkbox = document.getElementById("checkbox");

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleTouch = () => {
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      handleToggle();
    }
  };

  const handleChangeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleChangeColor);

  return (
    <NavbarContainer color={color}>
      <NavWrapper>
        <LogoWrapper to="#">
          {!color && <img src={logoWhite} alt="Logo VelaGroup" />}
          {color && <img src={logoBlack} alt="Logo VelaGroup" />}
        </LogoWrapper>
        <NavLinksWrapper onClick={handleTouch}>
          <StyledList navbarOpen={navbarOpen}>
            <li>
              <StyledNavHashLink to="#location">Lokalizacja</StyledNavHashLink>
            </li>
            <li>
              <StyledNavHashLink to="#investment">
                O inwestycji
              </StyledNavHashLink>
            </li>
            <li>
              <p>Realizacje</p>
            </li>
            <li>
              <StyledNavHashLink to="#aboutUs">O nas</StyledNavHashLink>
            </li>
            <li>
              <StyledNavHashLink to="#contact">Kontakt</StyledNavHashLink>
            </li>
            <li>
              <Button navigation>Skontaktuj się</Button>
            </li>
          </StyledList>
        </NavLinksWrapper>
        <Burger color={color} onClick={handleToggle}>
          <input type="checkbox" id="checkbox" />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </Burger>
      </NavWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
