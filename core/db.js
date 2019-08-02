const Sequelize = require('sequelize')
const { dbName, host, user, port, password } = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true,
    paranoid: true
  }
})

sequelize.sync({
  force: true
})

module.exports = {
  sequelize
}