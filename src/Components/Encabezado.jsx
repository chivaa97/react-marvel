import React from 'react';
import '../css/style.css';
import avengers2 from '../img/avengers2.png';

const Encabezado = () => {

  

  return ( 
    <>
    <div className="fondomarvel">
      <div className="fondomarvel-color" >
            <div className="encabezado">
                <div className="item"> <img src={avengers2} alt="" /> </div>
                <div className="item descripcion">
                    <p className="titulo ">Marvel Cinematic Universe</p>
                    <p className="parrafo">The marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films, produced by Marvel Studios.
                    The films are based on characters that appear in American comic books published by Marvel Comics.</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
   );
}
 
export default Encabezado;