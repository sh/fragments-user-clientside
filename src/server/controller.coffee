module.exports.singlePageAppController = (
  GET
  sequenz
  clientsideUrls
) ->
  sequenz clientsideUrls.map (url) ->
    GET url, (
      endKup
      singlePageAppLayout
      k
    ) ->
      # TODO support GET pattern, nameOfFragment
      # in order to be able to extract this function into its own factory
      singlePageAppLayout ->
        # this is where the react ComponentRoot will be mounted later
        k.div id: 'root'
      endKup()

