function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Holiday Destinations</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/">Home</a>
            <a className="dropdown-item" href="/hotels">Hotels</a>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hotels">Hotels</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  