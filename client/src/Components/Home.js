import React, { useState, useEffect } from "react";
import "./Home.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Generate, Randomize, Filtrated, FiltratedAZ, FiltratedType } from "../Store/actions"; 
import { GetGenres } from "../Store/actions";
import { useSelector, useDispatch } from "react-redux";
import Paginations from "./Paginations";
import Videogames from "./Videogames";
import FiltredButton from "./FiltredButton";
import AlphabetButton from "./AlphabetButton";
import NekoLogo from "../rsc/NekoLogo.png";
import DancingCreate from "../rsc/smug_easter_egg.gif";
import APIbuttom from "./APIButtom";

export default function Home() {
  const videogame = useSelector((state) => state.Videogame);
  const filter = useSelector((state) => state.Filtred);
  // const filterAZ = useSelector((state) => state.FiltredAZ);

  const dispatch = useDispatch();


  const GettingGenres = (arg) => {
    dispatch(GetGenres(arg));
  };

  const [container, setContainer] = useState([]);
 
  useEffect(() => {
    dispatch(Randomize());
  }, [dispatch]);

  React.useEffect(() => {
    if (videogame && filter.length === 0) {
      setContainer(videogame);
      // alert('algo')
    } else {
      setContainer(filter);
    }
  }, [filter, videogame]);
  
  // React.useEffect(() => {
  //   if (videogame && filterAZ.length === 0) {
  //     setContainer(videogame);
  //     // alert('algo')
  //   } else {
  //     setContainer(filterAZ);
  //   }
  // }, [filterAZ, videogame]);

  const resetFilter = () => {
    dispatch(Randomize());
  }

  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  const indexOfLastPost = currentPage * gamesPerPage;
  const indexOfFirstPost = indexOfLastPost - gamesPerPage;
  const currentPost = container.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const Search = (arg) => {
    arg === ""
      ? dispatch(Randomize())
      : //else
        dispatch(Generate(arg));
  };

  const Filtred = (arg) => {
    dispatch(Filtrated(arg));
  };
  const FiltredAZ = (arg) => {
    dispatch(FiltratedAZ(arg));
  };
  const FilterType = (arg) => {
    // console.log("pressed : ", arg )
    dispatch(FiltratedType(arg));
  }
  console.log("videogame: ",videogame)

  return (
    <div className="Home">
    <button className="Home__reset" onClick={resetFilter} >🔄</button>
      <div className="Home__Banner">
        
        <div className="Home__Container__NekoLogo">
          <Link to="/">
            <img className="Home__NekoLogo" src={NekoLogo} alt="Neko_Logo"></img>
          </Link>
        </div>
        <div>
          <div className="Home__Genres">
            <FiltredButton
              GettingGenres={GettingGenres}
              Filtred={Filtred}
            ></FiltredButton>
          </div>

          <div className="Home__Container__MinorFilters">
            <div className="Home__Container__SearchBar">
              <SearchBar search={Search}></SearchBar>
            </div>
            <div className="Home__Container__CreateFilter">
              <APIbuttom FilterType={FilterType}></APIbuttom>
            </div>
            <div className="Home__Container__AZFilter">
              <AlphabetButton FiltredAZ={FiltredAZ}></AlphabetButton>
            </div>
          </div>
        </div>

        <div className="Home__Container__CreateButtom">
          <Link to="/home/create">
            <img className="Home__CreateButtom" src={DancingCreate} alt="Create_buttom"></img>
            <p className="Home__CreateButtom__text">To Create</p>
          </Link>
        </div>
      </div>

      <div className="Home__AllContainer">
        {/* Container Total */}
        <div className="Home__LeftContainer">
          {/* Izquierda (busqueda, check, A-z and rating selector, page numbers) */}
          <Paginations
            gamesPerPage={gamesPerPage}
            totalGames={container.length}
            paginate={paginate}
          />
        </div>

        <div className="Home__ZoneContainer">
          {/* Derecha (Contenedor de la games zone) */}
          <div className="Home__GamesZone">
          <Videogames videogames={currentPost} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
