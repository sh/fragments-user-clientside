module.exports.singlePageAppController = (
  GET
) ->
  GET '/', (
    endKup
    singlePageAppLayout
  ) ->
    singlePageAppLayout()
    endKup()

