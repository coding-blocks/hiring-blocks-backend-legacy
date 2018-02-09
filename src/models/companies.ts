/**
 * Created by bhavyaagg on 09/02/18.
 */

import jsonAPI = require('jagapi')
import {createHandler} from "../handlers/sequelize"

const Joi = jsonAPI.Joi
const sqlHandler = createHandler();

export interface Company {
  id?: string,
  name: string,
  logo?: string, // TODO: Confirm
  website?: string,
  locations?: string[],
  skills?: string[],
  email: string,
  phnNo?: string, // TODO: Confirm for +91 cases
  contactName?: string,
  contactEmail?: string,
  contactPhnNo?: string // TODO: Same as above
}

jsonAPI.define<Company>({
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
})