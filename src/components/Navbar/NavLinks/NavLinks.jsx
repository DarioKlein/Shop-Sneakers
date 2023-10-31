/* eslint-disable no-unused-vars */
import styled, { keyframes } from "styled-components"
import menuSVG from "../assets/menu.svg"
import close from "../assets/close.svg"
import "./css/style.css"
import { useState } from "react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`


const LinksNav = styled(({ isopen, ...rest }) => <ul {...rest} />)`
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    display: ${(props) => (props.isopen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    left: 0;
    width: 100vw;
    min-height: 30rem;
    background-color: #ff8800;
    top: 8.3rem;
    gap: 3rem;
    padding-top: 2rem;
    padding-left: 4rem;
    align-items: flex-start;
    animation: ${(props) => (props.isopen ? fadeIn : "none")} 0.5s ease-in-out;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgb(221, 200, 10);
      top: 0;
      left: 0;
      z-index: -1;
      animation: ${(props) => (props.isopen ? fadeIn : "none")} 1s ease-in-out;
    }
  }
`

const Ahref = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  text-shadow: 0.2rem 0.2rem 0.2rem black;
  transition: color 0.2s ease-in-out;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 900;

  &:hover {
    color: #c7b9b9;
  }

  &:hover:after {
    bottom: -2.65rem;
  }

  &:after {
    content: "";
    width: 100%;
    position: absolute;
    height: 0.6rem;
    left: 0;
    bottom: -3.5rem;
    background: purple;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 1000px) {
    font-size: 1.5rem;

    &:after {
      width: 0;
    }
  }

  @media (max-width: 900px) {
    font-size: 1.7rem;
  }
`

const ButtonLinks = styled.button`
  display: none;
  width: 4rem;
  height: 4rem;

  @media (max-width: 900px) {
    display: flex;
  }
`
const links = [
  { nameLink: "Início", rota: "/" },
  { nameLink: "Adidas", rota: "/adidas" },
  { nameLink: "Nike", rota: "/nike" },
  { nameLink: "Puma", rota: "/puma" },
  { nameLink: "Suporte", rota: "/suporte" },
]

function NavLinks() {
  const [isopen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isopen)
  }

  return (
    <>
      <LinksNav isopen={isopen}>
        {links.map((link, index) => (
          <li key={index}>
            <Ahref key={index} href={link.rota}>
              {link.nameLink}
            </Ahref>
          </li>
        ))}
      </LinksNav>
      <ButtonLinks onClick={handleClick}>
        <img className="burgerButton" src={isopen ? close : menuSVG} alt="" />
      </ButtonLinks>
    </>
  )
}

export default NavLinks
