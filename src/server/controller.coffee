module.exports.singlePageAppController = (
  GET
) ->
  # TODO support all clientside routes here
  # share clientside routes with server
  # ONE single array of clientside routes
  # loop over them and serve singlePageApp
  # combine with sequenz
  # TODO support GET pattern, nameOfFragment
  GET '/', (
    endKup
    singlePageAppLayout
    k
  ) ->
    singlePageAppLayout ->
      # this is where the react ComponentRoot will be mounted later
      k.div id: 'root'
    endKup()

