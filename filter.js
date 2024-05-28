// Avoid repeated number in an array

// 	i/p:

// 		Array = [ 1 , 1 , 3 , 3 , 5 , 4 , 5 , 9 , 8 ]

// 	o/p:

// 		[ 1 , 3 , 5 , 4 , 9 , 8 



function filter(arr){

    let freq={};

    for (let n=0;n<arr.length;n++)
    
    {
        
        freq[arr[n]]=(freq[n]||0)+1;
    }

    let Array=[];
for(n in freq){
    Array.push(Number(n))
}

   return Array;
}


console.log(filter([1, 1, 3, 3, 5, 4, 5, 9, 8]));

