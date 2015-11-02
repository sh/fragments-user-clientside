module.exports.getQuery = (
  getBrowserPath
  Qs
) ->
  ->
    console.log 'getQuery', 'getBrowserPath()', getBrowserPath()
    querystring = getBrowserPath().split('?')[1]
    unless querystring?
      return {}
    Qs.parse querystring

module.exports.setQuery = (
  Qs
  redirect
  pathCursor
) ->
  (query) ->
    pathWithoutQuery = pathCursor.get().split('?')[0]
    querystring = Qs.stringify query
    newPath = pathWithoutQuery + '?' + querystring
    redirect newPath

module.exports.updateQuery = (
  getQuery
  setQuery
) ->
  (fn) ->
    setQuery(fn(getQuery()))
