module.exports.initClient = (
  React
  ComponentApp
) ->
  ->
    console.log 'initClient'
    mountNode = document.getElementById "root"
    initialState =
      url: 'foo'
    element = React.createElement ComponentApp, initialState
    React.render element, mountNode
