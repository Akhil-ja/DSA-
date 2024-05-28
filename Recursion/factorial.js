// function factorial(n){
     
//     let fact=1;

//     for(let i=n;i>1;i--){
//         fact*=i;
//     }

//     return fact;

// }

console.log(factorial(3));




function factorial(n){
   
    if(n==1){
        return 1;
    }
    return n*factorial(n-1)
    
}