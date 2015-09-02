module.exports.ComponentRoot = (
  React
  reactKup
  Cursors
  ComponentHistory
  ComponentRouter
) ->
  React.createClass
    mixins: [Cursors]
    # The only component that should need to define `getInitialState` is the root
    # component. Child components can define their initial state, but state that
    # is passed into them via parent cursors will override the corresponding
    # initial state.
    getInitialState: ->
      {
        history: {}
      }
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
          k.div "ComponentRoot"
          # changes cursor on history
          k.build ComponentHistory,
            cursors:
              history: that.getCursor('history')
          # dispatches on history
          k.build ComponentRouter,
            cursors:
              history: that.getCursor('history')

module.exports.ComponentLanding = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLanding'}, ->
          k.h1 "ComponentLanding"

module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLogin'}, ->
          k.h1 "ComponentLogin"
