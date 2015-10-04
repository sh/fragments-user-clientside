module.exports.postLogin = (
  httpPost
  urlApiLogin
) ->
  (data) ->
    httpPost urlApiLogin(), data

module.exports.getCurrentUser = (
  httpGet
  urlApiCurrentUser
  getRememberedToken
) ->
  (data) ->
    token = getRememberedToken()
    # this would fail without a token
    # by returning null we signal that there is no user currently logged in
    unless token?
      return Promise.resolve null
    httpGet urlApiCurrentUser()

module.exports.getUsers = (
  httpGet
  urlApiUsers
) ->
  (query) ->
    url = urlApiUsers()
    if query?
     url += '?' + Qs.stringify(query)
    httpGet url

module.exports.getUser = (
  httpGet
  urlApiUsers
) ->
  (id) ->
    url = urlApiUsers(id)
    httpGet url
