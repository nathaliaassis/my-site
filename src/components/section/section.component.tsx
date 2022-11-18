import React from "react";
import { Container, Title } from "./section.styled";

interface SectionProps {
  themeColor?: "light" | "dark";
  children: React.ReactElement;
  id: string;
  title?: string;
}

function Section({ themeColor, children, id, title }: SectionProps) {
  return (
    <Container id={id} themeColor={themeColor}>
      {title && <Title themeColor={themeColor}>{title}</Title>}
      {children}
    </Container>
  );
}

export default Section;
