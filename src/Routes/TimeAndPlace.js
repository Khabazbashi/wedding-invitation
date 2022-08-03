function TimeAndPlace() {
  return (
    <div className="pages__container">
      <div className="pages__header">
        <h1 className="pages__title">Tid och Plats</h1>
      </div>
      <div className="pages__body">
        <h2 className="pages__subtitle"> Adress</h2>
        <p className="pages__infotext">
          Skoklostervägen 16 <br /> 74694 Häggeby
        </p>
        <h2 className="pages__subtitle"> Datum och Tid</h2>
        <p className="pages__infotext">
          13 augusti <br />
          15:00
        </p>
        <h2 className="pages__subtitle"> Övrig information</h2>
        <p className="pages__text">
          Ni är varmt välkomna att titta in tidigare för att ta del av det som
          finns i området såsom bad i närliggande sjö, tennis, biljard eller
          bara för att packa upp och ställa in er i era rum.
        </p>
      </div>
    </div>
  );
}

export default TimeAndPlace;
