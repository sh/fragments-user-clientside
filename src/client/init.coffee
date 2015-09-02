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

    urlStream = anchorClicksStream.fork().pluck('relative')

    anchorClicksStream
      .fork()
      .doto (x) -> console.log 'navigate', x
      .each(->)

    urlStream
      .doto(changeBrowserUrl)
      # cause a thunk (the stream to actually be consumed)
      .each(->)

    rootMountNode = document.getElementById "root"
    rootElement = React.createElement ComponentRoot
    React.render rootElement, rootMountNode
