import React, { useState, useEffect } from 'react';

function Hotels() {
  const [newYork, setNewYork] = useState([]);
  const [paris, setParis] = useState([]);

  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-73.9857&lat=40.7486&kinds=other_hotels&limit=10&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setNewYork(data.features))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=2.349014&lat=48.864716&kinds=other_hotels&limit=10&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setParis(data.features))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Hotels in New York City</h1>
        {newYork.map((newYork, index) => (
          <div key={index}>
            <h2 >{newYork.properties.name}</h2>
            <p>Rating: {newYork.properties.rate}</p>
            <p>Rating: {newYork.properties.info}</p>
          </div>
        ))}
        <h1>Hotels in Paris</h1>
          {paris.map((paris, index) => (
            <div key={index}>
              <h2 >{paris.properties.name}</h2>
              <p>Rating: {paris.properties.rate}</p>
            </div>
        ))}
    </div>
  );
}

export default Hotels;
