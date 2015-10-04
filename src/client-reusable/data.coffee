module.exports.httpRequest = (
  reqwest
  Promise
  getRememberedToken
) ->
  (method, url, data) ->
    options =
      url: url
      method: method
      type: 'json'
    if data?
      options.data = data
    token = getRememberedToken()
    if token?
      options.headers =
        authorization: "Bearer #{token}"
    brokenPromise = reqwest(options)
    Promise.resolve(brokenPromise)

module.exports.handleHttpError = (
  rootCursor
) ->
  (error) ->
    rootCursor.set 'error', error

module.exports.httpGet = (
  httpRequest
) ->
  (url) ->
    httpRequest 'get', url

module.exports.httpPost = (
  httpRequest
) ->
  (url, data) ->
    httpRequest 'post', url, data

module.exports.httpPut = (
  httpRequest
) ->
  (url, data) ->
    httpRequest 'put', url, data

module.exports.httpPatch = (
  httpRequest
) ->
  (url, data) ->
    httpRequest 'patch', url, data

module.exports.httpDelete = (
  httpRequest
) ->
  (url) ->
    httpRequest 'delete', url
