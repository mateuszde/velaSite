import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 100px;
  padding: 1rem 2rem;
  background-color: ${({ color }) =>
    color ? "rgba(241, 247, 247, 0.95)" : "transparent"};
  color: ${({ color, theme }) =>
    color ? theme.colors.black : theme.colors.white};

  box-shadow: ${({ color }) =>
    color ? "0 2px 4px 0 rgba(0, 0, 0, 0.2)" : "none"};

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding: 10px;
    height: 80px;
  }
`;

export const NavWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LogoWrapper = styled(NavHashLink)`
  height: 60px;

  & img {
    height: 100%;
    width: auto;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    height: 40px;
    margin-top: 10px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  text-transform: capitalize;
  list-style: none;

  @media (max-width: 1140px) {
    display: none;
  }
  & li:last-child {
    margin-left: 30px;
  }
`;

export const StyledNavHashLink = styled(NavHashLink)`
  text-decoration: none;
  color: inherit;
  text-transform: capitalize;
  font-weight: 200;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Burger = styled.div`
  width: 40px;
  height: 35px;
  overflow: hidden;
  position: absolute;
  top: 30px;
  right: 10px;
  transform: translateY(-50%);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;

  @media (max-width: 1140px) {
    display: flex;
  }

  & input {
    display: flex;
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide input */
    z-index: 3; /* top of the menu */
    &:checked ~ #span1 {
      transform: translateY(50%) rotate(45deg);
    }
    &:checked ~ #span2 {
      transform: translateX(-100%);
      opacity: 0;
    }
    &:checked ~ #span3 {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
  & span {
    width: 35px;
    height: 3px;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    background-color: ${({ color, theme }) =>
      color ? theme.colors.black : theme.colors.white};
  }
  & #span1 {
    transform: translateY(-10px);
  }
  & #span3 {
    transform: translateY(10px);
  }
`;
