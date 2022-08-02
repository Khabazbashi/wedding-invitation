import "./App.css";
import Dresscode from "./Routes/Dresscode.js";
import Gifts from "./Routes/Gifts.js";
import AboutLocation from "./Routes/AboutLocation";
import ContactInfo from "./Routes/ContactInfo";
import TimeAndPlace from "./Routes/TimeAndPlace";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App_header-textcontainer">
          <h1>Marcus &#38; Sara </h1>
          <h2>13 Aug 2022</h2>
        </div>
      </header>
      <div className="App__Intro">
        <p>Marcus and Sara are having a wedding. </p>
      </div>
      <div className="App__Content">
        <TimeAndPlace />
        <AboutLocation />
        <Dresscode />
        <Gifts />
        <ContactInfo />
      </div>
      <div className="App__Outro">
        <p>Vi ser fram emot att träffa er på bröllopet!</p>
      </div>
    </div>
  );
}

export default App;
