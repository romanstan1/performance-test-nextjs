const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')

//
// const expressInstance = express();
// // expressInstance.use(cors());
// expressInstance.use(express.static("public"));
// expressInstance.get("/images-glasses", stubData);

// With express
app.prepare().then(() => {
  express().use(handler).listen(3000)
})
//
// function stubData(req, res) {
//   return res.json(
//     [
//       {something: 'Here it is'},
//       {somethingelse: 'Here it is again'},
//     ]
//   )
// }
// //
// import express from "express";
// import cors from "cors";
// import App from "../shared/App";
// import "source-map-support/register";
// import "isomorphic-fetch";
// import stubData from './stubData.js'
// import handleRender from './handleRender.js'
//
// const app = express();
//
// app.use(cors());
// app.use(express.static("public"));
// app.get("/api/stubData", stubData);
// app.get("*", handleRender);
//
// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is listening");
// });
