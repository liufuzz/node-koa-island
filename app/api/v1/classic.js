const Router = require('koa-router')
const router = new Router()

router.get('/v1/classic/latest', (ctx, next) => {
  ctx.body = {key: 'classic'}
  throw new Error('api error')
})

module.exports = router
