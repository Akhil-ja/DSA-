function factorialRecursuive(n){

    if(n===0){
        return 1;
    }

    return n*factorialRecursuive(n-1);
}

console.log(factorialRecursuive(4));