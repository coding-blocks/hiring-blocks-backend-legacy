/**
 * Created by bhavyaagg on 09/02/18.
 */

const DB_DIALECT = 'postgres'
const DB_USER = 'hbuser'
const DB_PASSWORD = 'hbpass'
const DB_HOST = 'localhost'
const DB_PORT = 5432
const DB_NAME = 'hb'

const config = {
  INFO: {
    TITLE: 'Hiring Blocks API',
    DESC: 'Coding Blocks Hiring Portal API Server',
    CONTACT: {
      NAME: 'Coding Blocks',
      EMAIL: 'dev@codingblocks.com',
      URL: 'https://codingblocks.com'
    }
  },
  SERVER: {
    PORT: 9090,
    HOST: 'localhost'
  },
  DB: {
    DB_DIALECT, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME,
    DB_URI: `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
  }
};

exports = module.exports = config;