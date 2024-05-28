// function collectEven(arr){
    
//     let result=[];

    

//     function helper(helperArr){
//         if(helperArr.length===0){
//             return;
//         }

//         if(helperArr[0]%2===0){
//            result.push(helperArr[0]);

//         }

//        helper( helperArr.slice(1))
//     }

//     helper(arr);

//     return result;
// }


console.log(collectEven([1,4,5,8,10,4]));

function collectEven(arr){
    result=[];

    if (arr.length === 0) {
      return [];
    }

    if(arr[0]%2===0){
        result.push(arr[0]);
    }

   result=result.concat(collectEven(arr.slice(1)));

   return result;
}
