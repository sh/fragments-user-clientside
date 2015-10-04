module.exports.ComponentUser = (
  React
  reactKup
  handleHttpError
  getUser
  urlUsers
) ->
  React.createClass
    componentDidMount: ->
      that = this
      getUser(that.props.id)
        .then (data) ->
          that.props.page.set 'record', data
        .catch handleHttpError
    render: ->
      that = this
      record = that.props.page.get 'record'

      reactKup (k) ->
        k.div {className: 'container ComponentUser'}, ->
          k.div {className: 'row'}, ->
            k.a {
              className: 'btn btn-default'
              href: urlUsers.stringify()
            }, ->
              k.span {className: 'glyphicon glyphicon-menu-left'}
              k.span "back to user table"

          k.div {className: 'row'}, ->
            k.div {className: 'panel panel-default'}, ->
              k.div {className: 'panel-heading'}, ->
                if record?
                  k.h3 {className: 'panel-title'}, "User ##{record.id}"
                else
                  k.h3 {className: 'panel-title'}, "User"

              unless record?
                k.div {className: 'panel-body'}, ->
                  k.p "loading..."

              if record?
                k.table {className: 'table table-bordered'}, ->
                  k.tr ->
                    k.th "#"
                    k.td record.id
                  k.tr ->
                    k.th "name"
                    k.td record.name
                  k.tr ->
                    k.th "email"
                    k.td record.email
                  k.tr ->
                    k.th "created at"
                    k.td record.created_at
