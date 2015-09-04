module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    # TODO maybe extract into helper function
    # TODO make it easy to sync an entire form with the state
    updateIdentifier: (event) ->
      this.update
        page:
          identifier:
            $set: event.target.value
    updatePassword: (event) ->
      this.update
        page:
          password:
            $set: event.target.value
    handleClick: (event) ->
      event.preventDefault()
      console.log 'ComponentLogin', 'handleClick', event
    render: ->
      that = this
      reactKup (k) ->
        k.div {className: 'ComponentLogin'}, ->
          k.build ComponentNavigation
          k.div {className: 'container'}, ->
            k.div {className: 'row'}, ->
              k.div {className: 'col-md-4'}, ->
                k.h1 'Login'
                k.form ->
                  k.div {className: 'form-group'}, ->
                    k.label {htmlFor: 'inputIdentifier'}, 'Email or username'
                    k.input {
                      type: 'text',
                      className: 'form-control'
                      id: 'inputIdentifier'
                      placeholder: 'Email or username'
                      name: 'identifier'
                      value: that.state.page.identifier
                      onChange: that.updateIdentifier
                    }
                  k.div {className: 'form-group'}, ->
                    k.label {htmlFor: 'inputPassword'}, 'Password'
                    k.input {
                      type: 'password',
                      className: 'form-control'
                      id: 'inputPassword'
                      placeholder: 'Password'
                      name: 'password'
                      value: that.state.page.password
                      onChange: that.updatePassword
                    }
                  k.button {
                    type: 'submit'
                    className: 'btn btn-default'
                    onClick: that.handleClick
                  }, 'Login'
