/**
 * @param {number[]} array
 * @param {number} searchTerm
 */

function binarySearch(array, searchTerm) {
  /*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === searchTerm) {
      return middle;
    }

    if (array[middle] < searchTerm) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
