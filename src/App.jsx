import "./App.css";
import InitialPage from "./pages/InitialPage";
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage";
import ProjectsPage from "./pages/ProjectsPage"
import TecnologiesPage from "./pages/TecnologiesPage";
import MailMePage from "./pages/MailMePage";
import "./index.css";
import {Suspense, lazy} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Suspense  fallback={<h1>Loading...</h1>} >
    <Router>
      <Routes >
        <Route path="/Joao-Tome-Portifolio" element={<InitialPage/>} />
        <Route path="/Joao-Tome-Portifolio/About" element={<AboutPage/>}/>
        <Route path="/Joao-Tome-Portifolio/Contacts" element={<ContactsPage/>}/>
        <Route path="/Joao-Tome-Portifolio/Projects" element={<ProjectsPage/>}/>
        <Route path="/Joao-Tome-Portifolio/Tecnologies" element={<TecnologiesPage/>}/>
        <Route path="/Joao-Tome-Portifolio/Mailme" element={<MailMePage/>}/>   
      </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
