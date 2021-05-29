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
  const [allFlats, setAllFlats] = useState([]);
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/flats.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFlats(data);
        setAllFlats(data);
      });
  }, []);

  // everytime search or allFlats changes, filter the flats
  useEffect(() => {
    const filterFlats = (search) => {
      const filteredFlats = allFlats.filter((flat) =>
        new RegExp(search, "i").exec(flat.name)
      );
      setFlats(filteredFlats);
    };

    filterFlats(search);
  }, [allFlats, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
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
