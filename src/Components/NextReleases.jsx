import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const NextReleases = () => {

  // const [effect, SetEffect] = useState(false);

  // useEffect(() => {
    window.addEventListener('scroll', function () {
      function fade(direction) {
        var p = document.querySelectorAll('.fade-' + direction);
        // console.log(altura);
        for (let i = 0; i < p.length; i++) {
          // altura de la ventana
          var altura = window.innerHeight / 1;
          var distancia = p[i].getBoundingClientRect().top;
          p[i].classList.add('transform-' + direction);

          if (distancia <= altura) {
            p[i].classList.add('aparece');
          } else {
            p[i].classList.remove('aparece');
          }
        }
      }
      fade('up');
      fade('left');
    })

    // const activePage = window.location.pathname;
  //  console.log(activePage);
  //  const navLinks = document.querySelectorAll('nav a').forEach(link =>{
  //      if(link.href.includes(`${activePage}`)){
  //          link.classList.add('active');
  //      }
  //  });
  // })


  

  return (
    <>
      <div className="estrenos">
        <p className="estrenos-titulo fade-up">UPCOMING RELEASES</p>
      </div>
      <div className="container-movie-thor">
        <div className="container-movie-color">
          <div className="texto">
            <p className="fade-left">"The film finds Thor on a journey unlike anything he has ever faced: a search for inner peace. But his retreat is interrupted by a galactic assassin known as Gorr the butcher of gods, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of the Valkyrie queen, Korg, and her ex-girlfriend Jane Foster, who, to Thor's surprise, inexplicably wields her magical hammer, Mjolnir, as the Mighty Thor." </p>
            <div className="texto-estreno">
              <p className="fade-up">Release Date: July 8, 2022</p>
            </div>

            <FontAwesomeIcon icon={faPlay} style={{ color: 'red', fontSize: '40px' }} />
            <a href="https://www.youtube.com/watch?v=pR6pOzwP2Vo" target="_blank" rel="noreferrer"><i
            ></i>ver trailer </a>
            {/* <FontAwesomeIcon icon={faPlay} /> */}
            {/* <a>Trailer Not available</a> */}
          </div>
        </div>
      </div>

      <div className="container-movie">
        <div className="container-movie-color">
          <div className="texto">
            <p className="fade-left">"

              When the Guardians of the Galaxy are trapped in a wormhole, a smaller-than-normal Groot is separated billions of light-years from the team. Falling to a lower planet, Groot discovers that he is in a totally alien and unknown world, full of strange creatures and societies.
              " </p>


            <div className="texto-estreno">
              <p className="fade-up">Release Date: Augost 10, 2022</p>
            </div>

            <p className="pelicula-texto-no-disponible">
              Trailer Not Available
            </p>
          </div>
        </div>
      </div>

      <div className="container-movie-msmarvel">
        <div className="container-movie-color">
          <div className="texto">
            <p className="fade-left">"A 30-year-old single lawyer whose greatest desire is to succeed in her profession. But there is a "small" detail: she is related to Bruce Banner (Mark Ruffalo), also known as the Incredible Hulk." </p>
            <div className="texto-estreno">
              <p className="fade-up">Release Date: Augost 17, 2022</p>
            </div>
            <p className="pelicula-texto-no-disponible">
              Trailer Not Available
            </p>
          </div>
        </div>
      </div>

    </>
  );
}

export default NextReleases;