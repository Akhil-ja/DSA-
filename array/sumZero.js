

// Accept sorted array of intgers first pair to have sum = 0


function sumZero(arr){

    let left =0;
    let right =arr.length-1;

    while(left<right){
        let sum=arr[left]+arr[right];

        if(sum===0){
            return [arr[left],arr[right]];

        }else if(sum>0){
            right--;
        }else{
            left--;
        }
    }

    
}
                                     //O(n)


console.log(sumZero([-4,0,1,2,3,4,5,6]));