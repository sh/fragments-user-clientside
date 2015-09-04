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
  urlUsers
) ->
  React.createClass
    mixins: [Cursors]
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
              k.ul {className: 'nav navbar-nav'}, ->
                k.li -> k.a {href: urlRoot.stringify()}, 'Home'
                # TODO only display when logged out. otherwise display logout
                k.li -> k.a {href: urlLogin.stringify()}, 'Login'
                # TODO only display when logged in
                k.li -> k.a {href: urlUsers.stringify()}, 'Users'
