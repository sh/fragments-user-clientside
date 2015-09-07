module.exports.ComponentRouter = (
  React
  reactKup
  Cursors
  makeRouter
  ComponentLanding
  ComponentLogin
  ComponentUsers
  ComponentUser
  ComponentNotFound
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

          cursors =
            page: that.getCursor('page')
            currentUser: that.getCursor('currentUser')
            error: that.getCursor('error')

          route = makeRouter()
          route urlRoot, ->
            k.build ComponentLanding,
              cursors: cursors
          route urlLogin, ->
            k.build ComponentLogin,
              cursors: cursors

          if that.state.currentUser?
            route urlUsers, ->
              k.build ComponentUsers,
                cursors: cursors
            route urlUser, (params) ->
              k.build ComponentUser,
                id: params.id
                cursors: cursors

          component = route.dispatch that.state.path

          unless component?
            k.build ComponentNotFound,
              cursors:
                currentUser: that.getCursor('currentUser')
                path: that.getCursor('path')
