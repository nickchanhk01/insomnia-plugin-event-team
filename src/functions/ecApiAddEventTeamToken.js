'use strict'

const { generateJwt } = require('../utils')
const Joi = require('@hapi/joi')
const nanoid = require('nanoid')

const schema = Joi.object().keys({
  once: Joi.number()
    .integer()
    .required(),
  clientId: Joi.string().required(),
  accountId: Joi.number().required(),
  secret: Joi.string().required()
})

function ecApiAddEventTeamToken(option, context) {
  const { error, value } = Joi.validate(option, schema)

  if (error !== null) {
    console.warn(`validation failed, %o`, result.error)
    return
  }

  const jwt = generateJwt({
    payload: {
      clientId: value.clientId,
      once: value.once,
      accountId: value.accountId
    },
    secret: value.secret,
    options: {
      expiresIn: '30s',
      jwtid: nanoid()
    }
  })

  console.info(`generated jwt: %s`, jwt)

  if (context) {
    context.request.setHeader('Event-Team-Token', jwt)
  }
}

module.exports = ecApiAddEventTeamToken
