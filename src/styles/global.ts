import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
  },

  " ol, ul": {
    listStyle: "none",
  },

  "html, body": {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray900",
    color: "$gray100",
    height: "100%",

    "#root": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    },
  },

  "body, input, textarea, button, span, h1, h2, p": {
    fontFamily: "Montserrat",
    fontWeight: 400,
    letterSpacing: "0.2rem",
  },
});
