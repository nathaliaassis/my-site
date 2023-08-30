import { useState, useRef, useEffect, TouchEvent } from "react";
import { HashLink } from "react-router-hash-link";
import {
  CloseButton,
  HeaderContainer,
  HomeLink,
  MenuList,
  Navbar,
  ResponsiveMenuButton,
} from "./header.styled";

function Header() {
  const responsiveMenuRef = useRef<HTMLUListElement | null>(null);

  const [menuIsOpened, setMenuIsOpened] = useState<boolean | null>();

  const isPageFirstLoad = typeof menuIsOpened === "boolean";

  return (
    <HeaderContainer>
      <Navbar>
        <HomeLink smooth to="#top">
          NA
        </HomeLink>
        <ResponsiveMenuButton
          type="button"
          onClick={() => setMenuIsOpened(true)}
        >
          {"</>"}
        </ResponsiveMenuButton>

        <MenuList
          ref={responsiveMenuRef}
          isOpened={isPageFirstLoad && menuIsOpened}
          isWindowFirstLoad={!isPageFirstLoad}
        >
          <CloseButton type="button" onClick={() => setMenuIsOpened(false)}>
            X
          </CloseButton>
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
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
