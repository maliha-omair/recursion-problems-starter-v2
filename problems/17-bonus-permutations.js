/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(array){
if(array.length === 0) {
  return array
}

let num = array.reduce((prod, el) => {
  return prod * el
}, 1)


let newArr = []
for (let i = 0; i < num; i++){
console.log(helper(array, array[i], array[i + 1]))
// newArr.push()
}
}

function helper(arr, first, second){
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp

  return arr
}

permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
