module.exports.ComponentUser = (
  React
  reactKup
  Cursors
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
          k.h1 "ComponentUser #{that.props.id}"
          k.a {href: '/users'}, 'go to users'
          k.a {href: '/'}, 'go to landing'