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

          route = makeRouter()
          route urlRoot, ->
            k.build ComponentLanding
          route urlLogin, ->
            k.build ComponentLogin
          route urlUsers, ->
            k.build ComponentUsers
          route urlUser, (params) ->
            k.build ComponentUser,
              id: params.id

          route.dispatch that.state.url
