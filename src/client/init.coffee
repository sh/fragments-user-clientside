module.exports.initClient = (
  React
  ComponentRoot
) ->
  ->
    console.log 'initClient'
    rootMountNode = document.getElementById "root"
    initialState =
      url: '/foo'
    rootElement = React.createElement ComponentRoot, initialState
    React.render rootElement, rootMountNode
