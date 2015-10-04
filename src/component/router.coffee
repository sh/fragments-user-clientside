module.exports.ComponentRouter = (
  React
  reactKup
  makeRouter
  ComponentLanding
  ComponentLogin
  ComponentUsers
  ComponentUser
  ComponentNotFound
  ComponentNavigation
  urlRoot
  urlLogin
  urlUsers
  urlUser
) ->
  React.createClass
    render: ->
      cursor = this.props.cursor

      reactKup (k) ->
        k.div {className: 'ComponentRouter'}, ->
#           k.h3 "ComponentRouter cursor:"
#           k.pre JSON.stringify(that.props.cursor.get())

          k.build ComponentNavigation,
            cursor: cursor

          # wait with routing until we know whether we're logged in
          if cursor.get('checkingLoginStatus')
            return

          route = makeRouter()
          route urlRoot, ->
            k.build ComponentLanding,
              page: cursor.select('page')
          route urlLogin, ->
            k.build ComponentLogin,
              page: cursor.select('page')
              currentUser: cursor.select('currentUser')
              path: cursor.select('path')

          if cursor.get('currentUser')?
            route urlUsers, ->
              k.build ComponentUsers,
                path: cursor.select('path')
                page: cursor.select('page')
            route urlUser, (params) ->
              k.build ComponentUser,
                id: params.id
                page: cursor.select('page')

          pathWithoutQuerystring = cursor.get('path').split('?')[0]

          component = route.dispatch pathWithoutQuerystring

          unless component?
            k.build ComponentNotFound
