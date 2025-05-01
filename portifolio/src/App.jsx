import "./App.css";
import InitialPage from "./pages/InitialPage";
import About from "./pages/AboutPage"
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects"
import Tecnologies from "./pages/Tecnologies";
import MailMe from "./pages/MailMe";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Tecnologies" element={<Tecnologies/>}/>
        <Route path="/Mailme" element={<MailMe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
