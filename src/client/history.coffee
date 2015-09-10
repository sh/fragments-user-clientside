# calls cb on clicks to anchor tags with relative urls
# inspired by https://gist.github.com/tbranyen/1142129
module.exports.onRelativeAnchorClick = (
  getBrowserUrlProtocolHost
) ->
  (el, cb) ->
    unless el?
      throw new Error 'missing argument'

    el.addEventListener 'click', (event) ->
      unless event.target.tagName is 'A'
        return
      # does the element have attribute `data-bypass` ?
      if event.target.dataset.bypass?
        return

      # don't break the users ability to open links in a new tab !
      if event.ctrlKey or event.metaKey
        return

      href = event.target.getAttribute('href')
      absoluteHref = event.target.href

      root = getBrowserUrlProtocolHost()

      isRelative = absoluteHref.slice(0, root.length) is root

      unless isRelative
        return

      relative = absoluteHref.slice(root.length)

      cb
        event: event
        absolute: absoluteHref
        relative: relative

module.exports.getBrowserUrlProtocolHost = (
  window
) ->
  ->
    window.location.protocol + "//" + window.location.host

module.exports.getBrowserPath = (
  window
) ->
  ->
    window.location.pathname + window.location.search

module.exports.setBrowserPath = (
  window
) ->
  (path) ->
    state = {path: path}
    console.log 'pushstate', state
    console.log 'window.history.length', window.history.length
    window.history.pushState state, null, path

module.exports.pathCursor = (
  rootCursor
) ->
  rootCursor.select('path')

module.exports.redirect = (
  pathCursor
  setBrowserPath
) ->
  (path) ->
    setBrowserPath(path)
    pathCursor.set(path)

# TODO better name
module.exports.wireUpPathCursorBrowserUrlSync = (
  pathCursor
  onRelativeAnchorClick
  setBrowserPath
  getBrowserPath
  window
) ->
  ->
    # anchor click -> pathCursor
    # (every time a relative anchor is clicked the path cursor is updated)
    onRelativeAnchorClick window, (data) ->
      data.event.preventDefault()
      console.log 'relative anchor click', data.relative
      setBrowserPath data.relative
      pathCursor.set(data.relative)

    # back button -> pathCursor
    # (every time the back button is clicked the path cursor is updated)
    window.addEventListener 'popstate', (event) ->
      console.log 'popstate', event
      pathCursor.set getBrowserPath()

module.exports.getQuery = (
  getBrowserPath
  Qs
) ->
  ->
    console.log 'getQuery', 'getBrowserPath()', getBrowserPath()
    querystring = getBrowserPath().split('?')[1]
    unless querystring?
      return
    Qs.parse querystring

module.exports.setQuery = (
  Qs
  redirect
  pathCursor
) ->
  (query) ->
    querystring = Qs.stringify query
    pathWithoutQuery = pathCursor.get().split('?')[0]
    newPath = pathWithoutQuery + '?' + querystring
    redirect newPath
