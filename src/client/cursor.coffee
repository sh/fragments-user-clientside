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
  initialData = {}
  new Baobab initialData, options
