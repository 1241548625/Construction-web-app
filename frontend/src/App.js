// import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ConfirmPage from "./components/ConfirmPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div classname="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/Service" Component={ServicePage} />
          <Route path="/About" Component={AboutPage} />
          <Route path="/Confirm" Component={ConfirmPage} />
          <Route path="/project" Component={ProjectPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
