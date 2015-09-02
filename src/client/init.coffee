module.exports.initClient = (
  React
  ComponentRoot
  streamAnchorClicks
  window
  changeBrowserUrl
) ->
  ->
    console.log 'initClient'

    anchorClickStream = streamAnchorClicks document

    # logging

    anchorClickStream
      .fork()
      .each (x) -> console.log 'anchor click', x

    # push state

    anchorClickStream
      .fork()
      .pluck('relative')
      .each(changeBrowserUrl)

    rootMountNode = document.getElementById "root"
    rootElement = React.createElement ComponentRoot,
      clickStream: anchorClickStream.fork()

    React.render rootElement, rootMountNode
