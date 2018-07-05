const routes = module.exports = require('next-routes')()

routes
  .add('home', '/')
  .add('basket', '/basket')
  .add({name: 'plp', pattern: '/(glasses|sunglasses)', page: 'plisting' })
  .add({name: 'pdp', pattern: '/(glasses|sunglasses)/:slug', page: 'pdisplay'})



  // .add('plisting', '/glasses')
  // .add('plisting', '/:(glasses|sunglasses)', 'plisting')
  // .add('pdp', '/user/:id', 'profile')
  // .add('/:noname/:lang(en|es)/:wow+', 'complex')
  // .add({name: 'beta', pattern: '/v3', page: 'v3'})
