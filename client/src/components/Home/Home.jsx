import { useState } from "react";
import About from "../About/About";
import Heading from "../Heading/Heading";
import Nav from "../Nav/Nav";
import Projects from "../Projects/Projects";

const Home = () => {
  const [language, setLanguage] = useState("eng");

  return (
    <div>
      <Nav language={language} setLanguage={setLanguage} />
      <Heading language={language} />
      <About language={language} />
      <Projects language={language} />
    </div>
  );
};

export default Home;
