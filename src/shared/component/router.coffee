module.exports.ComponentRouter = (
  React
  reactKup
  Cursors
  makeRouter
  ComponentLanding
  ComponentLogin
  ComponentUsers
  ComponentUser
  urlRoot
  urlLogin
  urlUsers
  urlUser
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      that = this

      reactKup (k) ->
        k.div {className: 'ComponentRouter'}, ->
          # k.h3 "ComponentRouter state:"
          # k.pre JSON.stringify(that.state)

          pageCursor = that.getCursor('page')

          route = makeRouter()
          route urlRoot, ->
            k.build ComponentLanding,
              cursors:
                page: pageCursor
          route urlLogin, ->
            k.build ComponentLogin,
              cursors:
                page: pageCursor
          route urlUsers, ->
            k.build ComponentUsers,
              cursors:
                page: pageCursor
          route urlUser, (params) ->
            k.build ComponentUser,
              id: params.id
              cursors:
                page: pageCursor

          route.dispatch that.state.path
