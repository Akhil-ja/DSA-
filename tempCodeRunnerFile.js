function partition(array,start=0,end=array.length){


    function swap(arr,i,j){
        [arr[i],arr[j]=arr[j],arr[i]]
    }

    let pivot=array[start]
    let i=start
    let j=end


    while(i<j){

        while(pivot<=array[i]){
            i++
        }

        while(pivot>array[j]){
            j--
        }

        if(i<j){
            swap(array,i,j)
        }

    }

    swap(array,start,j)

    return j

}


function quickSort(array,start=0,end=array.length-1){

    if(start<end){
        let pivotIndex=partition(array,start,end)

        mergeSort(array,start,end=pivotIndex-1)
        mergeSort(array, start=pivotIndex+1, end);
    }

    return array


}