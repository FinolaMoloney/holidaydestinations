import React, { useState, useEffect } from 'react';

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-73.9857&lat=40.7486&kinds=other_hotels&limit=10&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setLocations(data.features))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Hotels in New York City</h1>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <h2>{location.properties.name}</h2>
            <p>Longitude: {location.geometry.coordinates[0]}</p>
            <p>Latitude: {location.geometry.coordinates[1]}</p>
            <p>Rating: {location.properties.rate}</p>
            <p>Image: {location.properties.image}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;