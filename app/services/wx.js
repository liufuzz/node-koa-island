const util = require('util')
const axios = require('axios')

const { User } = require('../model/user')
const { generateToken } = require('../../core/util')
const { Auth } = require('../../middlewares/auth')
const { AuthFailed } = require('../../core/http-exception')

class WXManager {
  static async codeToToken(code) {
    const url = await util.format(
      global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appSecret,
      code
    )

    console.log("TCL: WXManager -> codeToToken -> url", url)
    const result = await axios.get(url)

    if (result.stutas !== 200) {
      throw new AuthFailed('openid获取失败')
    }
    const errcode = result.data.errcode
    if (errcode !== 0) {
      throw new AuthFailed('openid获取失败:' + errcode)
    }

    let user = await User.getUserByOpenid(result.data.openid)
    if (!user) {
      user = await User.registerByOpenid(result.data.openid)
    }

    return generateToken(user.id, Auth.USER)
  }
}

module.exports = { WXManager }
