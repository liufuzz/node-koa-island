const Router = require('koa-router')

const { TokenValidator } = require('../../validators/validator')
const { ParameterException } = require('../../../core/http-exception')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../model/user')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')
const { WXManager } = require('../../services/wx')

const router = new Router({
  prefix: '/v1/token'
})

router.post('/', async (ctx, next) => {
  const v = await new TokenValidator().validate(ctx)
  let token;
  switch(v.get('body.type')) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(v.get('body.account'), v.get('body.secret'))
      break;
    case LoginType.USER_MINI_PROGRAM:
      token = await WXManager.codeToToken(v.get('body.account'))
      break;
    default: 
    throw new ParameterException('没有相应处理函数')
  }
  ctx.body = {
    token
  }
})

async function emailLogin(account, secret) {
  const user = await User.verifyEmailPassword(account, secret)
  return generateToken(user.id, Auth.USER)
}

module.exports = router
