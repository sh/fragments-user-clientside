module.exports.ComponentRoot = (
  React
  reactKup
  Cursors
  ComponentRouter
  getCurrentPath
) ->
  React.createClass
    mixins: [Cursors]
    # The only component that should need to define `getInitialState` is the root
    # component. Child components can define their initial state, but state that
    # is passed into them via parent cursors will override the corresponding
    # initial state.
    getInitialState: ->
      {
        url: getCurrentPath()
      }
    componentDidMount: ->
      that = this
      console.log 'ComponentHistory.componentDidMount'
      that.props.clickStream.each (data) ->
        that.update {url: {$set: data.relative}}
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
          k.div "ComponentRoot"
          # dispatches on history
          k.build ComponentRouter,
            cursors:
              url: that.getCursor('url')

module.exports.ComponentRouter = (
  React
  reactKup
  Cursors
  makeRouter
  ComponentLanding
  ComponentLogin
) ->
  React.createClass
    mixins: [Cursors]

    render: ->
      that = this

      reactKup (k) ->
        k.div {className: 'ComponentRouter'}, ->
          k.h2 "ComponentRouter"
          k.h3 "ComponentRouter state:"
          k.pre JSON.stringify(that.state)
          k.ul ->
            k.li -> k.a {href: 'http://www.google.com'}, 'http://www.google.com'
            k.li -> k.a {href: 'http://localhost:8080'}, 'http://localhost:8080'
            k.li -> k.a {href: '/'}, '/'
            k.li -> k.a {href: '/foo'}, '/foo'
            k.li -> k.a {href: '/bar'}, '/bar'
            k.li -> k.a {href: '/baz'}, '/baz'
            k.li -> k.a {href: 'foo'}, 'foo'
            k.li -> k.a {href: '/login'}, '/login'

          route = makeRouter()
          route '/', ->
            k.build ComponentLanding
          route '/login', ->
            k.build ComponentLogin
          route '/bar', ->
          route '/baz', ->
          route.dispatch that.state.url

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
