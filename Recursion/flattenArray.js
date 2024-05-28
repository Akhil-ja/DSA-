function flatten(array) {
  var result = [];


  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }


  return result;
}

console.log(flatten([1, 2, 3, [4, 5]]));




                    
