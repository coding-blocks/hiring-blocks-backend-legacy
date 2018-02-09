/**
 * Created by bhavyaagg on 09/02/18.
 */
import dbg = require('debug')
import SQLStore = require('jagapi-sequelize')
import config = require('../../config')

const debug = dbg('hb:sql')

export const createHandler = () => new SQLStore({
  dialect: config.DB.DB_DIALECT,
  host: config.DB.DB_HOST,
  port: config.DB.DB_PORT,
  database: config.DB.DB_NAME, // If not provided, defaults to the name of the resource
  username: config.DB.DB_USER,
  password: config.DB.DB_PASS,
  logging: debug
})
