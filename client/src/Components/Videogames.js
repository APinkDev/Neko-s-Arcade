import React from "react";
import Videogame from "./Videogame";
export default function Videogames({ videogames, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Videogames">
      {videogames &&
        videogames.map((e) => (
          <Videogame
            key={e.id}
            name={e.name}
            id={e.id}
            released={e.released}
            rating={e.rating}
            background_image={e.background_image}
            platforms={e.platforms}
            genres={e.genres}
          />
        ))}
    </div>
  );
}
