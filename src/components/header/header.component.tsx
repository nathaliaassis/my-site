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

          {menuItems.map((menuItem) => (
            <li key={menuItem.path}>
              <HashLink
                smooth
                to={`#${menuItem.path}`}
                onClick={() => setMenuIsOpened(false)}
              >
                {menuItem.name}
              </HashLink>
            </li>
          ))}
        </MenuList>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;

const menuItems = [
  {
    path: "about",
    name: "Sobre",
  },
  {
    path: "technologies",
    name: "Tecnologias",
  },
  {
    path: "experiences",
    name: "Experiências",
  },
  {
    path: "contact",
    name: "Contato",
  },
];
