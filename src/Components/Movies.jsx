import React from "react";
import EndGame from "../img/EG.jpg";
import IW from "../img/IW.jpg";
import CA2 from "../img/capitanAmerica2.jpg";
import NWH from "../img/nwh.jpg";
import IM from "../img/ironMn.jpg";
const Movies = () => {
  return (
    <>
      <div className="encabezado-pelicula">
        <div className="encabezado-pelicula-fondo">
          <p className="encabezado-pelicula-texto"> Top 5 Movies </p>
        </div>
      </div>
      <hr />
      <div className="pelicula-1">
        <div className="pelicula-1-descripcion">
          <p className="pelicula-titulo">
            {" "}
            Capitán America: The Winter Soldier{" "}
          </p>
          <p className="pelicula-texto">
            Captain America has been working for Shield, a special agency of the
            government, since the events of The Avengers, but questions the
            organization's motives as that he learns more about the plans from
            him. On top of that, his closest friend of his comes back from the
            dead and turns into an adversary, the Winter Soldier.
          </p>
          <button className="pelicula-boton" type="submit">
            <a
              className="pelicula-enlace"
              href="https://www.disneyplus.com/es-419/movies/marvel-studios-captain-america-the-winter-soldier/TVme5whcowSy"
              target="blank"
            >
              watch movie
            </a>
          </button>
        </div>
        <div className="pelicula-1-imagen">
          <img src={CA2} alt="" />
        </div>
      </div>
      <hr />
      <div className="pelicula-1">
        <div className="pelicula-1-imagen">
          <img src={EndGame} alt="" />
        </div>
        <div className="pelicula-1-descripcion">
          <p className="pelicula-titulo"> Avengers: EndGame </p>
          <p className="pelicula-texto">
            After Thanos snatched away half of all life, leaving the universe in
            total chaos, the Avengers must try to make things right. Five years
            pass and a small possibility of them undoing it all, but before that
            happens, Captain America and Tony Stark must make amends and reunite
            the Avengers one last time.
          </p>
          <button className="pelicula-boton" type="submit">
            <a
              className="pelicula-enlace"
              href="https://www.disneyplus.com/es-419/movies/avengers-endgame/aRbVJUb2h2Rf "
              target="blank"
            >
              watch movie
            </a>
          </button>
        </div>
      </div>
      <hr />
      <div className="pelicula-1">
        <div className="pelicula-1-descripcion">
          <p className="pelicula-titulo"> Avengers: Infinity War </p>
          <p className="pelicula-texto">
            With Thanos (Josh Brolin) as the role's villain par excellence, he
            arrives for end of the long-awaited final showdown. Intending to
            make the devastating Titan and the members of the Black Order do not
            manage to get hold of all the Infinity Stones, the Avengers, the
            Guardians of the Galaxy and other characters presented throughout
            ten years of history, will free a battle that will take us through
            all the common spaces of the filmic universe: from Asgard to
            Wakanda.
          </p>
          <button className="pelicula-boton" type="submit">
            <a
              className="pelicula-enlace"
              href="https://www.disneyplus.com/es-419/movies/marvel-studios-avengers-infinity-war/1WEuZ7H6y39v"
              target="blank"
            >
              watch movie
            </a>
          </button>
        </div>
        <div className="pelicula-1-imagen">
          <img src={IW} alt="" />
        </div>
      </div>
      <hr />
      <div className="pelicula-1">
        <div className="pelicula-1-imagen">
          <img src={NWH} alt="" />
        </div>
        <div className="pelicula-1-descripcion">
          <p className="pelicula-titulo"> SpiderMan: No Way Home </p>
          <p className="pelicula-texto">
            The movie picks up where the last Spider-Man movie left off, with
            Peter accused of murdering Mysterio while revealing his identity to
            the entire world. negative reaction of the resulting audience has
            far-reaching consequences that harm those closest to Peter Parker,
            which leads him to Doctor Strange in the hope that the sorcerer can
            make anyone remember it's Spider-Man.
          </p>
          <p className="pelicula-texto-no-disponible">
            Movie not available in Disney Plus
          </p>
        </div>

        <div className="pelicula-1">
          <div className="pelicula-1-descripcion">
            <p className="pelicula-titulo"> Iron Man</p>
            <p className="pelicula-texto">
              The first film of all, and with which the universe began to form
              shared, arrived in 2008. Robert Downey, Jr. put himself for the
              first time in the shoes of Tony Stark, the millionaire owner of
              Stark Industries who will end up becoming Iron Man. In the
              post-credits scene we knew Nick Fury, the director of S.H.I.E.L.D.
              with the face of Samuel L. Jackson, who arrived to Stark to tell
              him about the Avengers Initiative.
            </p>
            <button className="pelicula-boton" type="submit">
              <a
                className="pelicula-enlace"
                href="https://www.disneyplus.com/es-419/movies/iron-man-de-marvel-studios/6aM2a8mZATiu"
                target="blank"
              >
                watch movie
              </a>
            </button>
          </div>
          <div className="pelicula-1-imagen">
            <img src={IM} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Movies;
