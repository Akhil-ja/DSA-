function partition(array,start=0,end=array.length){


    function swap(arr,i,j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }

    let pivot=array[start]
    let i=start
    let j=end


    while(i<j){

        while(pivot>=array[i]){
            i++
        }

        while(pivot<array[j]){
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

        quickSort(array,start,pivotIndex-1)
        quickSort(array, pivotIndex+1, end);
    }

    return array


}

console.log(quickSort([3, 5, 10, 1]));




// function merge(arr1,arr2){

//     let i=0,j=0;
//     let result=[]

//     while(i<arr1.length && j<arr2.length){

//         if(arr1[i]<arr2[j]){
//            result.push(arr1[i])
//             i++
//         }else{
//              result.push(arr2[j]);
//              j++;
//         }
//     }


//     while (i<arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }


//     while (j<arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     return result
// }

// function mergeSort(array){

//     if(array.length<=1) return array

//    let middle=Math.floor(array.length/2)

//     let left=mergeSort(array.slice(0,middle))
//     let right = mergeSort(array.slice(middle));

//    return merge(left,right)
// }








// push 

// x-->q2

// q1-->q2

// swap

// q1:[2,1]

// q2:[]