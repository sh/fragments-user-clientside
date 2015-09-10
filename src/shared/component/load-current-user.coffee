# on mount
# if a token is present
# fetches current user from server
# and writes it into `currentUser` cursor
# effectively logging in the user for the rest of the application
module.exports.ComponentLoadCurrentUser = (
  React
  reactKup
  Cursors
  getCurrentUser
) ->
  React.createClass
    mixins: [Cursors]
    componentDidMount: ->
      cursor = this.props.cursor
      getCurrentUser()
        .then (data) ->
          cursor.set('currentUser', data)
          cursor.set('checkingLoginStatus', false)
        .catch (error) ->
          cursor.set('error', error)
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLoadCurrentUser'}
