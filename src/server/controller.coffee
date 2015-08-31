module.exports.singlePageAppController = (
  GET
) ->
  GET '/', (
    endKup
    singlePageAppLayout
    k
  ) ->
    singlePageAppLayout ->
      k.div id: 'root'
    endKup()

