import Header from "@/components/header/header.component";
import About from "./sections/about/about.section";
import Experiences from "./sections/experiences/experiences.section";
import Main from "./sections/main/main.section";
import Technologies from "./sections/technologies/technologies.section";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Technologies />
      {/* <Experiences />  */}
    </>
  );
}

export default HomePage;
