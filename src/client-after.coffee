# retrieves `initClient` and calls it
# requires several global variables to be set. among those are:
# `module.exports`
# `hinoki`

do ->
  console.log 'initializing client'

  lifetime =
    window: window

  source = hinoki.source [
    module.exports
  ]

  hinoki source, lifetime, (initClient) ->
    console.log 'successfully retrieved `initClient`. calling it now.'
    initClient()
