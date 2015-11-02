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
) ->
  React.createClass
    componentWillMount: ->
      this.props.page.set({})
      updateQuery (query) ->
        console.log 'ComponentUsers', 'componentWillMount', 'query', query
        query.order ?= 'created_at'
        query.asc ?= false
        query.limit ?= 50
        query.offset ?= 0
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
    onPageChange: (event) ->
      updatePageAndPerPage (data) ->
        # TODO must be an integer
        data.page = event.target.value
        return data
      this.loadUsers()
    onPerPageChange: (event) ->
      updatePageAndPerPage (data) ->
        # TODO must be an integer
        data.perPage = event.target.value
        return data
      this.loadUsers()
    gotoPreviousPage: ->
      updatePageAndPerPage (data) ->
        data.page -= 1
        return data
      this.loadUsers()
    gotoNextPage: ->
      updatePageAndPerPage (data) ->
        data.page += 1
        return data
      this.loadUsers()
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

          k.div {className: 'row'}, ->
            k.div {className: 'col-xs-4 col-xs-offset-6'}, ->
              k.div {className: 'form-inline'}, ->
                k.div {className: 'form-group'}, ->
                  k.label 'page '
                  k.input
                    type: 'text'
                    className: 'form-control'
                    style:
                      # width: '50px'
                      textAlign: 'center'
                    onChange: that.onPageChange
                    value: page
                k.span ' of 100 '
                k.div {className: 'btn-group'}, ->
                  k.button {
                    className: 'btn btn-default'
                    type: 'button'
                    onClick: that.gotoPreviousPage
                  }, ->
                    k.span {className: 'glyphicon glyphicon-menu-left'}
                  k.button {
                    className: 'btn btn-default'
                    type: 'button'
                    onClick: that.gotoNextPage
                  }, ->
                    k.span {className: 'glyphicon glyphicon-menu-right'}
                k.div {className: 'form-group'}, ->
                  k.label ' per page '
                  k.input
                    type: 'text'
                    className: 'form-control'
                    style:
                      # width: '50px'
                      textAlign: 'center'
                    onChange: that.onPerPageChange
                    value: perPage

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
