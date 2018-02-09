/**
 * Created by bhavyaagg on 09/02/18.
 */

import dbg = require('debug')
import jsonAPI = require('jagapi')
import config = require('../config')

const debug = dbg('hb');

jsonAPI.setConfig({
  graphiql: false,
  jsonapi: true,
  protocol: 'http',
  hostname: config.SERVER.HOST,
  port: config.SERVER.PORT,
  base: 'api',
  meta: {
    description: config.INFO.DESC,
  },
  swagger: {
    title: config.INFO.TITLE,
    version: '0.1.0',
    description: config.INFO.DESC,
    contact: {
      name: config.INFO.CONTACT.NAME,
      email: config.INFO.CONTACT.EMAIL,
      url: config.INFO.CONTACT.URL,
    },
    license: {
      name: 'MIT',
      url: 'http://opensource.org/licenses/MIT',
    },
  },
})

jsonAPI.authenticate((req, cb) => {
  return cb()
})

export const server = jsonAPI.getExpressServer()
export const start = jsonAPI.start
export const close = jsonAPI.close
