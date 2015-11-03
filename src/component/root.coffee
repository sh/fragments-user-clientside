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
          # modal is below the router component for the following reason:
          # if it were above then the mounted router component
          # would change position, get a new react id and get unmounted
          # and mounted again.
          # we don't want that !
          modal = cursor.get('modal')
          if modal?
            k.build modal.component, modal.data
