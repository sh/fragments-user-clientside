module.exports.initClient = (
  React
  ComponentRoot
  streamAnchorClicks
  window
  changeBrowserUrl
  getCookieKeys
  getRememberedToken
) ->
  ->
    console.log 'initClient'

    console.log 'getCookieKeys()', getCookieKeys()
    console.log 'getRememberedToken()', getRememberedToken()

    anchorClickStream = streamAnchorClicks document

    # TODO break this up into multiple dependencies

    # logging

    # anchorClickStream
    #   .fork()
    #   .each (x) -> console.log 'anchor click', x

    # push state

    anchorClickStream
      .fork()
      .pluck('relative')
      .each(changeBrowserUrl)

    rootMountNode = document.getElementById "root"
    rootElement = React.createElement ComponentRoot,
      clickStream: anchorClickStream.fork()

    React.render rootElement, rootMountNode
