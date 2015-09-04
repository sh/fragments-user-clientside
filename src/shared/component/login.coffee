module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentNavigation
) ->
  React.createClass
    mixins: [Cursors]
    render: ->
      reactKup (k) ->
        k.div {className: 'ComponentLogin'}, ->
          k.build ComponentNavigation
          k.div {className: 'container'}, ->
            k.div {className: 'row'}, ->
              k.div {className: 'col-md-4'}, ->
                k.h1 'Login'
                k.form ->
                  k.div {className: 'form-group'}, ->
                    k.label {htmlFor: 'inputEmail'}, 'Email or username'
                    k.input {
                      type: 'email',
                      className: 'form-control'
                      id: 'inputEmail'
                      placeholder: 'Email or username'
                    }
                  k.div {className: 'form-group'}, ->
                    k.label {htmlFor: 'inputPassword'}, 'Password'
                    k.input {
                      type: 'password',
                      className: 'form-control'
                      id: 'inputPassword'
                      placeholder: 'Password'
                    }
                  k.button {
                    type: 'submit'
                    className: 'btn btn-default'
                  }, 'Login'
