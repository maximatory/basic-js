const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = ""
   if (Array.isArray(members) == true) {
      let stringFilter = members.filter(function(elem) {
         if (typeof elem == "string") {
           return true
         } else {
           return false
         }
       })
  let arr = stringFilter.map(function (elem) {
    return elem.replace(/\s/g, '');
  })
      for (let elem of arr.sort(function (a, b) {
         return a.toLowerCase().localeCompare(b.toLowerCase());
  })) {
    if (typeof elem == 'string') {
      result = result + elem[0].toUpperCase();
    } else {
      result = false;
    }
  }
} else {
  result = false;
}
   return result;
}


module.exports = {
  createDreamTeam
};
