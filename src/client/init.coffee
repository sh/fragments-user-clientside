module.exports.initClient = (
  React
  ComponentRoot
  document
  getCookieKeys
  getRememberedToken
  rootCursor
  pathCursor
  getBrowserPath
  getCurrentUser
  handleHttpError
  wireUpPathCursorBrowserUrlSync
) ->
  ->
    console.log 'initClient'
    console.log 'getCookieKeys()', getCookieKeys()
    console.log 'getRememberedToken()', getRememberedToken()
    console.log 'rootCursor.get()', rootCursor.get()

    wireUpPathCursorBrowserUrlSync()

    rootCursor.set('checkingLoginStatus', true)
    getCurrentUser()
      .then (data) ->
        rootCursor.set('currentUser', data)
        rootCursor.set('checkingLoginStatus', false)
      .catch handleHttpError

    rootMountNode = document.getElementById "root"

    render = ->
      console.log 'state change. rerender. new state:', rootCursor.get()
      rootElement = React.createElement ComponentRoot,
        cursor: rootCursor
      React.render rootElement, rootMountNode

    # rerender on every state change
    rootCursor.on 'update', render

    # initialize path cursor and trigger initial render
    pathCursor.set getBrowserPath()
