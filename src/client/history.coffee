# hijacks clicks to anchor tags with relative urls
# inspired by https://gist.github.com/tbranyen/1142129
# returns a highland stream with all the clicked relative urls
module.exports.streamAnchorClicks = (
  highland
  getCurrentRoot
) ->
  (el) ->
    unless el?
      throw new Error 'missing argument'
    stream = highland()

    el.addEventListener 'click', (event) ->
      unless event.target.tagName is 'A'
        return
      # does the element have attribute `data-bypass` ?
      if event.target.dataset.bypass?
        return

      href = event.target.getAttribute('href')
      absoluteHref = event.target.href

      root = getCurrentRoot()

      isRelative = absoluteHref.slice(0, root.length) is root

      unless isRelative
        return

      relative = absoluteHref.slice(root.length)

      event.preventDefault()

      stream.write
        event: event
        absolute: absoluteHref
        relative: relative

    return stream

module.exports.getCurrentRoot = (
  window
) ->
  ->
    window.location.protocol + "//" + window.location.host

module.exports.getCurrentPath = (
  window
) ->
  ->
    window.location.pathname

module.exports.changeBrowserUrl = (
  window
) ->
  (url) ->
    window.history.pushState {}, null, url
