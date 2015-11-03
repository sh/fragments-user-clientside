module.exports.ComponentModal = (
  React
  reactKup
  hideModal
) ->
  React.createClass
    render: ->
      reactKup (k) ->
        k.div {
          className: 'ComponentModal modal fade in'
          style:
            display: 'block'
        }, ->
          k.div {className: 'modal-dialog'}, ->
            k.div {className: 'modal-content'}, ->
              k.div {className: 'modal-header'}, ->
                k.button
                  type: 'button'
                  className: 'close'
                  dangerouslySetInnerHTML:
                    __html: '&times;'
                  onClick: -> hideModal()
                k.h4 "Modal title"
              k.div {className: 'modal-body'}, ->
              k.div {className: 'modal-footer'}, ->
                k.div {
                  className: 'btn btn-default'
                  onClick: -> hideModal()
                }, "Close"
                k.div {
                  className: 'btn btn-primary'
                  onClick: -> hideModal()
                }, "Ok"
