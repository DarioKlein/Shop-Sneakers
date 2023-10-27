import styled from "styled-components"
import logoSVG from "../assets/logo.svg"
import PropTypes from "prop-types"

const ImgLogo = styled.img`
  width: 10rem;
`

const Logotipo = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-shadow: 0.35rem 0.35rem purple;
  font-family: "Montserrat", sans-serif;
`

function LogoTipo({ cor, size }) {
  return (
    <Logotipo>
      <ImgLogo src={logoSVG}></ImgLogo>
      <h2 style={{ color: cor, fontSize: size }}>Shop Sneakers</h2>
    </Logotipo>
  )
}

LogoTipo.propTypes = {
  cor: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}


export default LogoTipo
