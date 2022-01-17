import React from "react";
import "./FiltredButton.css"
export default function FiltredButton({ Filtred }) {

  const [buton, setButon] = React.useState([]);
  const handleOnClick = (e) => {
    e.target.disabled = true;

    setButon((element) => [...element, e.target.value]);
  };
  const handleOnSubmit = (e) => {
    
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].disabled = false;
    }
    setTimeout(() => {
      Filtred(buton);
      setButon([]);
    },1000)
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>

        <button onClick={handleOnClick} value="Action">
          Action
        </button>
        <button onClick={handleOnClick} value="Indie">
          Indie
        </button>
        <button onClick={handleOnClick} value="Adventure">
          Adventure
        </button>
        <button onClick={handleOnClick} value="RPG">
          RPG
        </button>
        <button onClick={handleOnClick} value="Strategy">
          Strategy
        </button>
        <button onClick={handleOnClick} value="Shooter">
          Shooter
        </button>
        <button onClick={handleOnClick} value="Casual">
          Casual
        </button>
        <button onClick={handleOnClick} value="Simulation">
          Simulation
        </button>
        <button onClick={handleOnClick} value="Puzzle">
          Puzzle
        </button>
        <button onClick={handleOnClick} value="Arcade">
          Arcade
        </button>
        <button onClick={handleOnClick} value="Platformer">
          Platformer
        </button>
        <button onClick={handleOnClick} value="Racing">
          Racing
        </button>
        <button onClick={handleOnClick} value="Massively Multiplayer">
          MMO
        </button>
        <button onClick={handleOnClick} value="Sports">
          Sports
        </button>
        <button onClick={handleOnClick} value="Fighting">
          Fighting
        </button>
        <button onClick={handleOnClick} value="Family">
          Family
        </button>
        <button onClick={handleOnClick} value="Board Games">
          Board Games
        </button>
        <button onClick={handleOnClick} value="Educational">
          Educational
        </button>
        <button onClick={handleOnClick} value="Card">
          Card
        </button>

        <button className="FIltred__Filter" type="submit">Apply Filters</button>
      </form>
    </div>
  );
}
