# responsibilities:
# toplevel component and entry point for the clientside.
# manages and owns url-cursor, keeps it up to date with browser url and feeds it to
# router component which dispatches on it.
module.exports.ComponentRoot = (
  React
  reactKup
  ComponentRouter
) ->
  React.createClass
    render: ->
      cursor = this.props.cursor
      reactKup (k) ->
        k.div {className: 'ComponentRoot'}, ->
          # router dispatches on `path` cursor
          k.build ComponentRouter,
            cursor: cursor
