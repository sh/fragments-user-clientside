# hijacks clicks to anchor tags with relative urls
# inspired by https://gist.github.com/tbranyen/1142129
# returns a highland stream with all the clicked relative urls
module.exports.streamAnchorClicks = (
  highland
) ->
  (el, history, root) ->
    unless el? and history? and root?
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

module.exports.ComponentHistory = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    handleStatechange: (event) ->
      # history = History.getState()
      console.log 'ComponentHistory.handleStatechange',
        event: event
        href: location.href
        history: history.state
      # this.update
      #   history: {$set: history}
    componentDidMount: ->
      console.log 'ComponentHistory.componentDidMount'
        # history: location.href
      window.addEventListener 'statechange', this.handleStatechange
      # this.update
      #   history: {$set: History.getState()}
    componentWillUnmount: ->
      window.removeEventListener 'statechange', this.handleStatechange
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentHistory'}
