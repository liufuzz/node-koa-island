module.exports = {
  environment: 'dev',
  database: {
    dbName: 'koa-island',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
  },
  security: {
    secretKey: 'abjkhduf',
    expiresIn: 60 * 60 * 24 * 30
  },
  wx: {
    appId: 'wxad099d0bc61c2a38',
    appSecret: 'eab778b10f063b39adb2584b70ee7442',
    loginUrl:
      'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}
