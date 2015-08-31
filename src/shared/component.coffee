module.exports.ComponentRoot = (
  React
  reactKup
  Cursors
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
        url: this.props.url || ''
      }
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
          k.div "hello from ComponentRoot"
          k.build ComponentRouter,
            cursors:
              url: that.getCursor('url')

module.exports.ComponentHistory = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      # TODO make this modify the url in the cursor

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
          k.h1 "Landing Page"

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
          k.h1 "hello from ComponentLogin"

module.exports.ComponentRouter = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]

    render: ->
      that = this

      reactKup (k) ->
        k.div {className: 'ComponentRouter'}, ->
          k.h2 "hello from ComponentRouter"
          k.pre JSON.stringify(that.state)
#
#         if url .match(url)
#           return
#
#         if url .match(url)
