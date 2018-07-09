const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const path = require('path')
const express = require('express')

// const handler = routes.getRequestHandler(app)

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})

app.prepare().then(() => {
  express().use((req, res) => {
    if (req.url === '/sw.js') app.serveStatic(req, res, path.resolve('./static/sw.js'))
    else handler(req, res)
  }).listen(3000)
})
