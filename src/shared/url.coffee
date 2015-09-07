module.exports.urlRoot = (
  UrlPattern
) ->
  new UrlPattern '/'

module.exports.urlLogin = (
  UrlPattern
) ->
  new UrlPattern '/login'

module.exports.urlProfile = (
  UrlPattern
) ->
  new UrlPattern '/me'

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
  urlProfile
  urlUsers
  urlUser
) ->
  [
    urlRoot
    urlLogin
    urlProfile
    urlUsers
    urlUser
  ]
