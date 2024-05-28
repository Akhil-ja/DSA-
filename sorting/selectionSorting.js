function selectionSort(array){

    for (let i = 0; i < array.length; i++) {
       var lowest =i;

       for (let j = i+1; j < array.length; j++) {
       
        if (array[j]<array[lowest]) {
            lowest=j
        }
        
       }

       if(lowest !== i){
        var temp=array[lowest];
        array[lowest]=array[i]
        array[i]=temp;
       }

    }

    return array
}

console.log(selectionSort([2,3,6,10,4]));