module.exports.currentUserHasRight = (
  rootCursor
  rightsStringToRightsObject
  rightsObjectHasRight
) ->
  (right, args...) ->
    user = rootCursor.get('currentUser')
    # TODO doing this every time the function is called
    # (every rerender)
    # might be a bit slow
    rightsObject = rightsStringToRightsObject user.rights
    rightsObjectHasRight rightsObject, right, args...
