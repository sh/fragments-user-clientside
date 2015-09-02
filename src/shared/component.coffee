# responsibilities:
# toplevel component and entry point for the clientside.
# manages and owns url-cursor, keeps it up to date with browser url and feeds it to
# router component which dispatches on it.
module.exports.ComponentRoot = (
  React
  reactKup
  Cursors
  ComponentRouter
  getCurrentPath
) ->
  React.createClass
    mixins: [Cursors]
    # the only component that should need to define `getInitialState` is the root
    # component. child components can define their initial state, but state that
    # is passed into them via parent cursors will override the corresponding
    # initial state.
    getInitialState: ->
      {
        # initialize url-cursor
        url: getCurrentPath()
      }
    handlePopstate: (event) ->
      this.update {url: {$set: getCurrentPath()}}
    componentDidMount: ->
      that = this
      console.log 'ComponentHistory', 'componentDidMount'
      # update the url-cursor whenever an item is received from the clickStream
      that.props.clickStream.each (data) ->
        that.update {url: {$set: data.relative}}
      window.addEventListener 'popstate', this.handlePopstate
    componentWillUnmount: ->
      that = this
      console.log 'ComponentHistory', 'componentDidMount'
      window.removeEventListener 'popstate', this.handlePopstate
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
          k.div "ComponentRoot"
          # router dispatches on url-cursor
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
  ComponentUsers
  ComponentUser
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

          route = makeRouter()
          route '/', ->
            k.build ComponentLanding
          route '/login', ->
            k.build ComponentLogin
          route '/users', ->
            k.build ComponentUsers
          route '/users/:id', (params) ->
            k.build ComponentUser,
              id: params.id

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
          k.ul ->
            k.li -> k.a {href: 'http://www.google.com'}, 'http://www.google.com'
            k.li -> k.a {href: 'http://localhost:8080'}, 'http://localhost:8080'
            k.li -> k.a {href: '/'}, '/'
            k.li -> k.a {href: '/login'}, '/login'
            k.li -> k.a {href: '/users'}, '/users'
            k.li -> k.a {href: '/foo'}, '/foo'
            k.li -> k.a {href: '/bar'}, '/bar'
            k.li -> k.a {href: '/baz'}, '/baz'
            k.li -> k.a {href: 'foo'}, 'foo'

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
          k.a {href: '/'}, 'go to landing'

module.exports.ComponentUsers = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    componentDidMount: ->
      console.log 'ComponentUsers', 'componentDidMount'
      # TODO
      # this is where we will fetch the users from the server
      # and put them into the page state that has been passed to us
      # from above
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentUsers'}, ->
          k.h1 "ComponentUsers"
          k.a {href: '/'}, 'go to landing'
          k.h2 "Users"
          k.ul ->
            k.li -> k.a {href: '/users/1'}, 'Alice'
            k.li -> k.a {href: '/users/2'}, 'Bob'
            k.li -> k.a {href: '/users/3'}, 'Charlie'

module.exports.ComponentUser = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    componentDidMount: ->
      console.log 'ComponentUser', 'componentDidMount'
      # TODO
      # this is where we will fetch the user `this.props.id` from the server
      # and put it into the page state that has been passed to us
      # from above
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentUser'}, ->
          k.h1 "ComponentUser #{that.props.id}"
          k.a {href: '/users'}, 'go to users'
          k.a {href: '/'}, 'go to landing'
