import styled from "styled-components"

const LinksNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 4rem;
`

const Ahref = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  text-shadow: 0.2rem 0.2rem black;
  transition: color 0.2s ease-in-out;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 900;

  &:hover {
    color: #c7b9b9;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &:after {
    content: "";
    width: 0;
    position: absolute;
    height: 0.4rem;
    left: 50%;
    bottom: -0.7rem;
    background: purple;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
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
  return (
    <LinksNav>
      {links.map((link, index) => (
        <li key={index}>
          <Ahref key={index} href={link.rota}>
            {link.nameLink}
          </Ahref>
        </li>
      ))}
    </LinksNav>
  )
}

export default NavLinks
