module.exports.showModal = (
  rootCursor
) ->
  (component, data) ->
    rootCursor.set 'modal',
      component: component
      data: data

module.exports.hideModal = (
  rootCursor
) ->
  ->
    rootCursor.set 'modal', null
