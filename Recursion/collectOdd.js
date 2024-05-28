
function collectOdd(arr){

    let result=[];

    function helper(helperArr){

        if (helperArr.length===0) {

            return;
        }
        if(helperArr[0]%2 !==0){
            result.push(helperArr[0]);
        }
        helper(helperArr.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOdd([1,2,3,5,10]));