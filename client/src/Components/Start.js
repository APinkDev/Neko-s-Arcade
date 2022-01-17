import React from "react";
import "./Start.css";
import { Link } from "react-router-dom";
import NekoLogo from "../rsc/NekoLogo.png";

const Start = () => {
  return (
    <div className="Background">
      <div className="Container__Out">
        <div className="Container__Left">
          <h2 className="Text__Intro">
            {" "}
            Welcome to my game room, a place where time does not matter, where
            your mind begins to become one with your computer, where you can
            spend time without annoying thoughts ~
          </h2>
          '
          <p className="Text__Warning">
            Warning: the page may contain highly addictive material, any problem
            related to [redacted] must be notified to the SCP foundation
            immediately.
          </p>
        </div>

        <div className="Container__Right">
          <h1 className="Text__Title">Neko's Arcade</h1>
          <Link to="/home">
            <img className="NekoButtom" src={NekoLogo} alt="startLogo"></img>
          </Link>
          <h1 className="Text__Decoration">Insert A Coin</h1>
        </div>
      </div>
    </div>
  );
};

export default Start;
