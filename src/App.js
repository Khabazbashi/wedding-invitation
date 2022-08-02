import "./App.css";
import Dresscode from "./Routes/Dresscode.js";
import Gifts from "./Routes/Gifts.js";
import AboutLocation from "./Routes/AboutLocation";
import ContactInfo from "./Routes/ContactInfo";
import TimeAndPlace from "./Routes/TimeAndPlace";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App_header-textcontainer">
          <h1>Marcus &#38; Sara </h1>
          <h2>13 Aug 2022</h2>
        </div>
      </header>
      <div className="App__Content">
        <Home />
        <TimeAndPlace />
        <AboutLocation />
        <Dresscode />
        <Gifts />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
