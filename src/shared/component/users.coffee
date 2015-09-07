module.exports.ComponentUsers = (
  React
  reactKup
  Cursors
  urlUser
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
      that = this
      reactKup (k) ->
        k.div {className: 'container ComponentUsers'}, ->
          k.h1 "Users"
          k.ul ->
            k.li -> k.a {href: urlUser.stringify(id: 1)}, 'Alice'
            k.li -> k.a {href: urlUser.stringify(id: 2)}, 'Bob'
            k.li -> k.a {href: urlUser.stringify(id: 3)}, 'Charlie'
