'use strict'

const nanoid = require('nanoid')

const { generateJwt } = require('../utils')

module.exports = {
  name: 'ecAuthToken',
  displayName: 'Event Team - EC auth token',
  description: 'Generate auth token for EC general backend',
  args: [
    {
      displayName: 'once',
      description:
        '载荷自定义字段 once:对于单次令牌,该值为整型 1,并生成一串近期唯一的字符串作为其值;对于多次令牌,则值为 0, 或者不设置;',
      type: 'number',
      defaultValue: 1
    },
    {
      displayName: 'clientId',
      description: 'Client ID',
      type: 'string',
      validate: v => (v ? '' : 'Required'),
    },
    {
      displayName: 'accountId',
      description: 'accountId',
      type: 'number',
      validate: v => (v ? '' : 'Required'),
    },
    {
      displayName: 'secret',
      description: 'secret',
      type: 'string',
      validate: v => (v ? '' : 'Required'),
    }
  ],
  async run(context, once, clientId, accountId, secret) {
    if (!clientId || !accountId || !secret) {
      return ''
    }

    const jwt = generateJwt({
      payload: {
        clientId: clientId,
        once: once,
        accountId: accountId
      },
      secret: secret,
      options: {
        expiresIn: '30s',
        jwtid: nanoid()
      }
    })

    return jwt
  }
}
