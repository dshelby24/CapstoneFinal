import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./burger.css"
import { Link } from 'react-router-dom';
const Burger = () => {
return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid bg-light">
      <Link className="navbar-brand" to="#">Cincy Travels</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-center navbar-nav-scroll" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 bg-light">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Attractions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/attractions">View Attractions</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Seasons
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><Link className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/spring">Spring</Link></li>
              <li><Link className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/summer">Summer</Link></li>
              <li><Link className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/fall">Autumn</Link></li>
              <li><Link className="dropdown-item" to="https://cincinnatiusa.com/trip-ideas/winter">Winter</Link></li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Destinations
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="https://wandercincinnati.com/2019/12/01/over-the-rhine-cincinnati/">Over the Rhine</Link></li>
              <li><Link className="dropdown-item" to="https://www.cincinnatiparks.com/river-parks/smale-riverfront-park/">Smale Riverfront Park</Link></li>
              <li><Link className="dropdown-item" to="https://www.downtowncincinnati.com/">Downtown</Link></li>
              <li><Link className="dropdown-item" to="https://www.meetnky.com/">Covington/Northern Kentucky</Link></li>
            </ul>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Experiences
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="https://www.citybeat.com/arts-culture">Culture</Link></li>
              <li><Link className="dropdown-item" to="https://www.tripadvisor.com/Attractions-g5503747-Activities-c61-The_Cincinnati_Region.html">Outdoors</Link></li>
              <li><Link className="dropdown-item" to="https://photos.citybeat.com/25-essential-foods-every-cincinnati-visitor-should-try/?slide=1&admin-ajaxwew">Food</Link></li>
              <li><Link className="dropdown-item" to="https://anniewearsit.com/cincinnati-official-travel-guide/">Luxury</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success bg-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>
)
}
export default Burger