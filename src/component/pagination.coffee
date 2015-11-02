module.exports.ComponentPagination = (
  getQuery
  setQuery
  updateQuery
  offsetAndLimitToPageAndPerPage
  updatePageAndPerPage
) ->
  React.createClass
    componentWillMount: ->
      updateQuery (query) ->
        query.limit ?= 50
        query.offset ?= 0
        return query
    onPageChange: (event) ->
      updatePageAndPerPage (data) ->
        # TODO must be an integer
        data.page = event.target.value
        return data
      this.props.reload()
    onPerPageChange: (event) ->
      updatePageAndPerPage (data) ->
        # TODO must be an integer
        data.perPage = event.target.value
        return data
      this.props.reload()
    gotoPreviousPage: ->
      updatePageAndPerPage (data) ->
        data.page -= 1
        return data
      this.props.reload()
    gotoNextPage: ->
      updatePageAndPerPage (data) ->
        data.page += 1
        return data
      this.props.reload()
    render: ->
      that = this
      query = getQuery()
      {page, perPage} = offsetAndLimitToPageAndPerPage(query)

      reactKup (k) ->
        k.div {className: 'form-inline'}, ->
          k.div {className: 'form-group'}, ->
            k.label 'page'
            k.input
              type: 'text'
              className: 'form-control'
              style:
                textAlign: 'center'
              onChange: that.onPageChange
              value: page
          # k.span ' of 100 '

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
            k.label 'per page'
            k.input
              type: 'text'
              className: 'form-control'
              style:
                # width: '50px'
                textAlign: 'center'
              onChange: that.onPerPageChange
              value: perPage
