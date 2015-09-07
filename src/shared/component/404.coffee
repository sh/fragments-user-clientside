module.exports.ComponentNotFound = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'container ComponentNotFound'}, ->
          k.h1 "404"
          k.h2 "Not found"
