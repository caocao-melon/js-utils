/**
 * 千分位
 * @param num
 * @returns {string}
 */
function toThousands(num) {
  num = (num || 0) + ''
  return num.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 时间戳转日期
const getLocalTime = (nS) => {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

//价格转化 保留两位小数，0.123=>0.12 12=>12.00 
const returnFloat = x => {
  let f = parseFloat(x)
  f = Math.round(x * 100) / 100
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s
}