/**
 * Created by bhavyaagg on 09/02/18.
 */

import jsonAPI = require('jagapi')
import {createHandler} from "../handlers/sequelize"
import {Job} from "./jobs";

const Joi = jsonAPI.Joi
const sqlHandler = createHandler();

export interface Company {
  id?: string,
  name: string,
  logo?: string, // TODO: Confirm
  website?: string,
  locations: string[], // Can be online
  skills?: string[],
  email: string,
  phnNo?: string, // TODO: Confirm for +91 cases
  contactName: string,
  contactEmail?: string,
  contactPhnNo?: string // TODO: Same as above,
  jobs?: Job        // TODO: Maybe Error in Jagapi. Solve Later
}

jsonAPI.define<Company>({
  namespace: 'json:api',
  resource: 'companies',
  handlers: sqlHandler,
  primaryKey: 'autoincrement',
  attributes: {
    id: Joi.string(),
    name: Joi.string().required(),
    locations: Joi.array().items(Joi.string()).required(),
    contactName: Joi.string().required(),
    email: Joi.string().email().required(),
  },
  examples: [
    {
      type: 'companies',
      name: 'Coding Blocks',
      locations: [
        'Pitampura',
        'Dwarka'
      ],
      contactName: 'Priyanshu Aggarwal',
      email: 'dev@codingblocks.com'
    }
  ]
})

sqlHandler.populate({force: true})
