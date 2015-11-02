module.exports.ComponentUsers = (
  React
  reactKup
  urlUser
  getUsers
  handleHttpError
  redirect
  getQuery
  setQuery
  updateQuery
  offsetAndLimitToPageAndPerPage
  updatePageAndPerPage
  ComponentPagination
) ->
  React.createClass
    componentWillMount: ->
      this.props.page.set({})
      updateQuery (query) ->
        console.log 'ComponentUsers', 'componentWillMount', 'query', query
        query.order ?= 'created_at'
        query.asc ?= false
        return query
    componentDidMount: ->
      this.loadUsers()
    loadUsers: ->
      that = this
      getUsers(getQuery())
        .then (data) ->
          that.props.page.set 'records', data
        .catch handleHttpError
    sortByHandler: (name) ->
      that = this
      (event) ->
        event.preventDefault()
        console.log 'sortBy', name
        updateQuery (query) ->
          if query.order is name
            # swap order
            query.asc = query.asc isnt 'true'
          else
            query.order = name
            query.asc = true
          return query
        that.loadUsers()
    render: ->
      that = this
      records = that.props.page.get 'records'
      query = getQuery()
      {page, perPage} = offsetAndLimitToPageAndPerPage(query)
      console.log 'ComponentUsers', 'render', 'query', query

      reactKup (k) ->
        k.div {className: 'container ComponentUsers'}, ->
          unless records?
            k.p "loading users..."
            return

          k.div {className: 'page-header'}, ->
            k.h1 'Users'

          if records.length is 0
            k.p "no users to show"
            return

          k.build ComponentPagination,
            reload: -> that.loadUsers()

          k.table {className: 'table table-striped table-hover'}, ->
            k.thead ->
              k.tr ->
                # TODO refactor this
                name = 'id'
                k.th ->
                  k.a {
                    # TODO just add the correct href
                    # it will then be picked up by the anchor hijack
                    # no need for the sortByHandler bullshit
                    onClick: that.sortByHandler name
                    href: ''
                  }, '# ', ->
                    if query.order is name and query.asc is 'true'
                      k.span {className: 'glyphicon glyphicon-menu-up'}
                    if query.order is name and query.asc is 'false'
                      k.span {className: 'glyphicon glyphicon-menu-down'}

                name = 'name'
                k.th ->
                  k.a {
                    onClick: that.sortByHandler name
                    href: ''
                  }, "#{name} ", ->
                    if query.order is name and query.asc is 'true'
                      k.span {className: 'glyphicon glyphicon-menu-up'}
                    if query.order is name and query.asc is 'false'
                      k.span {className: 'glyphicon glyphicon-menu-down'}

                name = 'email'
                k.th ->
                  k.a {
                    onClick: that.sortByHandler name
                    href: ''
                  }, "#{name} ", ->
                    if query.order is name and query.asc is 'true'
                      k.span {className: 'glyphicon glyphicon-menu-up'}
                    if query.order is name and query.asc is 'false'
                      k.span {className: 'glyphicon glyphicon-menu-down'}

                name = 'created_at'
                k.th ->
                  k.a {
                    onClick: that.sortByHandler name
                    href: ''
                  }, "created at ", ->
                    if query.order is name and query.asc is 'true'
                      k.span {className: 'glyphicon glyphicon-menu-up'}
                    if query.order is name and query.asc is 'false'
                      k.span {className: 'glyphicon glyphicon-menu-down'}
            k.tbody ->
              records.forEach (user) ->
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
                  k.th -> k.a {href: url}, user.id
                  k.td -> k.a {href: url}, user.name
                  k.td -> k.a {href: url}, user.email
                  k.td -> k.a {href: url}, user.created_at
