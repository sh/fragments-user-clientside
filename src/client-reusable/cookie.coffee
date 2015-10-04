# functions to get, set, remove cookies clientside
# source
# https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#A_little_framework_a_complete_cookies_readerwriter_with_full_unicode_support

module.exports.getCookie = (
  document
) ->
  (sKey) ->
    unless sKey?
      return null
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null

module.exports.setCookie = (
  document
) ->
  (sKey, sValue, vEnd, sPath, sDomain, bSecure) ->
    if (not sKey?) or /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)
      return false
    sExpires = ""
    if (vEnd)
      switch (vEnd.constructor)
        when Number
          sExpires = if vEnd is Infinity then "; expires=Fri, 31 Dec 9999 23:59:59 GMT" else "; max-age=" + vEnd
        when String
          sExpires = "; expires=" + vEnd
        when Date
          sExpires = "; expires=" + vEnd.toUTCString()
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (if sDomain then "; domain=" + sDomain else "") + (if sPath then "; path=" + sPath else "") + (if bSecure then "; secure" else "")
    return true

module.exports.removeCookie = (
  document
  hasCookie
) ->
  (sKey, sPath, sDomain) ->
    unless hasCookie(sKey)
      return false
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (if sDomain then "; domain=" + sDomain else "") + (if sPath then "; path=" + sPath else "")
    return true

module.exports.hasCookie = (
  document
) ->
  (sKey) ->
    unless sKey?
      return false
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie)

module.exports.getCookieKeys = (
  document
) ->
  ->
    aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
    return aKeys.map decodeURIComponent
