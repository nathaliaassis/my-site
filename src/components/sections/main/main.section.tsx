import Section from "../../section/section.component";
import { Container, Name, Text } from "./main.styled";
import ArrowDown from "./arrow_down";
import { HashLink } from "react-router-hash-link";

function Main() {
  return (
    <Section id="home" themeColor="dark">
      <Container>
        <div>
          <Text>Hey, me chamo</Text>
          <Name>Nathália Assis</Name>
          <Text>
            Apaixonada por tecnologia e desafios possuo mais de 5 anos de
            experiência com desenvolvimento front-end
          </Text>
        </div>
        <div></div>
        <HashLink to="#about" smooth>
          <ArrowDown />
        </HashLink>
      </Container>
    </Section>
  );
}

export default Main;
