# responsibilities:
# toplevel component and entry point for the clientside.
# manages and owns url-cursor, keeps it up to date with browser url and feeds it to
# router component which dispatches on it.
module.exports.ComponentRoot = (
  React
  reactKup
  ComponentRouter
  ComponentLoadCurrentUser
) ->
  React.createClass
    render: ->
      cursor = this.props.cursor
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
#           k.h3 "ComponentRoot cursor:"
#           k.pre JSON.stringify(that.props.cursor.get())
#
#           k.ul ->
#             k.li -> k.a {href: 'http://www.google.com'}, 'http://www.google.com'
#             k.li -> k.a {href: 'http://localhost:8080'}, 'http://localhost:8080'
#             k.li -> k.a {href: '/'}, '/'
#             k.li -> k.a {href: '/login'}, '/login'
#             k.li -> k.a {href: '/users'}, '/users'
#             k.li -> k.a {href: '/foo'}, '/foo'
#             k.li -> k.a {href: '/bar'}, '/bar'
#             k.li -> k.a {href: '/baz'}, '/baz'
#             k.li -> k.a {href: 'foo'}, 'foo'

          # router dispatches on `path` cursor
          k.build ComponentRouter,
            cursor: cursor

          k.build ComponentLoadCurrentUser,
            cursor: cursor
