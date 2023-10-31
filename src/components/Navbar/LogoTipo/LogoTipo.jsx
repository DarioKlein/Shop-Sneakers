import styled from "styled-components"
import logoSVG from "../assets/logo.svg"

const ImgLogo = styled.img`
  width: 10rem;

  @media (max-width: 500px) {
    width: 8.5rem;
  }
`

const Logotipo = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const LogoTitulo = styled.h2`
  text-shadow: 0.35rem 0.35rem purple;
  font-family: "Montserrat", sans-serif;
  font-size: 2.7rem;
  color: white;

  @media(max-width: 1000px) {
    font-size: 2.2rem;
  }
`

function LogoTipo() {
  return (
    <Logotipo>
      <ImgLogo src={logoSVG}></ImgLogo>
      <LogoTitulo>Shop <br></br> Sneakers</LogoTitulo>
    </Logotipo>
  )
}

export default LogoTipo
