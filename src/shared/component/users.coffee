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
          unless users?
            k.p "loading users"
          else if users.length is 0
            k.p "no users"
          else
            k.table {className: 'table table-striped table-hover'}, ->
              k.caption "Users"
              k.thead ->
                k.tr ->
                  k.th "#"
                  k.th "name"
                  k.th "email"
                  k.th "created at"
              k.tbody ->
                that.state.users.forEach (user) ->
                  url = urlUser.stringify(id: user.id)
                  k.tr {
                    # TODO we might navigate to the user here
                    # onClick:
                  }, ->
                    k.td -> k.a {href: url}, user.id
                    k.td -> k.a {href: url}, user.name
                    k.td -> k.a {href: url}, user.email
                    k.td -> k.a {href: url}, user.created_at
