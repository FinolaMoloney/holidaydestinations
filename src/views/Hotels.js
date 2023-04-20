import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../components/Hotel.css'
import Rating from '../components/Rating.js'

function Hotels(){

  //New York
  const [newYorkCity, setNewYorkCity] = useState("");
  const [newYork, setNewYork] = useState([]);
  //New York Hotels APIs
  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-73.9857&lat=40.7486&kinds=other_hotels&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setNewYork(data.features))
      .catch(error => console.log(error));  
  }, []);
  //Filter for hotels 6 stars and up
  const starLimitNewYork  = newYork.filter(newYork => newYork.properties.rate >6 ).slice(0, 5)
  //New York Image API
  useEffect (() => {
    var NewYorkCity = async function  () {
      var data = await axios.get(
        "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=buildings-skyline-city-cityscape&image_type=photo&id=1850129"
      );
   
      setNewYorkCity(data.data.hits[0].webformatURL);
    };
    NewYorkCity();
  }, []);
  //Paris
  const [parisImage, setParisImage] = useState("");
  const [paris, setParis] = useState([]);
  //Paris Hotels APIs
  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=2.349014&lat=48.864716&kinds=other_hotels&rate=3&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setParis(data.features))
      .catch(error => console.log(error));
  }, []);
  //Filter for hotels 6 stars and up
  const starLimitParis  = paris.filter(paris => paris.properties.rate >6 ).slice(0, 5)
  //Paris Image API
  useEffect (() => {
    var ParisImage = async function  () {
      var data = await axios.get(
        "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=eiffel-tower-paris-france&image_type=photo&id=3349075"
      );
   
      setParisImage(data.data.hits[0].webformatURL);
    };
    ParisImage();
  }, []);
  //London
  const [londonImage, setLondonImage] = useState("");
  const [london, setLondon] = useState([]);
  //London hotels APIs
  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-0.118092&lat=51.509865&kinds=other_hotels&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setLondon(data.features))
      .catch(error => console.log(error));
      
  }, []);
  //Filter for hotels 6 stars and up
  const starLimitLondon  = london.filter(london => london.properties.rate >6 ).slice(0, 5)
  //London Image
  useEffect (() => {
    var londonImage = async function  () {
      var data = await axios.get(
        "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=london-city-heaven-clouds-cities&image_type=photo&id=206118"
      );
   
      setLondonImage(data.data.hits[0].webformatURL);
    };
    londonImage();
  }, []);
  //Madrid
  const [madridImage, setMadridImage] = useState("");
  const [madrid, setMadrid] = useState([]);
  //Madrid hotels APIs
  useEffect(() => {
    fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=-3.703790&lat=40.416775&kinds=other_hotels&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
      .then(response => response.json())
      .then(data => setMadrid(data.features))
      .catch(error => console.log(error));
      
  }, []);
  //Filter for hotels 6 stars and up
  const starLimitMadrid  = madrid.filter(madrid => madrid.properties.rate >2 ).slice(0, 5)
  //Madrid Image
  useEffect (() => {
    var madridImage = async function  () {
      var data = await axios.get(
        "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=madrid-spain-sunset-architecture&image_type=photo&id=2714570"
      );
   
      setMadridImage(data.data.hits[0].webformatURL);
    };
    madridImage();
  }, []);

    //Amsterdam
    const [amsterdamImage, setAmsterdamImage] = useState("");
    const [amsterdam, setAmsterdam] = useState([]);
    //Amsterdam hotels APIs
    useEffect(() => {
      fetch('https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=4.897070&lat=52.377956&kinds=other_hotels&apikey=5ae2e3f221c38a28845f05b6aab861f719c25d8c398372f720270a8d')
        .then(response => response.json())
        .then(data => setAmsterdam(data.features))
        .catch(error => console.log(error));
        
    }, []);
    //Filter for hotels 6 stars and up
    const starLimitAmsterdam = amsterdam.filter(amsterdam => amsterdam.properties.rate >6 ).slice(0, 5)
    //Amsterdam Image
    useEffect (() => {
      var amsterdamImage = async function  () {
        var data = await axios.get(
          "https://pixabay.com/api/?key=34130522-c8d0b465514edc5b70995405d&q=amsterdam-europe-walk-vacation&image_type=photo&id=988047"
        );
     
        setAmsterdamImage(data.data.hits[0].webformatURL);
      };
      amsterdamImage();
    }, []);

  return (
    <div>
      <header className="header">
        <h1 className="header-title">Find your perfect City Break Hotel</h1>
      </header>
      <div className="container-fluid">
        <p>Need hotel suggestions? You have come to the right place! See below a list of hotels for your city break destination. We've done the hard work for you and compiled a list of hotels in popular destinations. All you need to do is pick your favourite!!</p>
        <div className="row gradient-1">
        <h1>Hotels in New York City</h1>
          <div className="col-sm">
            {newYorkCity && <img src={newYorkCity} alt="New York City" />}<a href= "https://pixabay.com/photos/buildings-skyline-city-cityscape-1850129/"><br/><small>Source: https://pixabay.com/photos/buildings-skyline-city-cityscape-1850129/</small></a>
          </div>
          <div className="col-sm">
          {starLimitNewYork.map((newYork, index) => (
          <div key={index} >
            <ul>
              <li>
                <h6>
                  {newYork.properties.name.toUpperCase()}
                </h6>
                <p className='rating'>
                  <Rating starRating={newYork.properties.rate}/>
                </p>
              </li>
            </ul>
          </div>
          ))}
          </div>
        </div>
        <br></br>
        <div className="row  gradient-1">
        <h1>Hotels in Paris</h1>
          <div className="col-sm">
          {parisImage && <img src={parisImage} alt="Paris" />}<a href= "https://pixabay.com/photos/london-city-heaven-clouds-cities-206118/"><br/><small>Source: https://pixabay.com/photos/london-city-heaven-clouds-cities-206118/</small></a>
          </div>
          <div className="col-sm">
          {starLimitParis.map((paris, index) => (
            <div key={index}>
              <ul>
                <li>
                  <h6>
                    {paris.properties.name.toUpperCase()}
                  </h6>
                  <p className="rating">
                    <Rating starRating={paris.properties.rate}/>
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <div className="row  gradient-1">
        <h1>Hotels in London</h1>
          <div className="col-sm">
          {londonImage && <img src={londonImage} alt="London" />}<a href= "https://pixabay.com/photos/eiffel-tower-paris-france-3349075/"><br/><small>Source: https://pixabay.com/photos/eiffel-tower-paris-france-3349075/</small></a>
          </div>
          <div className="col-sm">
          {starLimitLondon.map((london, index) => (
            <div key={index}>
              <ul>
                <li>
                  <h6>
                    {london.properties.name.toUpperCase()}
                  </h6>
                  <p className="rating">
                    <Rating starRating={london.properties.rate}/>
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <div className="row  gradient-1">
        <h1>Hotels in Madrid</h1>
          <div className="col-sm">
          {madridImage && <img src={madridImage} alt="Madrid" />}<a href= "https://pixabay.com/photos/madrid-spain-sunset-architecture-2714570/"><br/><small>Source: https://pixabay.com/photos/madrid-spain-sunset-architecture-2714570/</small></a>
          </div>
          <div className="col-sm">
          {starLimitMadrid.map((madrid, index) => (
            <div key={index}>
              <ul>
                <li>
                  <h6>
                    {madrid.properties.name.toUpperCase()}
                  </h6>
                  <p className="rating">
                    <Rating starRating={madrid.properties.rate}/>
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <div className="row  gradient-1">
        <h1>Hotels in Amsterdam</h1>
          <div className="col-sm">
          {amsterdamImage && <img src={amsterdamImage} alt="Amsterdam" />}<a href= "https://pixabay.com/photos/amsterdam-europe-walk-vacation-988047/"><br/><small>Source: https://pixabay.com/photos/amsterdam-europe-walk-vacation-988047/</small></a>
          </div>
          <div className="col-sm">
          {starLimitAmsterdam.map((amsterdam, index) => (
            <div key={index}>
              <ul>
                <li>
                  <h6>
                    {amsterdam.properties.name.toUpperCase()}
                  </h6>
                  <p className="rating">
                    <Rating starRating={amsterdam.properties.rate}/>
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      </div>
    </div>
  );
  
}

export default Hotels;
