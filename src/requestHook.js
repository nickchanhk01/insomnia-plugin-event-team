// use strict

const R = require('ramda')

const ecApiAddEventTeamToken = require('./functions/ecApiAddEventTeamToken')
const { isNotNil } = require('./utils')

module.exports = function(context) {
  const ecAddEventTokenOption = context.request.getEnvironmentVariable(
    'EC_ADD_EVENT_TOKEN'
  )

  R.compose(
    R.when(
      R.always(isNotNil(ecAddEventTokenOption)),
      R.curry(ecApiAddEventTeamToken)(ecAddEventTokenOption)
    )
  )(context)
}
