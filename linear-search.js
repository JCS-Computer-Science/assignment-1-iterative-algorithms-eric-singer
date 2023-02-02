/**
 * @param {number[]} array
 * @param {number} searchTerm
 */

function linearSearch(array, searchTerm) {
  /*
   ** Check each element from start to finish
   ** until you find an element that matches the search term
   **
   ** Return the index of the found element
   */

  let index = 0;

  array.forEach((num, i) => {
    if (num == searchTerm) {
      index = i;
    }
  });

  return index;
}

module.exports = linearSearch;
