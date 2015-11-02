module.exports.offsetAndLimitToPageAndPerPage = (
) ->
  ({limit, offset}) ->
    # pages start with 1
    page: Math.floor(offset / limit) + 1
    perPage: limit

module.exports.pageAndPerPageToOffsetAndLimit = (
) ->
  ({page, perPage}) ->
    # pages start with 1
    offset: (page - 1) * perPage
    limit: perPage

# TODO this does the job but is kinda ugly.
# dont have a better solution at the moment.
# would be nice to have some sort of two-way mapping between
# query and cursor.
# maybe that's possible with baobab somehow.
# however two-way bindings suck in general.
module.exports.updatePageAndPerPage = (
  offsetAndLimitToPageAndPerPage
  pageAndPerPageToOffsetAndLimit
  updateQuery
) ->
  (fn) ->
    updateQuery (query) ->
      pageAndPerPage = offsetAndLimitToPageAndPerPage(query)
      newPageAndPerPage = fn(pageAndPerPage)
      newOffsetAndLimit = pageAndPerPageToOffsetAndLimit(newPageAndPerPage)
      query.offset = newOffsetAndLimit.offset
      query.limit = newOffsetAndLimit.limit
      return query
