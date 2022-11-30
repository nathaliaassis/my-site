import Header from "@/components/header/header.component";
import About from "@/components/sections/about/about.section";
import Experiences from "@/components/sections/experiences/experiences.section";
import Main from "@/components/sections/main/main.section";
import Technologies from "@/components/sections/technologies/technologies.section";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Technologies />
      <Experiences />
    </>
  );
}

export default HomePage;
