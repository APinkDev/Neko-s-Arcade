const express = require("express");
const routes = express.Router();
const Sequelize = require("sequelize");
const { Genero, Vidyagamezzz } = require("../db.js");
const {
  vidyarequest,
  pedirPorNombre,
  pedirPorId,
  pedirGeneros,
  createGame,
  gamesdb,
} = require("../api.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

routes.route("/videogame/:idVideogame").get(async (req, res) => {
  const { idVideogame } = req.params;
  if (!Number.isNaN(Number(idVideogame))) {
    let vidyagame = await pedirPorId(idVideogame);
    res.json(vidyagame);
  } else {
    let db = await Vidyagamezzz.findOne({
      where: { ID: idVideogame },
      include: { model: Genero },
    });
    res.json(db);
  }
});

routes.route("/videogames/genres").get(async (req, res) => {
  try {
    let search = await Genero.findAll();
    if (search.length === 0) {
      let vidyagame = await pedirGeneros();
      let genderList = await Promise.all(
        vidyagame.map((e) => Genero.create({ ID: e.ID, name: e.name }))
      );
      res.json(genderList);
    } else {
      res.json(search);
    }
  } catch (e) {
    res.status(400).json(e);
  }
});

routes.route("/videogames").get(async (req, res) => {
  let { name } = req.query;
  try {
    if (name !== undefined) {
      // console.log("AAAAAA: " , name)
      let vidyasearch = await pedirPorNombre(name);
      // let dbsearch = await Vidyagamezzz.findAll({where:{name}})
      let dbsearch = await Vidyagamezzz.findAll({
        where: {
          name: {
            [Sequelize.Op.iLike]: `${name}%`,
          },
        },
        include: Genero,
      });
      console.log("dbseacrh: ", dbsearch);
      if(dbsearch.length !== 0){
        let cont = dbsearch.map((e) => ({
          id: e.ID,
          name: e.name,
          released: e.released,
          rating: e.rating,
          background_image: e.background_image,
          platforms: e.platforms.split(","),
          genres: e.Generos.map((elemento) => elemento.name),
          description_raw: e.description_raw,
        }));
        let newcont = cont.pop();
        vidyasearch.push(newcont);
      }
      if (vidyasearch.length === 0) {
        res.status(400).json({ error: "bad request..." });
      } else {
        res.json(vidyasearch);
      }
    } else {
      let vidyagame = await vidyarequest();
      let db = await Vidyagamezzz.findAll({ include: { model: Genero } });
      let cont = db.map((e) => ({
        id: e.ID,
        name: e.name,
        released: e.released,
        rating: e.rating,
        background_image: e.background_image,
        platforms: e.platforms.split(","),
        genres: e.Generos.map((elemento) => elemento.name),
        description_raw: e.description_raw,
      }));
      vidyagame.push(cont);
      res.json(vidyagame);
    }
  } catch (e) {
    res.status(400).json({ error: "Vidya not found" + e });
  }
});

// routes.route("/dbgames").get(async (req, res) => {
//   try {
//     let vidyasearch = await gamesdb();
//     if (vidyasearch.length !== 0) {
//       res.json(vidyasearch);
//     }
//   } catch (e) {
//     res.status(400).json(`${e}`);
//   }
// });

routes.post("/create", createGame);

module.exports = routes;
