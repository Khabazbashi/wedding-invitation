import "./App.css";
import Dresscode from "./Routes/Dresscode.js";
import Gifts from "./Routes/Gifts.js";
import AboutLocation from "./Routes/AboutLocation";
import ContactInfo from "./Routes/ContactInfo";

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
        <div className="App__Content-section">
          <h3 className="Content__Section-title">Time and Place</h3>
          <p className="Content__Section-text">
            Skoklostervägen 16, 74694, Häggeby. The latest 15:00.
          </p>
        </div>
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
