# log

**a log of pitfalls, limitations and things to be aware off**

*new entries get added at the top*

### `this.setState()` is not synchronous (2015-09-07)

> setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value.
> There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.

https://facebook.github.io/react/docs/component-api.html#setstate

### can't use [`this.update()`](https://github.com/caseywebdev/cursors#thisupdatedeltas) like you'd use [`this.setState()`](https://facebook.github.io/react/docs/component-api.html#setstate) (2015-09-07)

`this.update()` calls `this.setState()` on the component that has the root of
the cursor tree. it does not call `this.setState()` on the current component
unless that component is the one that has the root of the cursor tree.

you can use `this.setState()` within `componentWillReceiveProps` with the following guarantee:
> Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.
https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops

unintuitiely you can't use `this.update()` within `componentWillReceiveProps`.
doing this results in an infinite loop as `this.update()` starts rendering again
at the component that has the root of the cursor tree.
**this makes it difficult to update cursors depending on changes to other cursors.**

you can use `this.setState()` within `componentWillMount` with the following guarantee:
> If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount

unintuitively this is again not the case with `this.update()`.
if you use `this.update()` within `componentWillMount`
`render()` will be called twice: once with the state before the update and once
with the state after the update.
**`componentWillMount` can't be used to easily initialize cursor state on mount.**
a guard in render has to be used to protect against that first render when
the component is not yet initialized.
**this is ugly. find a better solution !**

### React.addons.update `$merge` command is shallow not deep (2015-09-07)

```
var data = {
  page: {
    user: {}
  }
};
update(data, {page: {$merge: {user: {password: '...', name: '...'}}}});
```
i had expected this to simply update the password and name fields of the
user to new values and leave the rest of the existing user untouched.
instead it completely replaces the user.

applies to
https://github.com/caseywebdev/cursors#thisupdatedeltas
and
https://facebook.github.io/react/docs/update.html#available-commands

### React.addons.update commands do not create missing levels (2015-09-07)

this fails because `page.user` is not already present:
```javascript
var data = {
  page: {}
};
update(data, {page: {user: {password: {$set: '...'}}}});
```
`page.user` doesn't get created as i expected.

this works however:
```javascript
var data = {
  page: {
    user: {}
  }
};
update(data, {page: {user: {password: {$set: '...'}}}});
```

i think this is unintuitive.
i was used to that behaviour from clojure which is more intuitive in that regard (accross the board):

example:
> If any levels do not exist, hash-maps will be
created.
https://clojuredocs.org/clojure.core/update-in

applies to
https://github.com/caseywebdev/cursors#thisupdatedeltas
and
https://facebook.github.io/react/docs/update.html#available-commands
