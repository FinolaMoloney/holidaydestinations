import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../components/Home.css'

function Home() {
  return (
    <div className="container-fluid">
      <Carousel>

      <Carousel.Item>
          <Link to="/hotels">
            <img
              className="d-block mx-auto img-fluid"
              href="/hotels"
              src={'./hotels.jpg'}
              alt="Hotel slide"
            />
            <Carousel.Caption>
              <h3>Hotels</h3>
              <p>City Break Hotels</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/rental">
            <img
              className="d-block mx-auto img-fluid"
              href="/Rental"
              src={'./cars.png'}
              alt="Cars slide"
            />
            <Carousel.Caption>
              <h3>Car Rentals</h3>
              <p>City Break Car Rentals</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/weather">
            <img
              className="d-block mx-auto img-fluid"
              href="/Weather"
              src={'./weather.jpg'}
              alt="Weather slide"
            />
            <Carousel.Caption>
              <h3>Weather</h3>
              <p>City Break Weather</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/flights">
            <img
              className="d-block mx-auto img-fluid"
              href="/flights"
              src={'./Flights.jpg'}
              alt="Flights slide"
            />
            <Carousel.Caption>
              <h3>Flights</h3>
              <p>Find City Break Flights</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>


      </Carousel>
    </div>
  );
}

export default Home;
