// import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <div classname="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route />
          <Route path="/Service" Component={ServicePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
