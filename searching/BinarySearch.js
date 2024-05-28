function BinarySearch(arr,target){

    var start=0;
    var end=arr.length-1;
    var middle= Math.floor((start+end)/2)

    while (arr[middle] !==target && start<=end) {
        if(target<arr[middle]){
            end =middle-1;
        }else{
            start=middle+1
        }
         middle = Math.floor((start + end) / 2);
    }
if(arr[middle]===target){
    return middle;
}else{
    return -1;
}


}


console.log(BinarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19],8));