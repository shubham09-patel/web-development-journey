//Write a function called sum that finds the sum from 1 to a number
function sum(a){
    let total = 0;
    for(let i=0; i<=a;i++){
        total= total+i;

    }
    return total;
}

console.log(sum(3));