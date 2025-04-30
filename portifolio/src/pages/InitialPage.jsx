import About from "../components/aboutme/About";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import ScrollTop from "../components/others/ScrollTop";
const InitialPage = () => {
  return (
    <div>
      <Header className="z-10"/>
      <Hero />
      <About />
      <ScrollTop />
    </div>
  );
};

export default InitialPage;
