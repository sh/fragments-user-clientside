module.exports.urlRoot = (
  UrlPattern
) ->
  new UrlPattern '/'

module.exports.urlLogin = (
  UrlPattern
) ->
  new UrlPattern '/login'

module.exports.urlUsers = (
  UrlPattern
) ->
  new UrlPattern '/users'

module.exports.urlUser = (
  UrlPattern
) ->
  new UrlPattern '/users/:id'

module.exports.clientsideUrls = (
  urlRoot
  urlLogin
  urlUsers
  urlUser
) ->
  [
    urlRoot
    urlLogin
    urlUsers
    urlUser
  ]
