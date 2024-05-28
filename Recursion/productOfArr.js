function productOfArr(arr){
if(arr.length===0){
    return 1;
}

return arr[0]*productOfArr(arr.slice(1));
}

console.log(productOfArr([1,2,2]));

                // O(n)