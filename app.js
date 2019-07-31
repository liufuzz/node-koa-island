const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')

const catchError = require('./middlewares/exception')

const app = new Koa()

app.use(catchError)

InitManager.initCore(app)
app.use(parser())


app.listen(3000)
