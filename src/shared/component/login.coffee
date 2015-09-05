module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentNavigation
  login
  validateLogin
  getCursorStates
) ->
  React.createClass
    mixins: [Cursors]
    handleChange: (event) ->
      command = {page: {data: {}}}
      command.page.data[event.target.name] = $set: event.target.value
      this.update command
    handleClick: (event) ->
      event.preventDefault()
      console.log 'ComponentLogin', 'handleClick', this.state.page
      login(this.state.page.data)
        .then (response) ->
          console.log 'success', response
        .fail (error) ->
          console.log 'error', error
    componentWillMount: ->
      console.log 'ComponentLogin', 'componentWillMount'
      this.update {page: {$set: {data: 'foo'}}}
    componentWillReceiveProps: (nextProps) ->
      # after calling `this.update()` in `handlChange` there is no guarantee
      # that `this.state` already reflects our changes.
      # `this.update()` calls `this.setState().
      # `this.setState()` does not immediately mutate `this.state` but
      # creates a pending state transition.
      # accessing `this.state` after calling this method can
      # potentially return the existing value
      # (https://facebook.github.io/react/docs/component-api.html).
      # if you need to update state in response to a prop change,
      # use `componentWillReceiveProps`
      # (https://facebook.github.io/react/docs/component-specs.html).
      # we need to update the state with validation results in response
      # to prop changes.
      # console.log 'ComponentLogin', 'componentWillReceiveProps'
      # nextState = getCursorStates nextProps.cursors
      # console.log 'nextState', nextState
      # errors = validateLogin nextState.page.data
      # this.update {page: {errors: {$set: errors}}}
    render: ->
      that = this
      console.log 'ComponentLogin', 'render', 'this.state', this.state
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
                      value: that.state.page.data.identifier
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
                      value: that.state.page.data.password
                      onChange: that.handleChange
                    }
                  k.button {
                    type: 'submit'
                    className: 'btn btn-default'
                    onClick: that.handleClick
                  }, 'Login'
