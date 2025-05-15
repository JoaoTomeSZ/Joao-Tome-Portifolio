import About from "../components/about/About";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import { MailMe } from "../components/mail/MailMe";
import Projects from "../components/projects/Projects";
const InitialPage = () => {
  return (
    <div >
      <Header/>
      <Hero />
      <About />
      <Projects/>
      <MailMe/>
    </div>
  );
};

export default InitialPage;
