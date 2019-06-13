// use strict

const jwt = require('jsonwebtoken') // require jsonwebtoken library
const R = require('ramda')

const isNotNil = R.complement(R.isNil)

const generateJwt = ({ payload = {}, secret, options = {} }) => {
  try {
    return jwt.sign(
      payload,
      secret,
      Object.assign(
        {
          algorithm: 'HS256',
          expiresIn: '30s'
        },
        options
      )
    )
  } catch (err) {
    console.error(err)
    return null
  }
}

module.exports = {
  generateJwt,
  isNotNil
}
