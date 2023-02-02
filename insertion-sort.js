/**
 *
 * @param {number[]} array
 * @returns
 */

function insertionSort(array) {
  /*
   ** For each element in the array, swap it with the element
   ** before it over and over as long as the element before it
   ** is bigger
   */

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }

  return array;
}

module.exports = insertionSort;
