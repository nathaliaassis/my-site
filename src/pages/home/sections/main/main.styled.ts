import { styled } from "@/styles";
import { HashLink } from "react-router-hash-link";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$space2",

  div: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});

export const ArrowLink = styled(HashLink, {
  position: "absolute",
  left: "50%",
  bottom: "$space2",
  transform: "translateX(-50%)",

  svg: {
    color: "$lightBlue",
  },
});

export const Text = styled("span", {
  fontSize: "$sm",
  lineHeight: "1.5",
  color: "$fontLight",
  maxWidth: "50%",

  "@laptop": {
    fontSize: "$lg",
    lineHeight: "1.8",
  },
});

export const Name = styled("h1", {
  fontSize: "2rem",
  fontWeight: "500",
  lineHeight: "1.2",
  margin: "1rem 0",

  "@laptop": {
    fontSize: "4rem",
    lineHeight: "1.6",
  },
});
