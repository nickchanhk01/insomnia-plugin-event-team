// use strict

const jwt = require('jsonwebtoken')
const { generateJwt } = require('./utils')

module.exports = function(context) {
  const headers = context.request.getEnvironmentVariable('FRESH_AUTH_JWT')

  if (!headers || !headers['CLIENT_ID'] || !headers['SECRET']) {
    return
  }

  const authJwt = generateJwt({
    payload: {
      clientId: headers['CLIENT_ID']
    },
    secret: headers['SECRET'],
    options: {
      issuer: headers['ISSUER']
    }
  })

  if (!authJwt) return

  context.request.setHeader('Authorization', `Bearer ${authJwt}`)
}
