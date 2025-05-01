import About from "../components/about/About";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
const InitialPage = () => {
  return (
    <div>
      <Header className="z-10"/>
      <Hero />
      <About />
    </div>
  );
};

export default InitialPage;
