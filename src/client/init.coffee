module.exports.initClient = (
  React
  ComponentRoot
  streamAnchorClicks
  highland
) ->
  ->
    console.log 'initClient'

    root = location.protocol + "//" + location.host
    anchorClicksStream = streamAnchorClicks document, window.history, root

    changeBrowserUrl = (url) ->
      history.pushState {}, null, url

    anchorClicksStream
      .doto(highland.log)
      .doto(changeBrowserUrl)
      # cause a thunk (the stream to actually be consumed)
      .each(->)

    rootMountNode = document.getElementById "root"
    rootElement = React.createElement ComponentRoot
    React.render rootElement, rootMountNode
