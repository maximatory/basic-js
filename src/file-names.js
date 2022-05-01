const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
let copy = [...names];
let cillDouble = [...new Set(copy)];
let result = [];

cillDouble.forEach(el=>{
  let acc = -1;
  for (let i = 0; i < copy.length; i++) {
    if (el === copy[i]) {
      acc+=1
      copy[i] = copy[i] + `(${acc})`
    }
  }
})

for(let el of copy){
  if (el.slice(-3) == "(0)") {
    result.push(el.slice(0, -3))
  } else {
    result.push(el)
  }
}
  return result;
}

module.exports = {
  renameFiles
};
