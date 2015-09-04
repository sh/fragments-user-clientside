module.exports.login = (
  reqwest
  urlApiLogin
) ->
  (data) ->
    reqwest(
      url: urlApiLogin()
      method: 'post'
      type: 'json'
      data: data
    )
