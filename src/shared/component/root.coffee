# responsibilities:
# toplevel component and entry point for the clientside.
# manages and owns url-cursor, keeps it up to date with browser url and feeds it to
# router component which dispatches on it.
module.exports.ComponentRoot = (
  React
  reactKup
  Cursors
  ComponentRouter
  getCurrentPath
) ->
  React.createClass
    mixins: [Cursors]
    # the only component that should need to define `getInitialState` is the root
    # component. child components can define their initial state, but state that
    # is passed into them via parent cursors will override the corresponding
    # initial state.
    getInitialState: ->
      {
        # initialize url-cursor
        url: getCurrentPath()
      }
    handlePopstate: (event) ->
      this.update {url: {$set: getCurrentPath()}}
    componentDidMount: ->
      that = this
      console.log 'ComponentHistory', 'componentDidMount'
      # update the url-cursor whenever an item is received from the clickStream
      that.props.clickStream.each (data) ->
        that.update {url: {$set: data.relative}}
      window.addEventListener 'popstate', this.handlePopstate
    componentWillUnmount: ->
      that = this
      console.log 'ComponentHistory', 'componentDidMount'
      window.removeEventListener 'popstate', this.handlePopstate
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
          # router dispatches on url-cursor
          k.build ComponentRouter,
            cursors:
              url: that.getCursor('url')