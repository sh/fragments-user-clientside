module.exports.ComponentFeedbackSuccess = (
  React
  reactKup
) ->
  React.createClass
    render: ->
      reactKup (k) ->
        k.span {className: 'glyphicon glyphicon-ok form-control-feedback'}

module.exports.ComponentFeedbackError = (
  React
  reactKup
) ->
  React.createClass
    render: ->
      reactKup (k) ->
        k.span {className: 'glyphicon glyphicon-remove form-control-feedback'}
