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
    resource: 'jobs',
    handlers: sqlHandler,
    primaryKey: 'autoincrement',
    attributes: {
        id: Joi.string(),
        title: Joi.string().required(),
        skills: Joi.array().items(Joi.string()).required(),
        jobType: Joi.string().required(),
        startDate: Joi.date().required(),
        deadline: Joi.date().required(),
        company: Joi.one('companies').uidType("autoincrement").required()
    },
    examples: [
        {
            type: 'jobs',
            title: 'Teaching Assistant',
            skills: ['C++'],
            jobType: 'Internship',
            startDate: new Date('2018-02-04'),
            deadline: new Date('2018-04-15'),
            company: {
                id: '1',
                type: 'companies',
            }
        }
    ]
});
sqlHandler.populate({ force: true });
//# sourceMappingURL=jobs.js.map