import "./App.css";
import InitialPage from "./pages/InitialPage";
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage";
import ProjectsPage from "./pages/ProjectsPage"
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
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contacts" element={<ContactsPage/>}/>
        <Route path="/Projects" element={<ProjectsPage/>}/>
        <Route path="/Mailme" element={<MailMePage/>}/>   
      </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
