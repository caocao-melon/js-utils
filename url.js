/**
 * 获得地址栏中指定参数名称的参数值
 */
function getQueryString(name, search) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  search = search || window.location.search
  var r = search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

/**
 * 设置地址栏中指定参数名称的参数值
 */
function setQueryString(key, url) {
  url = url || window.location.href
    let queryObj = key
    let urlArr = url.split('?')
    let searchArr = []
    let searchItem
    let searchObj = {}
    let queryStr = ''
    if (urlArr.length > 1) {
      searchArr = urlArr[1].split('&')
    }
    for (let i = 0; i < searchArr.length; i++) {
      try {
        searchItem = searchArr[i].split('=')
        searchObj[searchItem[0]] = searchItem[1]
      } catch (e) { }
    }
    for (let p in queryObj) {
      searchObj[p] = queryObj[p]
    }
    for (let p in searchObj) {
      if (searchObj[p]) {
        queryStr += `&${p}=${searchObj[p]}`
      }
    }
    queryStr = queryStr.replace('&', '?')
    url = urlArr[0] + queryStr

  return url
}