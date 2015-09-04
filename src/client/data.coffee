module.exports.login = (
  reqwest
  urlApiLogin
) ->
  (data) ->
    reqwest(
      # TODO use url-pattern here
      url: urlApiLogin()
      method: 'post'
    )
