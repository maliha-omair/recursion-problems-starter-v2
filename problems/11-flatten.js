/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(arr){
  if (arr.length === 0) {
    return []
  }
  
  let res = []
  for(let i =0; i < arr.length; i++) {
    // console.log(arr[i])
    if(Array.isArray(arr[i])){
      res.push(...flatten(arr[i]))
    }else {
      res.push(arr[i])
    }

    // res.push(arr[i])
    // res.concat(flatten(arr[i]))
    
 
  }
  return res

}

console.log(flatten([1, [2, [3]]]))


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
