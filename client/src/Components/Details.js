import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Detailed } from "../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Details.css";
import scroll from "../rsc/Scroll.png";
import SrollingMouse from "../rsc/ScrollDown.gif";

const Details = () => {
  let { id: code } = useParams();
  let [id] = useState(code);
  const dispatch = useDispatch();
  const detailed = useSelector((state) => state.Details);
  
  useEffect(() => {
    dispatch(Detailed(id));
  }, [id, dispatch])

let platArray = []
  
if (typeof(detailed.platforms) === "string" && detailed.platforms.includes(",")){
  platArray=detailed.platforms.split(",");
}
else if(typeof(detailed.platforms) === "string" && !detailed.platforms.includes(",")){
  platArray=[detailed.platforms] //platArray=["Action"]
}

console.log("generos:",detailed.Generos)
let GenArray = detailed.Generos && detailed.Generos.length? detailed.Generos.map((e)=>e.name):detailed.genres
console.log("gen array: ", GenArray)

  return (
    <div className="Background__Details">
      <div className="Back__Buttom">
        <Link to="/home">
          <button className="HomeButtom">←</button>
        </Link>
      </div>
      
      <div>
        <img className="Mouse__Scroll__1" src={SrollingMouse} alt="scrolling Mouse"></img>
      </div>

      <div className="Name__Details">{detailed.name}</div>
      <div className="Released__Details">{detailed.released}</div>

      <div className="Rating">Rating:💖{detailed.rating}</div>

      <div className="GameImg">
        <img
          className="GameImg__img"
          src={detailed.background_image}
          alt="background"
        ></img>
      </div>
      <div className="Genre__Container__Details">
        <div className="Genre__Details">
          {Array.isArray(GenArray) ? (
            GenArray.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
          ) : (
            <span>No genres yet</span>
          )}
        </div>
      </div>
      <div>
        <img className="GameDescription__Container" src={scroll} alt="scrolling Mouse"></img>
        <div className="GameDescription">{detailed.description_raw}</div>
      </div>

      <div className="Platform__Container__Detailed">
        <div className="Platfom__Detailed">
          {
            Array.isArray(platArray) && platArray.length ? (
            platArray.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
            ): (
            detailed.platforms&&detailed.platforms.map((a)=>(
              <li key={a}>
                <span>{a}</span>
                </li>
            ))
          )}

        </div>
      </div>

      <div>
      <img className="Mouse__Scroll__2" src={SrollingMouse} alt="scrolling Mouse"></img>
      </div>
    </div>
  );
};

export default Details;
