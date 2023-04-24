import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Holiday Destinations</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
						<a className="nav-link" href="/">Home</a>
					</li>
          <li className="nav-item">
            <a className="nav-link" href="/hotels">Hotels</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Rental">Rentals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Weather">Weather</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href="/flights">Flights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
  
  export default Navbar;
  