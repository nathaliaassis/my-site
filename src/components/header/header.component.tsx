import { HashLink } from "react-router-hash-link";
import { HeaderContainer, HomeLink, MenuList } from "./header.styled";

function Header() {
  return (
    <HeaderContainer>
      <HomeLink>
        <HashLink smooth to="#top">
          NA
        </HashLink>
      </HomeLink>
      <MenuList>
        <li>
          <HashLink smooth to="#about">
            Sobre
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#technologies">
            Tecnologias
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#experiences">
            Experiência
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact">
            Contato
          </HashLink>
        </li>
      </MenuList>
    </HeaderContainer>
  );
}

export default Header;
