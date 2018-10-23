// use strict

const jwt = require('jsonwebtoken') // require jsonwebtoken library

// Create a function to generate JWT
module.exports.generateJwt = ({ payload = {}, secret, options = {} }) => {
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
