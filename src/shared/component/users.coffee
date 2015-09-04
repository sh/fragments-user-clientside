module.exports.ComponentUsers = (
  React
  reactKup
  Cursors
) ->
  React.createClass
    mixins: [Cursors]
    componentDidMount: ->
      console.log 'ComponentUsers', 'componentDidMount'
      # TODO
      # this is where we will fetch the users from the server
      # and put them into the page state that has been passed to us
      # from above
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentUsers'}, ->
          k.h1 "ComponentUsers"
          k.a {href: '/'}, 'go to landing'
          k.h2 "Users"
          k.ul ->
            k.li -> k.a {href: '/users/1'}, 'Alice'
            k.li -> k.a {href: '/users/2'}, 'Bob'
            k.li -> k.a {href: '/users/3'}, 'Charlie'
