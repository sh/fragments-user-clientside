# possibly extract this into its own package
# TODO generalize this into a dispatcher
module.exports.makeRouter = (
) ->
  Route = (matcher, cb) ->
    unless matcher is Object(matcher) and matcher.match?
      matcher = new UrlPattern matcher
    @matcher = matcher
    @cb = cb
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
      result = route.matcher.match url
      if result?
        return route.cb result

  ->
    router = new Router
    addRoute = (matcher, cb) ->
      router.add matcher, cb
    addRoute.dispatch = (url) ->
      router.dispatch url
    return addRoute
