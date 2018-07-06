const routes = module.exports = require('next-routes')()

routes
  .add('home', '/')
  .add('basket', '/basket')
  .add('contacts', '/contacts')
  .add({name: 'plp', pattern: '/(glasses|sunglasses)', page: 'plisting' })
  .add({name: 'pdp', pattern: '/(glasses|sunglasses)/:slug', page: 'pdisplay'})
