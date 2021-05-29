import React, { useState, useEffect } from "react";
import Flat from "./components/Flat";
import Map from "./components/Map";

import "./App.css";

// const demoFlat = {
//   id: 145,
//   name: "The Stay Chez Claudette",
//   imageUrl:
//     "https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/images/chez-claudette-tripadvisor.jpg",
//   price: 164,
//   priceCurrency: "CAD",
//   lat: 45.5264082,
//   lng: -73.5900536,
// };

function App() {
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/flats.json"
    )
      .then((res) => res.json())
      .then((data) => setFlats(data));
  }, []);

  return (
    <div className="app">
      <div className="main">
        <div className="search"></div>
        <div className="flats">
          {flats.map((flat) => (
            <Flat
              key={flat.id}
              data={flat}
              setSelectedFlat={setSelectedFlat}
              selected={selectedFlat === flat}
            />
          ))}
        </div>
      </div>
      <div className="map">
        <Map flats={flats} selectedFlat={selectedFlat} />
      </div>
    </div>
  );
}

export default App;
