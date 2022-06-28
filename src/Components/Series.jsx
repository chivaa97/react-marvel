import React from "react";
import wv from "../img/wv.jpg";
import fws from "../img/fatws.jpg";
import wi from "../img/wi.jpg";

const Series = () => {
  return (
    <>
      <div className="fondo-serie">
        <div className="fondo-serie-color">
          <div className="encabezado-pelicula-fondo">
            <p className="encabezado-pelicula-texto">Marvel Series</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="pelicula-1">
        <div className="pelicula-1-descripcion">
          <p className="pelicula-titulo">WandaVision</p>
          <p className="pelicula-texto">
            Three weeks after the events of Avengers: Endgame, Wanda Maximoff
            and Vision are living a dream life in the suburbs, in the small town
            of Westview, New Jersey, while trying to hide their powers. But as
            they pass through new decades and change television scenes, the
            couple begins to suspect that things are not what they seem.
          </p>
          <button className="pelicula-boton" type="submit">
            <a
              className="pelicula-enlace"
              href="https://www.disneyplus.com/es-419/series/wandavision/4SrN28ZjDLwH"
              target="blank"
            >
              watch serie
            </a>
          </button>
        </div>
        <div className="pelicula-1-imagen">
          <img src={wv} alt="" />
        </div>
      </div>
      
      <hr />

      <div className="pelicula-1">
          <div className="pelicula-1-imagen">
            <img src={fws} alt="" />
          </div>
          <div className="pelicula-1-descripcion">
            <p className="pelicula-titulo">Falcon and the Winter Soldier</p>
            <p className="pelicula-texto">
            Anthony Mackie and Sebastian Stan play Sam Wilson (Falcon) and
               Bucky Barnes (the Winter Soldier) in "Falcon and the Winter Soldier"
               Winter”, from Marvel Studios. The duo that formed at the end of
               “Avengers: Endgame” now springs into action on an adventure through the
               world that will test all your skills, even the
               patience.
            </p>
            <button className="pelicula-boton" type="submit">
              <a
                className="pelicula-enlace"
                href="https://www.disneyplus.com/es-419/series/falcon-y-el-soldado-del-invierno/4gglDBMx8icA"
                target="blank"
                >watch serie
                </a>
            </button>
          </div>
        </div>

        <hr />
        <div className="pelicula-1">
        <div className="pelicula-1-descripcion">
          <p className="pelicula-titulo">What IF...?</p>
          <p className="pelicula-texto">
          Marvel Studios' First Animated Series Reimagines Moments
               key to different sagas and gives them a twist. In the
               center of the scene, the figures of the Cinematic Universe of
               Marvel with the original voices of many returning stars
               your papers. Bryan Andrews directs, and A. C. Bradley is the screenwriter.
               major.
          </p>
          <button className="pelicula-boton" type="submit">
            <a
              className="pelicula-enlace"
              href="https://www.disneyplus.com/es-419/series/what-if/7672ZVj1ZxU9"
              target="blank"
            >
              watch serie
            </a>
          </button>
        </div>
        <div className="pelicula-1-imagen">
          <img src={wi} alt="" />
        </div>
      </div>
    </>
  );
};

export default Series;
