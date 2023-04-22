//import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import{Carousel} from 'react-bootstrap';
import '../components/Home.css'

function Home() {
  return (
    <div class="Container">
    <Carousel>

    <Carousel.Item>
        <Link to="/weather">
          <img
            className="img-fluid"
            src={'./weather.jpg'}
            alt="Weather slide"
          />
          <Carousel.Caption>
            <h3>Holiday Weather</h3>
            <p>We can't guarantee it, but you can always check.</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/hotels">
          <img
            className="img-fluid"
            src={'./hotels.jpg'}
            alt="Hotel slide"
          />
          <Carousel.Caption>
            <h3>Holiday Hotels</h3>
            <p>Find a place to stay</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      
      <Carousel.Item>
      <Link to="/flights">
        <img
          className="img-fluid"
          src={'./Flights.jpg'}
          alt="Flights slide"
        />
        <Carousel.Caption>
          <h3>Holiday Flights</h3>
          <p>Find the Cheapest Flights</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Home;