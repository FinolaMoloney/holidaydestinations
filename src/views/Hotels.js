import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../components/Home.css'

function Hotels(){

  const [newYorkCity, setNewYorkCity] = useState("");
  const [parisImage, setParisImage] = useState("");
  const [newYork, setNewYork] = useState([]);
  const [paris, setParis] = useState([]);

  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-73.9857&lat=40.7486&kinds=other_hotels&limit=5&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setNewYork(data.features))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=2.349014&lat=48.864716&rate=3&kinds=other_hotels&limit=5&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setParis(data.features))
      .catch(error => console.log(error));
  }, []);

    useEffect (() => {
    var NewYorkCity = async function  () {
      var data = await axios.get(
        "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=buildings-skyline-city-cityscape&image_type=photo&id=1850129"
      );
   
      setNewYorkCity(data.data.hits[0].webformatURL);
    };
    NewYorkCity();
  }, []);

  useEffect (() => {
    var ParisImage = async function  () {
      var data = await axios.get(
        "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=eiffel-tower-paris-france&image_type=photo&id=3349075"
      );
   
      setParisImage(data.data.hits[0].webformatURL);
    };
    ParisImage();
  }, []);
  
  return (
    <div>
      <div className="header">
        <h1>Hotel Options in Popular Cities</h1>
      </div>
      <div class="container-fluid gradient-1">
        <h1>Hotels in New York City</h1>
        <div class="row">
            <div class="col-sm">
            {newYorkCity && <img src={newYorkCity} alt="New York City" />}<a href= "https://pixabay.com/photos/buildings-skyline-city-cityscape-1850129/"><br/>Source: https://pixabay.com/photos/buildings-skyline-city-cityscape-1850129/</a>
          </div>
          <div class="col-sm">
          {newYork.map((newYork, index) => (
          <div key={index} >
            <ul>
            <li><h6>{newYork.properties.name}</h6></li>
            <p>Rating: {newYork.properties.rate}</p>
            </ul>
          </div>
          ))}
          </div>
        </div>
        <h1>Hotels in Paris</h1>
        <div class="row">
          <div class="col-sm">
          {parisImage && <img src={parisImage} alt="Paris" />}<a href= "https://pixabay.com/photos/eiffel-tower-paris-france-3349075/"><br/>Source: https://pixabay.com/photos/eiffel-tower-paris-france-3349075/</a>
          </div>
          <div class="col-sm">
          {paris.map((paris, index) => (
            <div key={index}>
              <ul>
              <li><h6>{paris.properties.name}</h6></li>
              <p>Rating: {paris.properties.rate}</p>
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
  
}

export default Hotels;
