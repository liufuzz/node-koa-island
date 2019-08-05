const Router = require('koa-router')
const { User } = require('../../model/user')
// const { RegisterValidator } = require('../../validators/validator')
const { Success } = require('../../../core/http-exception')

const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async (ctx, next) => {
  // const v = await new RegisterValidator().validate(ctx)

  const user = {
    email: '123456@qq.com',
    password: '1234$56',
    nickname: 'liuful'
  }
  await User.create(user)
  throw new Success()
})

module.exports = router
