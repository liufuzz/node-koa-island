class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
    super()
    this.msg = msg
    this.code = code
    this.errorCode = errorCode
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '参数错误'
    this.code = 400
    this.errorCode = errorCode || 10000
  }
}

class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || 'ok',
    this.code = 201,
    this.errorCode = errorCode || 0
  }
}

class NotFound extends HttpException{
  constructor(msg, errorCode) {
      super()
      this.msg = msg || '资源未找到'
      this.errorCode = errorCode || 10000
      this.code = 404
  }
}

class AuthFailed  extends HttpException {
  constructor(msg, errorCode) {
      super()
      this.msg = msg || '授权失败'
      this.errorCode = errorCode || 10004
      this.code = 401
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed
}
