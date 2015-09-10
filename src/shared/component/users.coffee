module.exports.ComponentUsers = (
  React
  reactKup
  urlUser
  getUsers
  redirect
) ->
  React.createClass
    componentWillMount: ->
      this.props.page.set({})
    componentDidMount: ->
      that = this
      getUsers()
        .then (data) ->
          that.props.page.set 'users', data
        .catch (error) ->
          that.props.error.set error
    render: ->
      console.log 'ComponentUsers', 'render'
      that = this
      users = that.props.page.get 'users'
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
                users.forEach (user) ->
                  url = urlUser.stringify(id: user.id)
                  k.tr {
                    onClick: -> redirect(url)
                    style:
                      cursor: 'pointer'
                  }, ->
                    k.td -> k.a {href: url}, user.id
                    k.td -> k.a {href: url}, user.name
                    k.td -> k.a {href: url}, user.email
                    k.td -> k.a {href: url}, user.created_at
