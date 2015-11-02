module.exports.ComponentThSort = (
  reactKup
  getQuery
  updateQuery
  React
) ->
  React.createClass
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
        that.props.reload()
    render: ->
      that = this
      query = getQuery()

      text = that.props.text or that.props.column

      reactKup (k) ->
        k.th ->
          k.a {
            # TODO just add the correct href
            # it will then be picked up by the anchor hijack
            # no need for the sortByHandler bullshit.
            # requires you to find a clean way to reload users
            # every time the query changes.
            onClick: that.sortByHandler that.props.column
            href: ''
          }, text, ->
            if query.order is that.props.column and query.asc is 'true'
              k.span {className: 'glyphicon glyphicon-menu-up'}
            if query.order is that.props.column and query.asc is 'false'
              k.span {className: 'glyphicon glyphicon-menu-down'}
