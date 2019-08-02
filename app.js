const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')

const catchError = require('./middlewares/exception')

// require('./app/model/user')

const app = new Koa()

app.use(catchError)

InitManager.initCore(app)
app.use(parser())


app.listen(3000)
