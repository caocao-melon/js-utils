/**
 * 千分位
 * @param num
 * @returns {string}
 */
function toThousands(num) {
  num = (num || 0) + ''
  return num.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

/**
 * 时间戳转日期
 * @param timestamp
 * @returns {string}
 */
function formatDate(timestamp) {
  var date = new Date(timestamp)
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
  var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
  return Y + M + D + h + m + s
}
