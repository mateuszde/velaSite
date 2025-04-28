import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  padding: 1rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
`;

export const NavWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  /* justify-content: space-between; */
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 60px;

  & img {
    height: 100%;
    width: auto;
    cursor: pointer;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  text-transform: capitalize;
  list-style: none;

  & p {
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & li:last-child {
    margin-left: 30px;
  }
`;
