const initialState = {
  Videogame: [],
  Filtred: [],
  FiltredAZ: [],
  ApiGenres: [],
  Details: [],
  ApiGamez: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RANDOMIZE": {
      state = initialState;
      return {
        ...state,
        Videogame: state.Videogame.concat(action.payload.videogames),
      };
    }

    case "GENERATE": {
      state = initialState;
      return {
        ...state,
        Videogame: state.Videogame.concat(action.payload.videogames),
      };
    }

    case "GETGENRES": {
      state.ApiGenres = state.ApiGenres.slice(0, state.ApiGenres.length - 1);
      return {
        ...state,
        ApiGenres: state.ApiGenres.concat(action.payload.videogames),
      };
    }

    case "DETAILED": {
      state = initialState;
      return {
        ...state,
        Details: action.payload.videogames,
      };
    }

    case "FILTRATED":
      // {
        if (action.payload && state.Filtred.length === 0) {
          let flag = false;
          return {
            ...state,
            Filtred: state.Videogame.filter((element) => {
              for (let i = 0; i < action.payload.length; i++) {
                if (element && element.genres.includes(action.payload[i])) {
                  flag = true;
                } else {
                  flag = false;
                  break;
                }
              }
              return flag;
            }),
          };
        }
      // }
      if (action.payload && state.Filtred.length !== 0) {
        let flag = false;
        return {
          ...state,
          Filtred: state.Filtred.filter((element) => {
            for (let i = 0; i < action.payload.length; i++) {
              if (element && element.genres.includes(action.payload[i])) {
                flag = true;
              } else {
                flag = false;
                break;
              }
            }
            return flag;
          }),
        };

      }
      break;
    case "FILTRATEDAZ":
      if (action.payload === "") {
        return {
          ...state,
          Filtred: state.Videogame,
        };
      }

      if (action.payload === "AZ" && state.Filtred.length === 0) {
        return {
          ...state,
          Filtred: [...state.Videogame].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      }
      if (action.payload === "AZ" && state.Filtred.length !== 0) {
        return {
          ...state,
          Filtred: [...state.Filtred].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      }

      if (action.payload === "ZA" && state.Filtred.length === 0) {
        return {
          ...state,
          Filtred: [...state.Videogame].sort((b, a) =>
            a.name.localeCompare(b.name)
          ),
        };
      }
      if (action.payload === "ZA" && state.Filtred.length !== 0) {
        return {
          ...state,
          Filtred: [...state.Filtred].sort((b, a) =>
            a.name.localeCompare(b.name)
          ),
        };
      }

      if (action.payload === "RatingASC" && state.Filtred.length === 0) {
        // console.log(state.Videogame);
        return {
          ...state,
          Filtred: [...state.Videogame].sort((a, b) =>
            a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
          ),
        };
      }
      if (action.payload === "RatingASC" && state.Filtred.length !== 0) {
        return {
          ...state,
          Filtred: [...state.Filtred].sort((a, b) =>
            a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
          ),
        };
      }

      if (action.payload === "RatingDES" && state.Filtred.length === 0) {
        // console.log(state.Videogame);
        return {
          ...state,
          Filtred: [...state.Videogame].sort((a, b) =>
            a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
          ),
        };
      }
      if (action.payload === "RatingDES" && state.Filtred.length !== 0) {
        return {
          ...state,
          Filtred: [...state.Filtred].sort((a, b) =>
            a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
          ),
        };
      }

      break;

    case "FILTRATEDTYPE": {
      if (action.payload === "ALL") {
        return {
          ...state,
          Filtred: state.Videogame,
        };
      }
      if (action.payload === "API" && state.Filtred.length === 0) {
        return {
          ...state,
          Filtred: state.Videogame.filter((a) => !Number.isNaN(Number(a.id))),
        };
      }
      if (action.payload === "API" && state.Filtred.length !== 0) {
        return {
          ...state,
          Filtred: state.Filtred.filter((a) => !Number.isNaN(Number(a.id))),
        };
      }
      if (action.payload === "DB" && state.Filtred.length === 0) {
        return {
          ...state,
          Filtred: state.Videogame.filter((a) => Number.isNaN(Number(a.id))),
        };
      }
      if (action.payload === "DB" && state.Filtred.length !== 0) {
        return {
          ...state,
          Filtred: state.Filtred.filter((a) => Number.isNaN(Number(a.id))),
        };
      }
      break;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
