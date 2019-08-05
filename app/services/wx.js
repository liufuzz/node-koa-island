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
    if (result.status !== 200) {
      throw new AuthFailed('openid获取失败---')
    }
    console.log(result.data)
    const errcode = result.data.errcode
    const errmsg = result.data.errmsg
    if (errcode) {
      throw new AuthFailed('openid获取失败:' + errmsg)
    }

    let user = await User.getUserByOpenid(result.data.openid)
    if (!user) {
      user = await User.registerByOpenid(result.data.openid)
    }

    return generateToken(user.id, Auth.USER)
  }
}

module.exports = { WXManager }
