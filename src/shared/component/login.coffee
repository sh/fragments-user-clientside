module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLogin'}, ->
          k.build ComponentNavigation
          k.div {className: 'container'}, ->
            k.h1 'Login'
