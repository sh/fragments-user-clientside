module.exports.ComponentLanding = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLanding'}, ->
          k.build ComponentNavigation
          k.div {className: 'container'}, ->
            k.h1 'Landing'
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
