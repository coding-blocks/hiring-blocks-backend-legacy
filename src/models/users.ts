import jsonApi = require('jagapi')
import {createHandler} from "../handlers/sequelize"

const Joi = jsonApi.Joi
const sqlHandler = createHandler();

export interface User {
    id?: string,
    name: string,
    contact: string, // TODO: Confirm for +91 cases
    email: string,
    pincode?: number,
    image?: string
}

jsonApi.define<User>({
    namespace: 'json:api',
    resource: 'users',
    handlers: sqlHandler,
    primaryKey: 'autoincrement',
    attributes: {
        id: Joi.string(),
        name: Joi.string().required(),
        contact: Joi.string().required(),
        email: Joi.string().email().required(),
        pincode: Joi.number().allow(null),
        image: Joi.string().allow(null)
    },
    examples: [
        {
            type: 'users',
            name: 'Priyanshu Aggarwal',
            contact: '9643312345',
            email: 'priyanshu@cb.lk'
        },
        {
            type: 'users',
            name: 'Arnav Gupta',
            contact: '9643312346',
            email: 'a@cb.lk'
        },
        {
            type: 'users',
            name: 'Apoorvaa Gupta',
            contact: '9643312347',
            email: 'ag@cb.lk'
        }
    ]
})

sqlHandler.populate({force: true})
