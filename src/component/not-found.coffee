module.exports.ComponentNotFound = (
  React
  reactKup
) ->
  React.createClass
    render: ->
      reactKup (k) ->
        k.div {className: 'container ComponentNotFound'}, ->
          k.h1 "404"
          k.h2 "Not found"
