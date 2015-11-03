# calls cb on clicks to anchor tags with relative urls
# inspired by https://gist.github.com/tbranyen/1142129
module.exports.onRelativeAnchorClick = (
  getBrowserUrlProtocolHost
) ->
  (el, cb) ->
    unless el?
      throw new Error 'missing argument'

    el.addEventListener 'click', (event) ->
      target = event.target

      # console.log 'click',
      #   tagName: target.tagName
      #   bypass: target.dataset.bypass?
      #   href: target.getAttribute('href')
      #   absoluteHref: target.href
      #   root: getBrowserUrlProtocolHost()
      #   bubbles: event.bubbles
      #   isRelative: event.target.href.slice(0, getBrowserUrlProtocolHost().length) is root

      # find the containing A tag
      while target? and target.tagName isnt 'A'
        target = target.parentNode
        unless target?
          return

      # now we have an A tag

      # does the element have attribute `data-bypass` ?
      if target.dataset.bypass?
        return

      # don't break the users ability to open links in a new tab !
      if event.ctrlKey or event.metaKey
        return

      href = target.getAttribute('href')
      absoluteHref = target.href

      root = getBrowserUrlProtocolHost()

      isRelative = absoluteHref.slice(0, root.length) is root

      unless isRelative
        return

      relative = absoluteHref.slice(root.length)

      # TODO
      # this is triggered twice per click. why ?
      console.log 'relative anchor click', relative

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
      data.event.stopPropagation()
      console.log 'relative anchor click', data.relative
      setBrowserPath data.relative
      pathCursor.set(data.relative)

    # back button -> pathCursor
    # (every time the back button is clicked the path cursor is updated)
    window.addEventListener 'popstate', (event) ->
      console.log 'popstate', event
      pathCursor.set getBrowserPath()
