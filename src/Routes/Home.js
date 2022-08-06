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
        <div className="pages__divider">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJmrkI6dKz8iTMiITtSE0aFcf-D5b4RWIWGMXCUAtWmfpDPriGa0UTNJAXG0fJL8nVOY&usqp=CAU" />
        </div>
        <h2 className="pages__subtitle"> Tid</h2>
        <p className="pages__infotext">
          13 Augusti <br />
          15:00
        </p>
        <h2 className="pages__subtitle"> Plats</h2>
        <p className="pages__infotext">
          Skoklostervägen 16 <br /> 74694 Häggeby
        </p>
        <h1 className="pages__subtitle">Klädsel</h1>
        <p className="pages__infotext">Sommarfin</p>
        <div className="pages__divider">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJmrkI6dKz8iTMiITtSE0aFcf-D5b4RWIWGMXCUAtWmfpDPriGa0UTNJAXG0fJL8nVOY&usqp=CAU" />
        </div>
        <h1 className="pages__subtitle">Gåvor</h1>
        <p className="pages__infotext">
          Er närvaro är allt vi önskar oss. Men vill ni ändå uppmärksamma vår
          dag med en gåva skulle det föreslagsvis vara ett litet bidrag till vår
          bröllopsresa.
        </p>
      </div>
    </div>
  );
}

export default Home;
