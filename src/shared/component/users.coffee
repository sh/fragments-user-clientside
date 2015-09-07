module.exports.ComponentUsers = (
  React
  reactKup
  Cursors
  urlUser
  getUsers
) ->
  React.createClass
    mixins: [Cursors]
    componentWillMount: ->
      console.log 'ComponentUsers', 'componentWillMount', this.state
    componentDidMount: ->
      console.log 'ComponentUsers', 'componentDidMount', this.state
      that = this
      getUsers()
        .then (data) ->
          that.update
            users: {$set: data}
        .catch (error) ->
          that.update {error: {$set: error}}
    render: ->
      console.log 'ComponentUsers', 'render', this.state
      that = this
      users = that.state.users
      reactKup (k) ->
        k.div {className: 'container ComponentUsers'}, ->
          k.h1 "Users"
          unless users?
            k.p "loading"
          else if users.length is 0
            k.p "no users"
          else
            k.ul ->
              that.state.users.forEach (user) ->
                k.li -> k.a {href: urlUser.stringify(id: user.id)}, user.name
