import React from "react";
import GoogleMapReact from "google-map-react";

function Location() {
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
          Skoklostervägen 16 <br />
          74694 Häggeby <tab></tab>
          <a href="https://www.google.com/maps/dir//Skoklosterv%C3%A4gen+16,+746+94+H%C3%A4ggeby/@59.6789077,17.5314858,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x465fb15649dcfef3:0x2eac0a182427d24c!2m2!1d17.5336745!2d59.678905!3e0?hl=sv">
            <img src="https://www.nicepng.com/png/full/128-1289813_png-black-and-white-download-location-clipart-pin.png"></img>
          </a>
        </h2>
        <div className="pages__pin"></div>

        <p className="pages__infotext">
          <br />
          Hör av er om ni har svårt att ta er till oss från Stockholm. Vi
          hjälper mer än gärna till och kan också höra ifall ni kan samåka med
          någon av våra andra gäster.
        </p>
        <div className="pages__divider">
          <img src="https://i.pinimg.com/474x/02/db/9c/02db9cfad7c781b0fd7c1c152a211d8f.jpg" />
        </div>
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

export default Location;
