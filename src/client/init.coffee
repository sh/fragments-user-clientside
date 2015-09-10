module.exports.initClient = (
  React
  ComponentRoot
  streamAnchorClicks
  window
  changeBrowserUrl
  getCookieKeys
  getRememberedToken
  rootCursor
) ->
  ->
    console.log 'initClient'

    console.log 'getCookieKeys()', getCookieKeys()
    console.log 'getRememberedToken()', getRememberedToken()

    console.log 'rootCursor.get()', rootCursor.get()

#     anchorClickStream = streamAnchorClicks document
#
#     # TODO break this up into multiple dependencies
#
#     # logging
#
#     # anchorClickStream
#     #   .fork()
#     #   .each (x) -> console.log 'anchor click', x
#
#     # push state
#
#     anchorClickStream
#       .fork()
#       .pluck('relative')
#       .each(changeBrowserUrl)
#
#     rootMountNode = document.getElementById "root"
#       clickStream: anchorClickStream.fork()
#
#     render = ->
#       rootElement = React.createElement ComponentRoot
#       React.render rootElement, rootMountNode
#
#
