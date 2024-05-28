function linearSearch(arr,n){

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
        return i;
      }
    }

    return -1
}

console.log(linearSearch([1,3,54,67,8,34,3],3));