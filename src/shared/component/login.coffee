module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    handleChange: (event) ->
      console.log 'ComponentLogin', 'handleChange', event
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
                      value: that.state.identifier
                      onChange: that.handleChange
                    }
                  k.div {className: 'form-group'}, ->
                    k.label {htmlFor: 'inputPassword'}, 'Password'
                    k.input {
                      type: 'password',
                      className: 'form-control'
                      id: 'inputPassword'
                      placeholder: 'Password'
                      name: 'password'
                      value: that.state.password
                      onChange: that.handleChange
                    }
                  k.button {
                    type: 'submit'
                    className: 'btn btn-default'
                    onClick: that.handleClick
                  }, 'Login'
