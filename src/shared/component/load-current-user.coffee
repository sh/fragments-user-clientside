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
      that = this
      getCurrentUser()
        .then (data) ->
          that.update
            currentUser: {$set: data}
            checkingLoginStatus: {$set: false}
        .catch (error) ->
          that.update {error: {$set: error}}
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLoadCurrentUser'}

