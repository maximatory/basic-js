const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let arr = [];
  let arr2 = []
  let obj = {}
  for(let elem of domains){
    arr.push(elem.split('.'))
  }
  arr.forEach(elem=>{
    if(elem.length === 1){
      arr2.push(`.${elem[0]}`)
    } else if (elem.length === 2){
      arr2.push(`.${elem[1]}`)
      arr2.push(`.${elem[1]}.${elem[0]}`)
    } else {
      arr2.push(`.${elem[2]}`)
      arr2.push(`.${elem[2]}.${elem[1]}`)
      arr2.push(`.${elem[2]}.${elem[1]}.${elem[0]}`)
    }
  })
  arr2.forEach(elem=>{
    if(obj[elem] == null){
      obj[elem] = 1
    } else {
      obj[elem] = parseInt(obj[elem]) + 1;
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
