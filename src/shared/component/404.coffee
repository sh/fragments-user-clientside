module.exports.ComponentNotFound = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentNotFound'}, ->
          k.build ComponentNavigation,
            cursors:
              currentUser: that.getCursor('currentUser')
          k.div {className: 'container'}, ->
            k.h1 "404"
            k.h2 "Not found"
