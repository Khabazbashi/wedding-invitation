import React from "react";
import GoogleMapReact from "google-map-react";

function FindUs() {
  const Marker = () => (
    <>
      <div
        style={{
          position: "absolute",
          marginLeft: 30,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Här!
      </div>
      <div
        style={{
          position: "absolute",
          width: 17,
          height: 17,
          left: -17 / 2,
          top: -17 / 2,
          border: "5px solid #f44336",
          borderRadius: 17,
          backgroundColor: "transparent",
          textAlign: "center",
          color: "#3f51b5",
          fontSize: 17,
          fontWeight: "bold",
          padding: 4,
        }}
      ></div>
    </>
  );
  const defaultProps = {
    center: {
      lat: 59.67898081126611,
      lng: 17.53367449903138,
    },
    zoom: 15,
  };

  return (
    <div className="pages__container">
      <div className="pages__header">
        <h1 className="pages__title">Hitta hit</h1>
      </div>
      <div className="pages__body">
        <h2 className="pages__subtitle">
          {" "}
          Skoklostervägen 16 <br />
          74694 Häggeby
        </h2>

        <p className="pages__infotext">
          <br />
          Om ni har svårt att ta er till oss, hör av er så kan vi se ifall ni
          kan samåka med någon av våra andra gäster.
        </p>
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC9tFIAoG5F0MRNi80A7Rcv3Kzwv-2Fb1c" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker lat={59.67898081126611} lng={17.53367449903138} />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default FindUs;
