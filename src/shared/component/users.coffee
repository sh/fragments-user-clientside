module.exports.ComponentUsers = (
  React
  reactKup
  urlUser
  getUsers
  redirect
  getQuery
  setQuery
) ->
  React.createClass
    componentWillMount: ->
      this.props.page.set({})
      query = getQuery()
      query ?= {}
      query.order ?= 'created_at'
      query.asc ?= false
      setQuery(query)
    componentDidMount: ->
      this.loadUsers()
    loadUsers: ->
      that = this
      getUsers(getQuery())
        .then (data) ->
          that.props.page.set 'users', data
        .catch (error) ->
          that.props.error.set error
    sortByHandler: (name) ->
      that = this
      (event) ->
        event.preventDefault()
        console.log 'sortBy', name
        query = getQuery()
        query ?= {}
        if query.order is name
          # swap order
          query.asc = query.asc isnt 'true'
        else
          query.order = name
          query.asc = false
        setQuery(query)
        that.loadUsers()
    render: ->
      console.log 'ComponentUsers', 'render'
      that = this
      users = that.props.page.get 'users'
      query = getQuery()
      reactKup (k) ->
        k.div {className: 'container ComponentUsers'}, ->
          unless users?
            k.p "loading users"
            return

          k.div {className: 'page-header'}, ->
            k.h1 'Users'

          if users.length is 0
            k.p "no users to show"
            return

          # k.div {className: 'row'}, ->
          #   k.div {className: 'col-xs-4 col-xs-offset-6'}, ->
          #     k.div {className: 'form-inline'}, ->
          #       k.div {className: 'form-group'}, ->
          #         k.label 'page '
          #         k.input
          #           type: 'text'
          #           className: 'form-control'
          #           style:
          #             # width: '50px'
          #             textAlign: 'center'
          #       k.span ' of 100 '
          #       k.div {className: 'btn-group'}, ->
          #         k.button {className: 'btn btn-default', type: 'button'}, ->
          #           k.span {className: 'glyphicon glyphicon-menu-left'}
          #         k.button {className: 'btn btn-default', type: 'button'}, ->
          #           k.span {className: 'glyphicon glyphicon-menu-right'}

          k.table {className: 'table table-striped table-hover'}, ->
            k.thead ->
              k.tr ->
                k.th ->
                  k.a {
                    onClick: that.sortByHandler 'id'
                    href: ''
                  }, '#'
                  k.span {className: 'glyphicon glyphicon-menu-down'}
                  k.span {className: 'glyphicon glyphicon-menu-up'}
                k.th "name"
                k.th "email"
                k.th "created at"
            k.tbody ->
              users.forEach (user) ->
                url = urlUser.stringify(id: user.id)
                k.tr {
                  onClick: (event) ->
                    # don't annoy the user by redirecting even though user
                    # has opened link in a new tab
                    unless event.ctrlKey or event.metaKey
                      redirect(url)
                  style:
                    cursor: 'pointer'
                }, ->
                  k.td -> k.a {href: url}, user.id
                  k.td -> k.a {href: url}, user.name
                  k.td -> k.a {href: url}, user.email
                  k.td -> k.a {href: url}, user.created_at
