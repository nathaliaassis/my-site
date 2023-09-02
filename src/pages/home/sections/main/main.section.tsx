import { ArrowLink, Container, Name, Text } from "./main.styled";
import ArrowDown from "./arrow_down";
import Section from "@/components/section/section.component";

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
        {/* <div></div> */}
      </Container>
      <ArrowLink to="#about" smooth>
        <ArrowDown />
      </ArrowLink>
    </Section>
  );
}

export default Main;
