import logomarvel from './img/marvel-studios.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faVideo,faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Link, Route, NavLink, Routes } from 'react-router-dom';

import Movies from './Components/Movies';
import Home from './Components/Home';
import Series from './Components/Series';

function App() {
  return (
    <>
      <BrowserRouter>

        <nav id="nav">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <div className="enlace"> <img src={logomarvel} alt="" className="logo" />
          </div>
          <ul>
            <li>
              <NavLink className="nav-active" to="/Home">Home</NavLink>
              <NavLink className="nav-active" to="/Movies">Movies</NavLink>
              <NavLink className="nav-active" to="/Series">Series</NavLink>
            </li>
          </ul>
        </nav>

        <nav id="navegacion-movil">
          <ul>
            <li>
              <Link to="/Home">
              <FontAwesomeIcon icon={faHome} />  
              </Link>
              <Link to="/Movies">
              <FontAwesomeIcon icon={faVideo} />  
              </Link>
              <Link to="/Series">
              <FontAwesomeIcon icon={faPlayCircle} />  
              </Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
        </Routes>

      </BrowserRouter>
      {/* <BarraNavegacion />
    <Encabezado />
    <NextReleases /> */}
      {/* <Nav /> */}
    </>
  );
}

export default App;
