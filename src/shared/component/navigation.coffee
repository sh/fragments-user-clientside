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
  Cursors
  ComponentNavigationToggleButton
  urlRoot
  urlLogin
  urlProfile
  urlUsers
  forgetToken
) ->
  React.createClass
    mixins: [Cursors]
    logout: (event) ->
      event.preventDefault()
      forgetToken()
      this.update
        path: {$set: '/login'}
        currentUser: {$set: null}
    render: ->
      that = this
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

              if that.state.currentUser?
                k.ul {className: 'nav navbar-nav navbar-left'}, ->
                  k.li -> k.a {href: urlUsers.stringify()}, 'Users'
              if that.state.currentUser?
                k.ul {className: 'nav navbar-nav navbar-right'}, ->
                  k.li -> k.a {href: urlProfile.stringify()}, "Signed in as #{that.state.currentUser.name}"
                  k.li -> k.a {href: '', onClick: that.logout}, 'Logout'
              else
                k.ul {className: 'nav navbar-nav navbar-right'}, ->
                  k.li -> k.a {href: urlLogin.stringify()}, 'Login'
