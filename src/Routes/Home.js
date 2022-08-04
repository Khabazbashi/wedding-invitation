function Home() {
  return (
    <div className="pages__container">
      <div className="pages__header">
        <h1 className="pages__title">Marcus &amp; Sara </h1>
      </div>
      <div className="pages__body">
        <p className="pages__text">Varmt välkommen till vårt bröllop</p>
        <h2 className="pages__subtitle"> Tid</h2>
        <p className="pages__infotext">
          13 augusti <br />
          15:00
        </p>
        <h2 className="pages__subtitle"> Plats</h2>
        <p className="pages__infotext">
          Skoklostervägen 16 <br /> 74694 Häggeby
        </p>
        <h1 className="pages__subtitle">Klädsel</h1>
        <p className="pages__infotext">Sommarfin</p>
        <h1 className="pages__subtitle">Presenter</h1>
        <p className="pages__infotext">
          Vi önskar inte några presenter, men om man vill får man gärna bidra
          till vår smekmånad.
        </p>
        <p className="pages__text">
          Vi ser fram emot att träffa er på bröllopet!
        </p>
      </div>
    </div>
  );
}

export default Home;
