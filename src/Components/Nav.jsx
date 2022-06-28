import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Encabezado from './Encabezado';
import Movies from './Movies';

const Nav = () => {
  return ( 
    <>
    <BrowserRouter>
    <nav id="nav">
      <Link to="/Encabezado">Encabezado</Link>
      <Link to="/Movies">Movies</Link>
      
    </nav>
    <Routes>
      <Route path="/Encabezado" element={<Encabezado />} />
      <Route path="/Movies" element={<Movies />} />
    </Routes>
    
    </BrowserRouter>
    </>
   );
}
 
export default Nav;