import { keyframes, styled, theme } from "../../styles";
import { HashLink } from "react-router-hash-link";

export const HeaderContainer = styled("header", {
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  background: `linear-gradient(to right, ${theme.colors.darkblue1}, ${theme.colors.darkBlue2})`,
  padding: "$space1 $space2",
  zIndex: 5,

  "@tablet": {
    padding: "$space1 $space2",
  },

  "@laptop": {
    height: "100px",
    padding: "0 10rem",
  },
});
export const HomeLink = styled(HashLink, {
  fontSize: "$xl",
  fontWeight: "500",
  background: `-webkit-linear-gradient(${theme.colors.lightGreen}, ${theme.colors.lightBlue})`,
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

export const Navbar = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const siderBarWidth = "225px";

const showUp = keyframes({
  "0%": { width: 0 },
  "100%": { width: siderBarWidth },
});

const hideUp = keyframes({
  "0%": { width: siderBarWidth },
  "100%": {
    width: 0,
  },
});

export const MenuList = styled("ul", {
  background: "$white",
  padding: "$space2 $space1",
  borderTopLeftRadius: "1rem",
  borderBottomLeftRadius: "1rem",
  position: "absolute",
  top: 0,

  right: "-32px",
  height: "100vh",

  li: {
    height: "2rem",
  },

  variants: {
    isWindowFirstLoad: {
      true: {
        display: "none",
      },
    },
    isOpened: {
      true: {
        display: "initial",
        animation: `${showUp} ease-in .5s forwards`,
      },
      false: {
        animation: `${hideUp} ease-in .5s forwards`,
      },
    },
  },

  a: {
    fontSize: "$sm",
    textDecoration: "none",
    transition: "all .2s ease-in-out",
    color: "$darkBlue2",

    "&:hover": {
      filter: "brightness(0.8)",
    },
  },

  "@desktop": {
    position: "relative",
    background: "transparent",
    padding: 0,
    animation: "none !important",
    height: "initial",

    display: "flex !important",
    flexDirection: "row",
    alignItems: "center",
    gap: "$space1",

    a: {
      fontSize: "$md",
      color: "$fontLight",
    },
  },
});

export const ResponsiveMenuButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "2px solid $fontLight",
  borderRadius: "8px",
  backgroundColor: "transparent",
  height: "2.5rem",
  width: "2.5rem",
  cursor: "pointer",
  letterSpacing: 0,

  fontWeight: "bolder",
  color: "$fontLight",

  "&:hover": {
    transition: ".5s ease-in-out",
    filter: "brightness(0.8)",
    backgroundColor: "$fontLight",
    color: "$darkBlue2",
  },

  "@desktop": {
    display: "none",
  },
});

export const CloseButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "transparent",
  border: "2px solid $darkBlue2",
  height: "2rem",
  width: "2rem",
  borderRadius: ".5rem",
  cursor: "pointer",

  color: "$darkBlue2",
  fontWeight: "bolder",
  letterSpacing: 0,
  marginBottom: "1rem",

  "&:hover": {
    backgroundColor: "$darkBlue2",
    transition: "all .2s ease-in-out",
    color: "$white",
  },

  "@desktop": {
    display: "none",
  },
});
