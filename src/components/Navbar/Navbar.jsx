import styled from "styled-components"
import LogoTipo from "./LogoTipo/LogoTipo"
import NavLinks from "./NavLinks/NavLinks"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  min-height: 8rem;
  padding: 0 4rem;
  background-color: rgb(221, 200, 10);
  overflow: hidden;
  align-items: center;
  border-bottom: 0.2rem solid white;

  @media (max-width: 500px) {
    padding: 0 1.5rem;
  }
`


function Navbar() {
  return (
    <Nav>
      <LogoTipo></LogoTipo>
      <NavLinks></NavLinks>
    </Nav>
  )
}


export default Navbar
