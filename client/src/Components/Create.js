import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetGenres } from "../Store/actions.js";
import { Post } from "../Store/actions.js";
import "./Create.css";
export default function Create() {
  const dispatch = useDispatch();

  const generos = useSelector((state) => state.ApiGenres);

  const validate = (inputs) =>{
    let error = {};
    if (!inputs.name){
      error.name = "Name required"
    }
    else if (!inputs.released){
      error.released = "released required"
    }
    else if (!inputs.background_image){
      error.background_image = "background_image required"
    }
    else if (!inputs.rating){
      error.rating = "rating required"
    }
    else if (!inputs.platforms){
      error.platforms = "platforms required"
    }
    else if (!inputs.description_raw){
      error.description_raw = "description_raw required"
    }
    return error
  }


const [inputs,setInputs]=useState({
  ID:[],
  name:"",
  released:"",
  background_image:"",
  rating:"",
  platforms:[],
  description_raw:""
})

  React.useEffect(() => {
    dispatch(GetGenres());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = Object.keys(validate(inputs))
        if (error.length !== 0) {
            alert('Rellenar los campos')
        }
    // console.log(inputs,"Fase terminada")
    else{
    console.log("resultado final: ",inputs)
    alert("well done! uwu")
    dispatch(Post(inputs))
      setInputs({
      ID:[],
      name:"",
      released:"",
      background_image:"",
      rating:"",
      platforms:[],
      description_raw:""
    })
  }
  };

  return (
    <div className="Create">
      <h1 className="Create__Title">Create a Videogame!</h1>
      <Link to="/home">
        <button className="Create__HomeButtom">Go Back</button>
      </Link>

      <div className="Create__Container">
        <form onSubmit={handleSubmit}>
          <div className="Create__3bars">
            <input
              className="Create__Text"
              type="text"
              name="name"
              placeholder="name of the game..."
              value={inputs.name}
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Rating"
              type="number"
              name="rating"
              value={inputs.rating}
              placeholder="rating..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <input
              className="Create__Date"
              type="date"
              name="released"
              value={inputs.released}
              placeholder="date of launch..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
          </div>

          <div className="Create__1bar2selects">
            <textarea
              className="Create__Description"
              name="description_raw"
              value={inputs.description_raw}
              placeholder="description..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></textarea>

            <select
              className="Create__Genre"
              name="ID"
              type="select-multiple"
              placeholder="Select 1 or more genres..."
              value={inputs.ID}
              onChange={(evt) =>
                setInputs({...inputs,[evt.target.name]:inputs.ID.concat(evt.target.value)})
              }
            >
              {generos.map((e, index) => (
                <option key={index} value={e.ID}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <select
            name="platforms" 
            type="select-multiple"
            placeholder="Select 1 or more platforms..."
            value={inputs.platforms}
            onChange={evt =>
              setInputs({...inputs,[evt.target.name]:inputs.platforms.concat(evt.target.value)})
            }
            className="Create__Platform"
          >
            <option value="PC">PC</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox One">Xbox One</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="Xbox Series S/X">Xbox Series S/X</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
            <option value="Nintendo 3DS">Nintendo 3DS</option>
            <option value="Nintendo DS">Nintendo DS</option>
            <option value="Nintendo DSi">Nintendo DSi</option>
            <option value="macOS">macOS</option>
            <option value="Linux">Linux</option>
            <option value="Xbox 360">Xbox 360</option>
            <option value="Xbox">Xbox</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="PlayStation">PlayStation</option>
            <option value="PS Vita">PS Vita</option>
            <option value="PSP">PSP</option>
            <option value="Wii U">Wii U</option>
            <option value="Wii">Wii</option>
            <option value="GameCube">GameCube</option>
            <option value="Nintendo 64">Nintendo 64</option>
            <option value="Game Boy Advance">Game Boy Advance</option>
            <option value="Game Boy Color">Game Boy Color</option>
            <option value="Game Boy Advance">Game Boy Advance</option>
            <option value="Game Boy">Game Boy</option>
            <option value="SNES">SNES</option>
            <option value="NES">NES</option>
            <option value="Atari 7800">Atari 7800</option>
            <option value="Classic Macintosh">Classic Macintosh</option>
            <option value="Apple II">Apple II</option>
            <option value="Commodore / Amiga">Commodore / Amiga</option>
            <option value="Atari 5200">Atari 5200</option>
            <option value="Atari 2600">Atari 2600</option>
            <option value="Atari Flashback">Atari Flashback</option>
            <option value="Atari 8-bit">Atari 8-bit</option>
            <option value="Atari ST">Atari ST</option>
            <option value="Atari Lynx">Atari Lynx</option>
            <option value="Atari XEGS">Atari XEGS</option>
            <option value="Genesis">Genesis</option>
            <option value="SEGA Saturn">SEGA Saturn</option>
            <option value="SEGA CD">SEGA CD</option>
            <option value="SEGA 32X">SEGA 32X</option>
            <option value="SEGA Master System">SEGA Master System</option>
            <option value="Dreamcast">Dreamcast</option>
            <option value="Game Gear">Game Gear</option>
            <option value="Neo Geo">Neo Geo</option>
          </select>

          <div className="Create__1bar1buttom">
            <input
              className="Create__URL"
              type="url"
              name="background_image"
              value={inputs.background_image}
              placeholder="Url link..."
              onChange={(evt) => setInputs({...inputs,[evt.target.name]:evt.target.value})}
            ></input>
            <button type="submit" className="Create__Create">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
