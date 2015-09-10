module.exports.initClient = (
  React
  ComponentRoot
  streamAnchorClicks
  window
  changeBrowserUrl
  getCookieKeys
  getRememberedToken
  rootCursor
  pathCursor
  getCurrentPath
) ->
  ->
    console.log 'initClient'
    console.log 'getCookieKeys()', getCookieKeys()
    console.log 'getRememberedToken()', getRememberedToken()
    console.log 'rootCursor.get()', rootCursor.get()

    anchorClickStream = streamAnchorClicks document

    # logging

    anchorClickStream
      .fork()
      .each (x) -> console.log 'anchor click', x

    # anchor click -> pathCursor
    # (every time a relative anchor is clicked the path cursor is updated)
    anchorClickStream
      .fork()
      .pluck('relative')
      .each (url) -> pathCursor.set(url)

    # pathCursor -> browser url
    # (every time the path cursor changes the browser url is updated)
    pathCursor.on 'update', ->
      changeBrowserUrl pathCursor.get()

    rootMountNode = document.getElementById "root"

    render = ->
      console.log 'state change causes rerender. new state is:', rootCursor.get()
      # rootElement = React.createElement ComponentRoot,
      #   cursor: rootCursor
      # React.render rootElement, rootMountNode

    # rerender on every state change
    rootCursor.on 'update', render

    # initialize path cursor and trigger initial render
    pathCursor.set getCurrentPath()
