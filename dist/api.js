"use strict";
/**
 * Created by bhavyaagg on 09/02/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dbg = require("debug");
const jsonAPI = require("jagapi");
const config = require("../config");
const debug = dbg('hb');
jsonAPI.setConfig({
    graphiql: true,
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
});
jsonAPI.authenticate((req, cb) => {
    return cb();
});
require('./models');
exports.server = jsonAPI.getExpressServer();
exports.start = jsonAPI.start;
exports.close = jsonAPI.close;
//# sourceMappingURL=api.js.map