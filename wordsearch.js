const transpose = require("../../../matrix_transposition")

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const vertical = transpose(letters).map(ls => ls.join(''))
  let isWord = false
  for (l of horizontalJoin) {
      if (l.includes(word))
      isWord = true
  }
  for (l of vertical) {
      if (l.includes(word))
      isWord = true
  }
  return isWord
};

module.exports = wordSearch