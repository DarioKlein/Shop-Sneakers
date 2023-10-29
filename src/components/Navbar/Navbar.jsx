import styled from "styled-components"
import LogoTipo from "./LogoTipo/LogoTipo"
import NavLinks from "./NavLinks/NavLinks"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  min-height: 8rem;
  padding: 0 6rem;
  background-color: rgb(221, 200, 10);
  overflow: hidden;
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
