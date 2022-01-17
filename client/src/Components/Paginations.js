import React from "react";
import "./Paginations.css"

const Paginations = ({ gamesPerPage, totalGames, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="Pagination__ul">
        {pageNumbers.map(number => (
          <li  key={number} className="Pagination__Li">
            <button onClick={() => paginate(number)} className="Pagination__Button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginations;
