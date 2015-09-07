module.exports.ComponentLogin = (
  React
  reactKup
  Cursors
  ComponentFeedbackSuccess
  ComponentFeedbackError
  login
  validateLogin
  classNames
  urlUsers
  rememberToken
) ->
  React.createClass
    mixins: [Cursors]
    updateCursorFromForm: ->
      data = this.getFormData()
      errors = validateLogin data
      this.update
        page:
          data: {$set: data}
          errors: {$set: errors}

    getFormData: ->
      # TODO possibly auto detect this so we don't have to modify this
      # when adding new form fields
      # - just take all refs
      # - take all refs with certain prefix `input`
      inputRefNames = [
        'identifier'
        'password'
      ]
      refs = this.refs
      data = {}
      inputRefNames.forEach (name) ->
        data[name] = refs[name].getDOMNode().value
      return data

    handleKeyPress: (event) ->
      enterCharCode = 13
      if event.charCode is enterCharCode
        this.handleSubmit()
    handleSubmit: (event) ->
      if event?
        event.preventDefault()
      that = this
      console.log 'ComponentLogin', 'handleClick', this.state.page
      if that.hasErrors()
        this.update
          page:
            hasBeenClicked: {$set: true}
        return
      promise = login(that.state.page.data)
      promise
        .then (data) ->
          rememberToken data.token
          that.update
            # navigate
            path: {$set: urlUsers.stringify()}
            currentUser: {$set: data.user}
            page:
              alert: {$set: null}
        .catch (error) ->
          # TODO extract this
          if error.status is 422
            that.update {page: {alert: {$set: error.response}}}
          else
            that.update {error: {$set: error}}
    componentDidMount: ->
      this.refs.identifier.getDOMNode().focus()
      this.updateCursorFromForm()
    hasSuccess: (name) ->
      this.state.page.data?[name]? and not this.state.page.errors?[name]?
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
        k.div {className: 'container ComponentLogin'}, ->
          k.div {className: 'row'}, ->
            k.div {className: 'col-md-4'}, ->

              k.h1 'Login'

              if that.state.page.alert?
                k.div {
                  className: 'alert alert-danger'
                }, that.state.page.alert

              name = 'identifier'
              k.form {
                onKeyPress: that.handleKeyPress
              }, ->
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
                    ref: name
                    placeholder: 'Email or username'
                    name: name
                    value: that.getValue(name)
                    onChange: that.updateCursorFromForm
                  }
                  if that.hasSuccess(name)
                    k.build ComponentFeedbackSuccess
                  if that.hasError(name)
                    k.build ComponentFeedbackError
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
                    ref: name
                    placeholder: 'Password'
                    name: name
                    value: that.getValue(name)
                    onChange: that.updateCursorFromForm
                  }
                  if that.hasSuccess(name)
                    k.build ComponentFeedbackSuccess
                  if that.hasError(name)
                    k.build ComponentFeedbackError
                    k.span {className: 'help-block'}, that.getError(name)

                k.a {
                  className: classNames(
                    'btn'
                    'btn-primary'
                    {disabled: that.hasBeenClicked() and that.hasErrors()}
                  )
                  onClick: that.handleSubmit
                }, 'Login'
