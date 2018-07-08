const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')

// const { createServer } = require('http');
// const { parse } = require('url');
// const { createReadStream } = require('fs');
// // const next = require('next');
// const handle = app.getRequestHandler();

app.prepare().then(() => {

  // createServer((req, res) => {
  //   const parsedUrl = parse(req.url, true);
  //   const { pathname } = parsedUrl;
  //
  //   console.log('req.url::: ', req.url, parsedUrl)
  //
  //
  //   if (pathname === '/service-worker.js') {
  //     console.log('attempt pathname:', pathname)
  //     res.setHeader('content-type', 'text/javascript');
  //     createReadStream('./sw/index.js').pipe(res);
  //   } else {
  //
  //     console.log('else:')
  //
  //     // express().use(handler).listen(3000)
  //     // handle(req, res, parsedUrl);
  //   }
  // })

  express().use(handler).listen(3000)






  // express().use(handler).listen(3000)
})



// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname } = parsedUrl;
//
//     if (pathname === '/sw.js') {
//       res.setHeader('content-type', 'text/javascript');
//       createReadStream('./offline/serviceWorker.js').pipe(res);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(3000, err => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });
