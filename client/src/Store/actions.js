import axios from "axios";

// Fetch Function

// export const Generate = (arg) => {
//   return function (dispatch) {
//     fetch(`/videogames?name=${arg}`)
//       .then((result) => result.json())
//       .then((r) => {
//         // console.log(r);
//         dispatch({ type: "GENERATE", payload: r });
//       });
//   };
// };

// Axios function

export const Generate = (arg) => {
  return async (dispatch) => {
    const response = await axios.get(`/videogames?name=${arg}`);
    if (response?.data) {
      dispatch({
        type: "GENERATE",
        payload: { videogames: response.data },
      });
    }
  };
};

// export const Randomize = () => {
//   return function (dispatch) {
//     fetch(`/videogames`)
//       .then((result) => result.json())
//       .then((r) => {
//         // console.log("aaaaaaaaaaaa");
//         return dispatch({
//           type: "RANDOMIZE",
//           payload: Array.isArray(r) && r.flat(),
//         });
//       });
//   };
// };

export const Randomize = () =>{
  return async (dispatch) => {
    const response = await axios.get(`/videogames`);
    if (response?.data){
      dispatch({
        type: "RANDOMIZE",
        payload: { videogames: Array.isArray(response.data) && response.data.flat()}
      })
    }
  }
}

// export const GetGenres = () => {
//   return function (dispatch) {
//     fetch(`/videogames/genres`)
//       .then((result) => result.json())
//       .then((r) => {
//         // console.log(r);
//         dispatch({ type: "GETGENRES", payload: r });
//       });
//   };
// };

export const GetGenres = () =>{
  return async (dispatch) => {
    const response = await axios.get(`/videogames/genres`);
    if (response?.data){
      dispatch({
        type: "GETGENRES",
        payload: { videogames: response.data}
      })
    }
  }
}

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

// export const Detailed = (id) => {
//   return function (dispatch) {
//     try {
//       fetch(`/videogame/${id}`)
//         .then((result) => result.json())
//         .then((r) => {
//           // console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",r);
//           dispatch({ type: "DETAILED", payload: r });
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const Detailed = (id) =>{
  return async (dispatch) => {
    const response = await axios.get(`/videogame/${id}`);
    if (response?.data){
      dispatch({
        type: "DETAILED",
        payload: { videogames: response.data}
      })
    }
  }
}


// export const Post = (inputs) => {
//   return function (dispatch) {
//     // console.log("CONCHA TU MADRE EXISTE!")
//     fetch("/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(inputs),
//     }).then((resu) => console.log(resu));
//   };
// };

// export const Post = (inputs) =>{
//   return async (dispatch) => {
//     const response = await axios.get("/create");
//     if (response?.data){
//       dispatch({
//         type: "DETAILED",
//         payload: { videogames: response.data}
//       })
//     }
//   }
// }

export const Post = function (inputs) {
  return function (dispatch) {
    return axios.post("/create", inputs).then((response) => {
      console.log(response);
    });
    //     dispatch({
    //         type: 'POST',
    //         payload: response.data
    //     })
    // })
  };
};