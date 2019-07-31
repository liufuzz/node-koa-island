const Router = require('koa-router')
const router = new Router()

const { ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  
  const v = new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id')
})

module.exports = router
