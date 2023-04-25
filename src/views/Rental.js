import React, { useState, useEffect } from "react";
import './styles.css';


const Rental = () => {
  const [city, setcity] = useState("Paris");
  const [pickUpDate, setPickUpDate]=useState("2023-06-10");
  const [dropOffDate, setDropOffDate]=useState("2023-06-30");
  
  const [results, setResults] = useState([]);
  const [spinner, setSpinner] = useState(false); 
  

  useEffect(() => {

    //API Key Parameters
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '321085c8cfmshd05a007d314f786p1b98fdjsn953e416d1d90',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    const search = async () => {
      setSpinner(true);
        
      //console.log("City: ", city);
      //fetch('https://booking-com.p.rapidapi.com/v1/car-rental/search?currency=AED&drop_off_latitude=50.08773&sort_by=recommended&drop_off_datetime=2023-06-30%2016%3A00%3A00&from_country=it&pick_up_latitude=50.08773&locale=en-gb&pick_up_datetime=2023-06-29%2016%3A00%3A00&drop_off_longitude=14.421133&pick_up_longitude=14.421133', options)
      //fetch(`https://booking-com.p.rapidapi.com/v1/car-rental/search?currency=EUR&drop_off_latitude=50.08773&sort_by=recommended&drop_off_datetime=${dropOffDate}%2016%3A00%3A00&from_country=it&pick_up_latitude=50.08773&locale=en-gb&pick_up_datetime=${pickUpDate}%2016%3A00%3A00&drop_off_longitude=14.421133&pick_up_longitude=14.421133`, options)
      await fetch(`https://booking-com.p.rapidapi.com/v1/car-rental/search?currency=EUR&drop_off_latitude=48.864716&sort_by=recommended&drop_off_datetime=${dropOffDate}%2016%3A00%3A00&from_country=it&pick_up_latitude=48.864716&locale=en-gb&pick_up_datetime=${pickUpDate}%2016%3A00%3A00&drop_off_longitude=2.349014&pick_up_longitude=2.349014`, options)
      .then(response => response.json())
      .then(response => {
        //console.log("Car rental fetch response::",response)
        //console.log("Car rental fetch response::",response.search_results[0].supplier_info.logo_url)
        setResults(response.search_results);
        setSpinner(false);
        })
      .catch(err => {
        console.error(err);
        setResults(null);
      });

    };

    // If this is the initial page load, then run search immediately
    if (city && dropOffDate && pickUpDate && !results.length) {
      search();
    // else throttle search requests with timer  
    } else {
      // Before execuring search, it needs to wait 500ms
      let timeoutID = setTimeout(() => {
        // If the input is empty, then search do not proceed
        if (city) {
          search();
        }
      }, 500);

      // CLEANUP: to cleanup the timer
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [city, dropOffDate, pickUpDate]);

  const searchResultsMapped = results.map((result) => {
    return (
      <div className="container" key={result.vehicle_info.v_id}> 
         
          <div className = "row carItem">
            <div className = "row flex">
              <div className = "col-lg-4">              
              <img className="carImg" src={`${result.vehicle_info.image_url}`} alt="Car Image" ></img> 
              </div>
              <div className = "col-lg-4">
                <p className="carName">{result.vehicle_info.v_name} <span className="smallText">or Similar Car</span></p>
                <p>{result.vehicle_info.transmission} <span> - {result.vehicle_info.seats} Seats</span></p>
                <p>{result.vehicle_info.mileage}</p>
              </div>  
              <div className = "col-lg-4 ">
                <p className="smallText">Total Price:</p>
                <p className="carPrice">€{result.pricing_info.price}</p>  
                <p className="cancelPolicy">Free Cancellation</p>
                <button className="bookButton">Book</button>
              </div>    
            </div>
            <hr className="rowLine"></hr>

            <div className = " flex supplierRow">          
              <div className="col"> 
                  <img className="supplierImg" src={`${result.supplier_info.logo_url}`} alt="Supplier Image"></img> 
              </div>
              <div className="col"> 
              <br></br>          
                <button className="ratingBubble" type="button" disabled>{result.rating_info.average}</button>            
                <p className="cancelPolicy">{result.rating_info.average_text}</p>           
              </div>
              <div className="col ">                
                <p>{result.rating_info.no_of_ratings}+ reviews</p>
                <p className="address"><span className="addressTxt">Address:&nbsp;&nbsp;&nbsp;</span>{result.supplier_info.address}</p>
              </div>                            
                          
            </div>
          </div>
      </div>



    );
  });

  return (
    <div  >

      <div className="rentalInput rentalForm">        
        <p className="carName">We help you find the best Cars for your trip - We make your trip more memorable</p>
        <div className="inField">
            <label>Rental City:&nbsp;&nbsp;</label>
                <input className="input" 
                value={city}
                onChange={(e) => setcity(e.target.value)} disabled
            />
            <label >&nbsp;&nbsp;&nbsp;&nbsp;Pick-up Date:&nbsp;&nbsp;</label>
            <input type="date" id="startDate"  value={pickUpDate} min="2023-06-10" max="2023-12-23" disabled />
            <label >&nbsp;&nbsp;&nbsp;&nbsp;Drop-Off Date:&nbsp;&nbsp;</label>
            <input type="date" id="endDate"  value={dropOffDate} min="2023-06-30" max="2023-12-23" onChange={(e) => setDropOffDate(e.target.value)} />
        </div>
        
      </div>

      <div >
      {(spinner) ? (
        <div className="rentalBg">
            
            <div className="searchLoading">            
              <br></br>
            <p>Searching for Top Car Rental deals!</p>
            <p>Please WAIT....</p>
            <p>Search may take few minutes</p>
            <img src="../images/car/Loading_icon.gif" alt="alt text" className="out-of-screen"></img>
            
            </div>
        </div>
        ):( 
          <div>{searchResultsMapped}</div>
        )}
      </div>

    </div>
  );
};

export default Rental;