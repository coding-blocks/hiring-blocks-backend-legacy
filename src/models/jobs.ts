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
  skills: string[],
  locations?: string[],
  jobType: string, // Can be Job, Internship or Freelance Work
  salary?: string, // TODO: Confirm for 10k Cases as well as Currency
  status?: string, // TODO: Should be Enum
  startDate: Date | string, // TODO: Confirm if need string or not and for endDate and deadline as well
  endDate?: Date | string,
  deadline: Date | string,
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
})

sqlHandler.populate({force: true})
