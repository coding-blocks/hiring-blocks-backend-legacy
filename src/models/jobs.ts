/**
 * Created by bhavyaagg on 09/02/18.
 */

import jsonAPI = require('jagapi')
import {BaseType} from "jagapi";
import {createHandler} from "../handlers/sequelize"
import {Company} from "./companies";

const Joi = jsonAPI.Joi
const sqlHandler = createHandler();

// TODO: Currently a lot of the attributes are optional

export interface Job {
  id?: string,
  title: string,
  desc?: string,
  skills?: string[],
  locations?: string[],
  jobType?: string,
  salary?: string, // TODO: Confirm for 10k Cases as well as Currency
  status?: string, // TODO: Should be Enum
  startDate?: Date,
  endDate?: Date,
  deadline?: Date,
  questions?: string[],
  noOfPositions?: number,
  jobDescriptionLink?: string, // TODO: Discuss if this should be a S3 link to something else
  company: Company | BaseType
}

jsonAPI.define<Job>({
  namespace: 'json:api',
  resource: 'jobs',
  handlers: sqlHandler,
  primaryKey: 'autoincrement',
  attributes: {
    id: Joi.string(),
    title: Joi.string().required(),
    company: Joi.one('companies').uidType("autoincrement").required()
  },
  examples: [
    {
      type: 'jobs',
      title: 'Teaching Assistant',
      company: {
        id: '1',
        type: 'companies',
      }
    }
  ]
})

sqlHandler.populate({force: true})
