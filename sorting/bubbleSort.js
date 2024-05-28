function bubbleSort(array){

    var noSwap;
    for (let i=array.length;i>0;i--){
        noSwap=true
        for (let j = 0; j < i-1; j++) {

            console.log(array,array[j],array[j+1]);
            
            if (array[j] > array[j+1]) {
                
            [array[j],array[j+1]]=[array[j+1],array[j]]
                 noSwap = false;
            }
           
        }

        if(noSwap) break;
    }

    return array
}


console.log('The sorted Array is:',bubbleSort([2,3,8,6,7,9]));


// in general n^2  if its almost sorted or somthig like that its linear