import React from "react";

function Home() {
  return (
    <div className="pages__container">
      <div className="pages__header">
        <h1 className="pages__title">Marcus &amp; Sara </h1>
      </div>
      <div className="pages__body">
        <h2 className="pages__sectiontitle"> Välkomna på bröllop</h2>
        <p className="pages__text">
          Om en vecka gifter vi oss på Skadevi Gård och vi önskar dela dagen med
          er. Hoppas att ni kommer och firar vår dag med oss.
        </p>
        <div className="pages__divider180">
          <img src="https://i.pinimg.com/474x/70/57/44/7057443a8c04006983551c91496f954a.jpg" />
        </div>
        <h2 className="pages__subtitle"> Datum &amp; Tid </h2>
        <p className="pages__infotext">
          Vigselceremoni <br />
          den 13 Augusti kl 16:30
        </p>

        <h2 className="pages__subtitle"> Plats</h2>
        <p className="pages__infotext">
          Skoklostervägen 16 <br /> 74694 Häggeby
        </p>
        <h1 className="pages__subtitle">Klädsel</h1>
        <p className="pages__infotext">Sommarfin</p>
        <h1 className="pages__subtitle">Gåva</h1>
        <p className="pages__infotext">
          Er närvaro är allt vi önskar oss. Vill ni ändå uppmärksamma vår dag
          med en gåva uppskattar vi ett litet bidrag till vår bröllopsresa.
        </p>
        <div className="pages__divider">
          <img src="https://i.pinimg.com/474x/70/57/44/7057443a8c04006983551c91496f954a.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
