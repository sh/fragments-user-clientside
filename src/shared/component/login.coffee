module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentNavigation
  login
  validateLogin
  classNames
  # getCursorStates
) ->
  React.createClass
    mixins: [Cursors]
    handleChange: (event) ->
      # TODO this does not create paths that dont yet exist
      # this sucks
      delta = {}
      delta[event.target.name] = event.target.value
      # TODO $merge is not a deep merge
      # but a shallow one
      command = {page: {data: {$merge: delta}}}
      # here we simulate the state changes
      updated = React.addons.update this.state, command
      errors = validateLogin updated.page.data
      console.log 'errors', errors
      this.update
        page:
          data: {$merge: delta}
          errors: {$set: errors}

    handleClick: (event) ->
      event.preventDefault()
      that = this
      console.log 'ComponentLogin', 'handleClick', this.state.page
      if that.hasErrors()
        this.update
          page:
            hasBeenClicked: {$set: true}
        return
      login(that.state.page.data)
        .then (response) ->
          console.log 'success', response
        .fail (error) ->
          console.log 'error', error
    componentWillMount: ->
      console.log 'ComponentLogin', 'componentWillMount'
      this.update
        page:
          data: {$set: {}}
          errors: {$set: validateLogin {}}
    componentWillReceiveProps: (nextProps) ->
      # after calling `this.update()` in `handleChange` there is no guarantee
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
      # we might check if they've actually differed
      # errors = validateLogin nextState.page.data
      # if errors
      # this.update {page: {errors: {$set: errors}}}
    hasSuccess: (name) ->
      this.state.page.data[name]? and not this.state.page.errors?[name]?
    hasError: (name) ->
      this.hasBeenClicked() and this.state.page.errors?[name]?
    hasFeedback: (name) ->
      this.hasSuccess(name) or this.hasError(name)
    hasErrors: ->
      this.state.page.errors?
    hasBeenClicked: ->
      this.state.page.hasBeenClicked is true
    getError: (name) ->
      this.state.page.errors?[name]
    getValue: (name) ->
      this.state.page.data?[name]
    isReadyForRender: ->
      this.state.page.data?
    render: ->
      that = this
      console.log 'ComponentLogin', 'render', 'this.state', this.state
      reactKup (k) ->
        k.div {className: 'ComponentLogin'}, ->
          unless that.isReadyForRender()
            return
          k.build ComponentNavigation
          k.div {className: 'container'}, ->
            k.div {className: 'row'}, ->
              k.div {className: 'col-md-4'}, ->

                k.h1 'Login'

                name = 'identifier'
                k.form ->
                  k.div {
                    className: classNames(
                      'form-group'
                      {'has-success': that.hasSuccess(name)}
                      {'has-error': that.hasError(name)}
                      {'has-feedback': that.hasFeedback(name)}
                    )
                  }, ->
                    k.label {htmlFor: "input-#{name}"}, 'Email or username'
                    k.input {
                      type: 'text',
                      className: 'form-control'
                      id: "input-#{name}"
                      placeholder: 'Email or username'
                      name: name
                      value: that.getValue(name)
                      onChange: that.handleChange
                    }
                    if that.hasSuccess(name)
                      # TODO put this into its own component
                      k.span {className: 'glyphicon glyphicon-ok form-control-feedback'}
                    if that.hasError(name)
                      # TODO put this into its own component
                      k.span {className: 'glyphicon glyphicon-remove form-control-feedback'}
                      k.span {className: 'help-block'}, that.getError(name)

                  name = 'password'
                  k.div {
                    className: classNames(
                      'form-group'
                      {'has-success': that.hasSuccess(name)}
                      {'has-error': that.hasError(name)}
                      {'has-feedback': that.hasFeedback(name)}
                    )
                  }, ->
                    k.label {htmlFor: "input-#{name}"}, 'Password'
                    k.input {
                      type: 'password',
                      className: 'form-control'
                      id: "input-#{name}"
                      placeholder: 'Password'
                      name: name
                      value: that.getValue(name)
                      onChange: that.handleChange
                    }
                    if that.hasSuccess(name)
                      # TODO put this into its own component
                      k.span {className: 'glyphicon glyphicon-ok form-control-feedback'}
                    if that.hasError(name)
                      # TODO put this into its own component
                      k.span {className: 'glyphicon glyphicon-remove form-control-feedback'}
                      k.span {className: 'help-block'}, that.getError(name)

                  k.a {
                    className: classNames(
                      'btn'
                      'btn-primary'
                      {disabled: that.hasBeenClicked() and that.hasErrors()}
                    )
                    onClick: that.handleClick
                  }, 'Login'
