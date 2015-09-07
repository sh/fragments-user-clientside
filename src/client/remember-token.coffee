module.exports.getRememberedToken = (
  getCookie
) ->
  ->
    getCookie 'token'

module.exports.rememberToken = (
  setCookie
) ->
  (token) ->
    setCookie 'token', token

module.exports.forgetToken = (
  removeCookie
) ->
  (token) ->
    removeCookie 'token'
