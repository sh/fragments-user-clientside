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
  canDeleteUsers
  canUpdateUsers
  ComponentPagination
  ComponentThSort
  showModal
  ComponentModal
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
    render: ->
      that = this
      records = that.props.page.get 'records'
      query = getQuery()
      {page, perPage} = offsetAndLimitToPageAndPerPage(query)
      console.log 'ComponentUsers', 'render', 'query', query

      reload = -> that.loadUsers()

      reactKup (k) ->
        k.div {className: 'container ComponentUsers'}, ->
          unless records?
            k.p "loading users..."
            return

          k.div {className: 'page-header'}, ->
            k.h1 'Users'

          k.build ComponentPagination,
            reload: reload

          k.div {className: 'form-inline'}, ->
            k.div {className: 'form-group'}, ->
              k.label 'email contains'
              k.input
                type: 'text'
                className: 'form-control'
                value: query.where?.email?.contains
                onChange: (event) ->
                  updateQuery (query) ->
                    query.where ?= {}
                    query.where.email ?= {}
                    query.where.email.contains = event.target.value
                    return query
                  that.loadUsers()

          if records.length is 0
            k.p "no users to show"
            return

          k.table {className: 'table table-striped table-hover'}, ->
            k.thead ->
              k.tr ->
                k.build ComponentThSort,
                  column: 'id'
                  text: '#'
                  reload: reload
                k.build ComponentThSort,
                  column: 'name'
                  reload: reload
                k.build ComponentThSort,
                  column: 'email'
                  reload: reload
                k.build ComponentThSort,
                  column: 'created_at'
                  reload: reload
                # action column
                k.th()

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
                  k.td ->
                    k.div {className: 'btn-group'}, ->
                      if canUpdateUsers()
                        k.a {
                          className: 'btn btn-default'
                          onClick: (event) ->
                            event.preventDefault()
                            event.stopPropagation()
                            console.log "update user #{user.id}"
                        }, ->
                          k.span {className: 'glyphicon glyphicon-pencil'}
                      if canDeleteUsers()
                        k.a {
                          className: 'btn btn-default'
                          onClick: (event) ->
                            event.preventDefault()
                            event.stopPropagation()
                            showModal ComponentModal
                            console.log "delete user #{user.id}"
                        }, ->
                          k.span {className: 'glyphicon glyphicon-trash'}
