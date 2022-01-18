export const Generate = (arg) => {
  return function (dispatch) {
    try {
      fetch(`https://nekosarcade.herokuapp.com/videogames?name=${arg}`)
        .then((result) => result.json())
        .then((r) => {
          // console.log(r);
          dispatch({ type: "GENERATE", payload: r });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const Randomize = () => {
  return function (dispatch) {
    fetch(`https://nekosarcade.herokuapp.com/videogames`)
      .then((result) => result.json())
      .then((r) => {
        console.log("aaaaaaaaaaa");
        return dispatch({
          type: "RANDOMIZE",
          payload: Array.isArray(r) && r.flat(),
        });
      });
  };
};

export const GetGenres = () => {
  return function (dispatch) {
    fetch(`https://nekosarcade.herokuapp.com/videogames/genres`)
      .then((result) => result.json())
      .then((r) => {
        // console.log(r);
        dispatch({ type: "GETGENRES", payload: r });
      });
  };
};

export const Filtrated = (arg) => {
  return {
    type: "FILTRATED",
    payload: arg,
  };
};

export const FiltratedAZ = (arg) => {
  return {
    type: "FILTRATEDAZ",
    payload: arg,
  };
};
export const FiltratedType = (arg) => {
  // console.log("momento: ",arg)
  return {
    type: "FILTRATEDTYPE",
    payload: arg,
  };
};

export const Detailed = (id) => {
  return function (dispatch) {
    try {
      fetch(`https://nekosarcade.herokuapp.com/videogame/${id}`)
        .then((result) => result.json())
        .then((r) => {
          // console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",r);
          dispatch({ type: "DETAILED", payload: r });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
export const Post = (inputs) => {
  return function (dispatch) {
    // console.log("CONCHA TU MADRE EXISTE!")
    fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then((resu) => console.log(resu));
  };
};
