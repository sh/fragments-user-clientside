# possibly extract this into its own package
# TODO generalize this into a dispatcher
module.exports.makeRouter = (
) ->
  Route = (matcher, cb) ->
    unless matcher is Object(matcher) and matcher.match?
      matcher = new UrlPattern matcher
    @matcher = matcher
    @cb = @cb
    return

  Router = ->
    @routes = []
    return

  Router.prototype.add = (matcher, cb) ->
    @routes.push new Route matcher, cb

  Router.prototype.dispatch = (url) ->
    i = -1
    length = @routes.length
    while ++i < length
      route = @routes[i]
      result = route.matcher url
      if result?
        return route.cb result

  ->
    router = new Router
    routeConvenienveFn = (matcher, cb) ->
      router.add matcher, cb
    routeConvenienveFn.dispatch = (url) ->
      router.dispatch url
    return routeConvenienceFn

# module.exports.ClientRouter
# TODO only instantiate router once

module.exports.ComponentRouter = (
  React
  reactKup
  Cursors
  makeRouter
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
            k.li -> k.a {href: 'localhost:8080'}, 'localhost:8080'
            k.li -> k.a {href: '/'}, '/'
            k.li -> k.a {href: '/foo'}, '/foo'
            k.li -> k.a {href: '/bar'}, '/bar'
            k.li -> k.a {href: '/baz'}, '/baz'
            k.li -> k.a {href: 'foo'}, 'foo'
            k.li -> k.a {href: 'bar'}, 'bar'
            k.li -> k.a {href: 'baz'}, 'baz'

            # route = makeRouter()
            # route '/foo', ->
            # route '/bar', ->
            # route '/baz', ->
            # route.dispatch url
