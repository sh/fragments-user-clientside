module.exports.ComponentNavigationToggleButton = (
  React
  reactKup
) ->
  React.createClass
    render: ->
      reactKup (k) ->
        k.button {
          type: 'button'
          className: 'ComponentNavigationToggleButton navbar-toggle collapsed'
          dataToggle: 'collapse'
          dataTarget: '#navbar'
          ariaExpanded: false
          ariaControls: 'navbar'
        }, ->
          k.span {className: 'sr-only'}, 'Toggle navigation'
          k.span {className: 'icon-bar'}
          k.span {className: 'icon-bar'}
          k.span {className: 'icon-bar'}

module.exports.ComponentNavigation = (
  React
  reactKup
  ComponentNavigationToggleButton
  urlRoot
  urlLogin
  urlProfile
  urlUsers
  forgetToken
  redirect
) ->
  React.createClass
    logout: (event) ->
      event.preventDefault()
      console.log 'logging out'
      forgetToken()
      redirect(urlLogin.stringify())
      this.props.cursor.set('currentUser', null)
    render: ->
      that = this
      cursor = this.props.cursor
      currentUser = cursor.get('currentUser')
      reactKup (k) ->
        k.nav {className: 'ComponentNavigation navbar navbar-inverse navbar-fixed-top'}, ->
          k.div {className: 'container'}, ->
            k.div {className: 'navbar-header'}, ->
              k.build ComponentNavigationToggleButton
              k.a {className: 'navbar-brand', href: '/'}, 'Fragment User'
            k.div {id: 'navbar', className: 'collapse navbar-collapse'}, ->
              # TODO add `active` class to active links via helper that
              # takes url cursor
              # ComponentNavigationLink

              if cursor.get('checkingLoginStatus')
                k.p {className: 'nav navbar-text navbar-right'}, "checking login status..."
              else if currentUser?
                k.ul {className: 'nav navbar-nav navbar-left'}, ->
                  k.li -> k.a {href: urlUsers.stringify()}, 'Users'
                k.ul {className: 'nav navbar-nav navbar-right'}, ->
                  k.li -> k.a {href: urlProfile.stringify()}, "Signed in as #{currentUser.name}"
                  k.li -> k.a {href: '', onClick: that.logout}, 'Logout'
              else
                k.ul {className: 'nav navbar-nav navbar-right'}, ->
                  k.li -> k.a {href: urlLogin.stringify()}, 'Login'
