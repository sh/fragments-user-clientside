module.exports.singlePageAppController = (
  GET
) ->
  GET '/', (
    endKup
    singlePageAppLayout
    k
  ) ->
    singlePageAppLayout ->
      # this is where the react ComponentRoot will be mounted later
      k.div id: 'root'
    endKup()

