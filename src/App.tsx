import { BrowserRouter as Router } from "react-router-dom";
import { globalStyles } from "./styles/global";
import Header from "./components/header/header.component";

import Main from "./components/sections/main/main.section";
import About from "./components/sections/about/about.section";
import Experiences from "./components/sections/experiences/experiences.section";
import Technologies from "./components/sections/technologies/technologies.section";

globalStyles();

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <About />
      <Experiences />
      <Technologies />
    </Router>
  );
}

export default App;
