module.exports.ComponentUser = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    componentDidMount: ->
      console.log 'ComponentUser', 'componentDidMount'
      # TODO
      # this is where we will fetch the user `this.props.id` from the server
      # and put it into the page state that has been passed to us
      # from above
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentUser'}, ->
          k.build ComponentNavigation,
            cursors:
              currentUser: that.getCursor('currentUser')
          k.div {className: 'container'}, ->
            k.h1 "User ##{that.props.id}"
