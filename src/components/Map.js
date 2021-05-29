import React, { useState, useEffect } from "react";
import MapGL, { Marker } from "react-map-gl";
import PriceMarker from "./PriceMarker";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2xhaXJlZnJvZnJvIiwiYSI6ImNrcGE1d2FlMzBuMHQydW1uMXIwMzZlOGcifQ.Bb6AWn5nCxTSSA7pWBPuEg";

const Map = ({ flats, selectedFlat }) => {
  const [viewport, setViewport] = useState({
    latitude: 45.4972159, // Montreal
    longitude: -73.6103642, // Montreal
    zoom: 12,
    pitch: 0,
    bearing: 0,
  });

  useEffect(() => {
    if (selectedFlat) {
      setViewport((prev) => ({
        ...prev,
        latitude: selectedFlat.lat,
        longitude: selectedFlat.lng,
      }));
    }
  }, [selectedFlat]);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
      transitionDuration={200}
    >
      {flats.map((flat) => (
        <Marker key={flat.id} latitude={flat.lat} longitude={flat.lng}>
          <PriceMarker price={flat.price} selected={selectedFlat === flat} />
        </Marker>
      ))}
    </MapGL>
  );
};

export default Map;
