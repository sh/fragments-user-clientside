module.exports.rootCursor = (
  Baobab
) ->
  options =
    autoCommit: true
    # delay update to next tick
    asynchronous: true
    immutable: true
    # that we can immediately read what we wrote
    syncwrite: true
  initialData =
    page: {}
    # TODO do this in init
    checkingLoginStatus: true
  new Baobab initialData, options
