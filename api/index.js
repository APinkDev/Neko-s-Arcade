//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| owo |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const express=require('express');
const morgan=require('morgan');
const { conn } = require('./src/db.js');
const router = require('./src/routes/index.js');

server.use(express.json())
server.use(morgan('dev'))

server.use('/',router);

server.get('*',(req,res)=>{
  res.status(400).json({error:'page not found'})
})

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});

const cors = require("cors");
server.use(
  cors({
    origin: '*',
  })
);