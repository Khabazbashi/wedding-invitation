import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ContactInfo from "./Routes/ContactInfo";
import AboutLocation from "./Routes/AboutLocation";
import FindUs from "./Routes/FindUs";

function App() {
  return (
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/location" element={<FindUs />} />
          <Route path="/about" element={<AboutLocation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
