import React from "react";
import { Link } from "react-router-dom";
import "./Videogame.css";

export default function Videogame({ id, name, background_image, genres }) {
  return (
    <div>
      <Link to={`/home/details/${id}`}>
        
        <div
          className="Videogame__All"
          style={{ backgroundImage: `url('${background_image}')` }}
        >
          <div className="Videogame__Container__Imagen">
            <div className="Videogame__Name">{name}</div>
            <div className="Videogame__Genres">
              {Array.isArray(genres) ? (
                genres.map((a) => (
                  <li key={a}>
                    <span>{a} </span>
                  </li>
                ))
              ) : (
                <span>No genres yet</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
