function insertionSort(arr) {
  
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];

    console.log("currentVal",currentVal);

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {

      arr[j + 1] = arr[j];
      console.log(arr);
      }

    arr[j + 1] = currentVal;
    console.log(arr,"\n");
    
  }
  return arr;
}

console.log("Answer:",insertionSort([2, 1, 9, 76, 4]));

// 1 2 2 9 76 4
