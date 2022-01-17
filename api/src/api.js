const { default: axios } = require("axios");
const { Vidyagamezzz } = require("./db.js");
const { Genero } = require("./db.js");

module.exports = {
  vidyarequest: async () => {
    let contNum = [];
    for (let i = 0; i < 4; i++) {
      contNum.push(Math.floor(Math.random() * 201));
    }
    let cont = await Promise.all(
      contNum.map((e) =>
        axios
          .get(
            `https://api.rawg.io/api/games?page_size=30&page=${e}&key=ff2f1ede9a8e478ea044e252b0fc9334`
          )
          .then((r) => r.data.results)
          .then((res) => {
            let cajita = [];
            res.forEach((result) =>
              cajita.push({
                id: result.id,
                name: result.name,
                description_raw: result.description_raw,
                released: result.released,
                rating: result.rating,
                background_image: result.background_image,
                platforms:
                  result.platforms.length === 0
                    ? "no platforms"
                    : result.platforms.map((e) => e.platform.name),
                genres:
                  result.genres.length === 0
                    ? "sin genero"
                    : result.genres.map((e) => e.name),
              })
            );
            return cajita;
          })
      )
    );
    return cont;
  },

  getApiGames: async () => {
    try {
      let cont = axios
        .get(`http://localhost:3001/dbgames`)
        .then((resultado) => resultado.data)
        .then((res) => {
          console.log(res);
          let cajita = [];
          res.map((result) =>
            cajita.push({
              id: result.id,
              name: result.name,
              released: result.released,
              background_image: result.background_image,
              rating: result.rating,
              platforms: result.platforms,
            })
          );
          return cajita;
        });

      return cont;
    } catch (e) {
      console.log(e);
    }
  },

  gamesdb: () => {
    let db = Vidyagamezzz.findAll();
    console.log("games from db: " + JSON.stringify(db));
    return db;
  },

  pedirPorId: (id) => {
    let cont = axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=ff2f1ede9a8e478ea044e252b0fc9334`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resort) => {
        for (property in resort) {
          return {
            id: resort.id,
            name: resort.name,
            description_raw: resort.description_raw,
            released: resort.released,
            rating: resort.rating,
            background_image: resort.background_image,
            platforms:
              resort.platforms.length === 0
                ? "no platforms"
                : resort.platforms.map((e) => e.platform.name),
            genres:
              resort.genres.length === 0
                ? "sin genero"
                : resort.genres.map((e) => e.name),
          };
        }
        return property;
      });
    return cont;
  },

  pedirPorNombre: (name) => {
    let cont = axios
      .get(
        `https://api.rawg.io/api/games?search=/${name}&key=ff2f1ede9a8e478ea044e252b0fc9334`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resort) => {
        let cajita = [];
        resort.results.forEach((result) =>
          cajita.push({
            id: result.id,
            name: result.name,
            released: result.released,
            rating: result.rating,
            description_raw: resort.description_raw,
            background_image: result.background_image,
            platforms:
              result.platforms.length === 0
                ? "no platforms"
                : result.platforms.map((e) => e.platform.name),
            genres:
              result.genres.length === 0
                ? "sin genero"
                : result.genres.map((e) => e.name),
          })
        );
        return cajita;
      });
    return cont;
  },

  pedirGeneros: () => {
    let cont = axios
      .get(
        `https://api.rawg.io/api/genres?key=ff2f1ede9a8e478ea044e252b0fc9334`
      )
      .then((resultado) => (resultado = resultado.data))
      .then((resort) => {
        let cajita = [];
        resort.results.forEach((result) =>
          cajita.push({
            ID: result.id,
            name: result.name,
            games_count: result.games_count,
            games:
              result.games.length === 0
                ? "no games"
                : result.games.map((e) => e.name),
          })
        );

        return cajita;
      });
    return cont;
  },

  async createGame(req, res) {
    const {
      name,
      released,
      background_image,
      rating,
      platforms,
      ID,
      description_raw,
    } = req.body;

    let contenedor = ""
    contenedor = platforms.join(",");
    // console.log("id de create: ", ID, "platforms: ", platforms, "contenedor: ",contenedor);
    
      const [key, value] = await Vidyagamezzz.findOrCreate({
        where: { name },
        defaults: {
          released,
          background_image,
          rating,
          platforms: contenedor,
          description_raw,
        },
      });
      // console.log("key ", key )
      const genr = await Genero.findAll({
        where: { ID },
      });
      // console.log("genr", genr)
      await key.addGeneros(genr);
      res.json(key);
    
  },
};
