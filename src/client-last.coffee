# retrieves `initClient` and calls it
# requires several global variables to be set. among those are:
# `module.exports`
# `hinoki`

do ->
  console.log 'initializing client'

  lifetime =
    window: window
    document: document

  # TODO move this somewhere else
  # this is almost a direct copy of rightsSource in
  # https://github.com/snd/fragments-user/blob/master/src/fragments-user.coffee
  rightsSource = (key) ->
    prefix = 'can'
    if (0 is key.indexOf(prefix)) and (key.length > prefix.length)
      factory = (currentUserHasRight) ->
        (args...) ->
          currentUserHasRight key.slice(prefix.length - 3), args...
      return factory

  source = hinoki.source [
    module.exports
    rightsSource
  ]

  hinoki source, lifetime, (initClient) ->
    console.log 'successfully retrieved `initClient`. calling it now.'
    initClient()
