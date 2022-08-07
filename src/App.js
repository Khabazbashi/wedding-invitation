import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ContactInfo from "./Routes/ContactInfo";
import About from "./Routes/About";
import Location from "./Routes/Location";

function App() {
  return (
    <>
      <div className="background"></div>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/timeplace" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
