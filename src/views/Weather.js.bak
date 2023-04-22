import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import './styles.css';

function Weather() {
  const [inputValue, setInputValue] = useState("Dublin");
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [sys, setSys] = useState("");
  const [status, setStatus] = useState("");
  const API_KEY = "2fce26b3009e0a66de8c0a0223800869";

  // function get temp data
  const getTempData = (apiKey, destination) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${destination}&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.main);
        console.log("getTempData-res", res)
        console.log("getTempData-res.main", res.main)
        setCity(destination);
        setSys(res.sys);
        setStatus(res.weather[0].main);
        // console.log(res.main);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // call use Effect for render data every search input
  useEffect(() => {
    getTempData(API_KEY, inputValue);
  }, [inputValue]);

  return (
    
 
    <div className="bg" >
      <br/>      
      <div className="row  weather-input-city "> 
         <br></br>          
        <span>Weather in City:&nbsp;&nbsp;&nbsp;&nbsp;<input 
          type="text"
          placeholder="Enter City Name"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        /></span>
        <p></p>
        
      </div>

      <div className="row ">
        {!inputValue.length ? null : data ? (
                  
            
            <div className="col-lg-10 destination ">

              <div className="DestTop flex">
                <p className="weather-p-city">City : {city.toUpperCase()}</p>
                <p className="weather-p-city">Weather: {status.toUpperCase()}</p>
              </div>
              <div className="flex">
                <p >Current Temperature : {data.temp} °C</p>
              </div>
              <div className="flex">
                <p >Temperature Range : {data.temp_min} °C  to  {data.temp_max} °C</p>              
              </div>
              <div className="flex">
                <p >Humidity  : {data.humidity}</p>             
              </div>
              <div className="flex">
                <p >Sunraise  : {new Date(sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p >Sunset  : {new Date(sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>              
              </div>

            </div>

          

          
        ) : (
          <p className="weather-valid-city-name">Enter Valid City Name</p>
        )}

      </div>
      
      
      
    </div>


    
  );
}

export default Weather;