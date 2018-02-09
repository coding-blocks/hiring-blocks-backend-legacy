"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by bhavyaagg on 09/02/18.
 */
const dbg = require("debug");
const SQLStore = require("jagapi-sequelize");
const config = require("../../config");
const debug = dbg('hb:sql');
exports.createHandler = () => new SQLStore({
    dialect: config.DB.DB_DIALECT,
    host: config.DB.DB_HOST,
    port: config.DB.DB_PORT,
    database: config.DB.DB_NAME,
    username: config.DB.DB_USER,
    password: config.DB.DB_PASS,
    logging: debug
});
//# sourceMappingURL=sequelize.js.map