import '../css/style.css';
import logo from '../img/marvel-studios.png';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faVideo,faPlayCircle,faUser } from '@fortawesome/free-solid-svg-icons';

const BarraNavegacion = () => {
  

  
  return ( 
    <>  

      
    <nav id="nav">
       <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
           <i className="fas fa-bars"></i>
        </label> 
        <div className="enlace"> <img src={logo} alt="" className="logo" />
        </div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="movies.html">movies</a></li>
            <li><a href="series.html">Series</a></li>
            <li><a href="personajes.html">Characters</a></li>
        </ul>
    </nav>
    <nav id="navegacion-movil">
        <ul>
            <li><a href="index.html"><i icon={faHouse} ></i>
            <FontAwesomeIcon icon={faHouse}/>
            </a></li>
            <li><a href="peliculas.html">
            <FontAwesomeIcon icon={faVideo}/>
              </a></li>
            <li><a href="series.html">
            <FontAwesomeIcon icon={faPlayCircle}/>
              </a></li>
            <li><a href="personajes.html">
            <FontAwesomeIcon icon={faUser}/>
              </a></li>
        </ul>
    </nav>

    </>
   );
}
 
export default BarraNavegacion;

