const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')

const catchError = require('./middlewares/excetpion')

const app = new Koa()

InitManager.initCore(app)
app.use(catchError)
app.use(parser())


app.listen(3000)
