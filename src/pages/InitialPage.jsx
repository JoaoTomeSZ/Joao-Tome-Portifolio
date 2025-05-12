import About from "../components/about/About";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Tecnologies from "../components/tecnologies/Tecnologies";
const InitialPage = () => {
  return (
    <div >
      <Header/>
      <Hero />
      <About />
      <Tecnologies/>
      <Projects/>
    </div>
  );
};

export default InitialPage;
