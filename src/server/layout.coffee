module.exports.singlePageAppLayout = (
  k
  maybeEnvStringMinifiedJavascriptPath
  javascripts
) ->
  (renderContent) ->
    k.doctype()
    k.html ->
      k.head ->
        k.meta charset: "utf-8"
        k.meta name: "viewport", content: "width=device-width, initial-scale=1"
        k.link href: "public.css", rel: "stylesheet", type: "text/css"
      k.body ->
        renderContent?()
        if maybeEnvStringMinifiedJavascriptPath?
          k.script src: maybeEnvStringMinifiedJavascriptPath
        else
          javascripts.forEach (file) -> k.script src: "#{file}"
