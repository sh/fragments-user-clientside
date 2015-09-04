module.exports.ComponentRouter = (
  React
  reactKup
  Cursors
  makeRouter
  ComponentLanding
  ComponentLogin
  ComponentUsers
  ComponentUser
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      that = this

      reactKup (k) ->
        k.div {className: 'ComponentRouter'}, ->
          k.h2 "ComponentRouter"
          k.h3 "ComponentRouter state:"
          k.pre JSON.stringify(that.state)

          route = makeRouter()
          route '/', ->
            k.build ComponentLanding
          route '/login', ->
            k.build ComponentLogin
          route '/users', ->
            k.build ComponentUsers
          route '/users/:id', (params) ->
            k.build ComponentUser,
              id: params.id

          route.dispatch that.state.url
