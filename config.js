/**
 * Created by bhavyaagg on 09/02/18.
 */

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
    DIALECT: 'postgres',
    USER: 'hbuser',
    PASSWORD: 'hbpass',
    HOST: 'localhost',
    PORT: 5432,
    NAME: 'hb',
    URI: `${config.DB.DIALECT}://${config.DB.USER}:${config.DB.PASSWORD}@${config.DB.HOST}:${config.DB.PORT}/${config.DB.NAME}`
  }
};

exports = module.exports = config;