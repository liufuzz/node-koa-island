
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.body = 'sssss'
  }
}

module.exports = catchError