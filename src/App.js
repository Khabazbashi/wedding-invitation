import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ContactInfo from "./Routes/ContactInfo";
import AboutLocation from "./Routes/AboutLocation";
import Dresscode from "./Routes/Dresscode";
import Gifts from "./Routes/Gifts";
import TimeAndPlace from "./Routes/TimeAndPlace";

function App() {
  return (
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/location" element={<AboutLocation />} />
          <Route path="/dresscode" element={<Dresscode />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/timeplace" element={<TimeAndPlace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
