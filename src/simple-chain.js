const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  getLength() {
    if ('string' in chainMaker) {
      return chainMaker.string.length
    } else {
      return 0
    }
    return this
  },
  addLink(value="") {
   if ('string' in chainMaker) {
     chainMaker.string.push(`( ${value} )`)
   } else {
     chainMaker.string = new Array;
     chainMaker.string.push(`( ${value} )`)
   }
    return this
  },
  removeLink(position) {
    if (position > this.string.length || position <= 0 || typeof position != 'number') {
      this.string = []
      throw new Error('You can\'t remove incorrect link!')
    } else {
      this.string.splice(position - 1, 1)
    }
    return this
  },
  reverseChain() {
    if (this.string !== "You can't remove incorrect link!") {
      this.string.reverse()
      return this
    } else {
      return this
    }
  },
  finishChain() {
    let str = chainMaker.string.join('~~');
    this.string = [];
    return str
    }
};

module.exports = {
  chainMaker
};
