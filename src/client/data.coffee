module.exports.login = (
  reqwest
  urlApiLogin
) ->
  (data) ->
    Promise.resolve(reqwest(
      url: urlApiLogin()
      method: 'post'
      type: 'json'
      data: data
    ))

module.exports.getCurrentUser = (
  reqwest
  urlApiCurrentUser
  getRememberedToken
  Promise
) ->
  (data) ->
    token = getRememberedToken()
    unless token?
      return Promise.resolve null
    Promise.resolve(reqwest(
      url: urlApiCurrentUser()
      method: 'get'
      type: 'json'
      headers:
        authorization: "Bearer #{token}"
    ))
