import React from 'react';
import '../components/Flights.css'


class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [
        { from: 'Dublin', to: 'New York', price: 238, link: 'https://www.skyscanner.ie/routes/DUB/NYC', pic:'https://cdn.vox-cdn.com/thumbor/m8fKDxcIbPTYcL_-nI1AX-98qyU=/0x0:2800x1874/920x613/filters:focal(1195x378:1643x826):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64043139/shutterstock_240592135.0.jpg'},
        { from: 'Dublin', to: 'Paris', price: 33, link: 'https://www.skyscanner.ie/routes/DUB/PAR', pic:'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900'},
        { from: 'Dublin', to: 'London', price: 21, link: 'https://www.skyscanner.ie/routes/DUB/LOND', pic:'https://a.cdn-hotels.com/gdcs/production29/d1870/6a5ec560-bb25-11e8-970b-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium'},
        { from: 'Dublin', to: 'Madrid', price: 55, link: 'https://www.skyscanner.ie/routes/DUB/MAD', pic:'https://a.cdn-hotels.com/gdcs/production196/d170/348659c0-9beb-11e8-a1b5-0242ac110053.jpg'},
        { from: 'Dublin', to: 'Amsterdam', price: 39, link: 'https://www.skyscanner.ie/routes/DUB/AMS', pic:'https://images.wowcher.co.uk/images/deal/21597391/777x520/1065791.jpg'}
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Flights from Dublin </h1>
        <div className="row">
          {this.state.prices.map((price, index) => (
            <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={price.pic} className="img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">{price.to}</h5>
                  <p className="card-text">From €{price.price}</p>
                  {price.link && <p className="card-text">Flights: <a href={price.link} target="_blank">Click here</a></p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

  
  
}

export default Flights;
