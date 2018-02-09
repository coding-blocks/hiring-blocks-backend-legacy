"use strict";
/**
 * Created by bhavyaagg on 09/02/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const jsonAPI = require("jagapi");
const sequelize_1 = require("../handlers/sequelize");
const Joi = jsonAPI.Joi;
const sqlHandler = sequelize_1.createHandler();
jsonAPI.define({
    namespace: 'json:api',
    resource: 'companies',
    handlers: sqlHandler,
    primaryKey: 'autoincrement',
    attributes: {
        id: Joi.string(),
        name: Joi.string().required(),
        email: Joi.string().email().required()
    },
    examples: [
        {
            type: 'companies',
            name: 'Coding Blocks',
            email: 'dev@codingblocks.com'
        }
    ]
});
sqlHandler.populate({ force: true });
//# sourceMappingURL=companies.js.map