module.exports = {
  environment: 'dev',
  database: {
    dbName: 'koa-island',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456'
  },
  security: {
    secretKey: 'abjkhduf',
    expiresIn: 60 * 60 * 24 * 30
  },
  wx: {
    appId: 'wxad099d0bc61c2a38',
    appSecret: '102fe502c5e0b4f0ed05b22b3df48692',
    loginUrl:
      'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}
