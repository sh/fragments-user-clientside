module.exports.ComponentLogin = (
  React
  reactKup
  ComponentFeedbackSuccess
  ComponentFeedbackError
  login
  validateLogin
  classNames
  urlUsers
  rememberToken
  redirect
) ->
  React.createClass
    updateCursorFromForm: ->
      data = this.getFormData()
      errors = validateLogin data
      this.props.page.set 'data', data
      this.props.page.set 'errors', errors

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
      props = this.props
      page = props.page
      console.log 'ComponentLogin', 'handleClick', page.get()
      if that.hasErrors()
        page.set('hasClickedSubmit', true)
        return
      promise = login(page.get('data'))
      promise
        .then (data) ->
          # remember that the user is logged in
          rememberToken data.token
          # redirect to user table after login
          redirect urlUsers.stringify()
          # log the user in
          props.currentUser.set data.user
          # clear the alert
          page.set 'alert', null
        .catch (error) ->
          # TODO extract this
          if error.status is 422
            page.set 'alert', error.response
          else
            props.error.set error
    componentWillMount: ->
      # clear page
      this.props.page.set({})
    componentDidMount: ->
      this.refs.identifier.getDOMNode().focus()
      this.updateCursorFromForm()
    hasSuccess: (name) ->
      this.getValue(name)? and not this.getError(name)?
    hasError: (name) ->
      this.hasClickedSubmit() and this.getError(name)?
    hasFeedback: (name) ->
      this.hasSuccess(name) or this.hasError(name)
    hasErrors: ->
      this.props.page.get('errors')?
    hasClickedSubmit: ->
      this.props.page.get('hasClickedSubmit') is true
    getError: (name) ->
      this.props.page.get(['errors', name])
    getValue: (name) ->
      this.props.page.get(['data', name])
    render: ->
      that = this
      console.log 'ComponentLogin', 'render'
      reactKup (k) ->
        k.div {className: 'container ComponentLogin'}, ->
          k.div {className: 'row'}, ->
            k.div {className: 'col-md-4'}, ->

              k.h1 'Login'

              if that.props.page.get('alert')?
                k.div {
                  className: 'alert alert-danger'
                }, that.props.page.get('alert')

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
                    {disabled: that.hasClickedSubmit() and that.hasErrors()}
                  )
                  onClick: that.handleSubmit
                }, 'Login'
