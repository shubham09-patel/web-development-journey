//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
let numbers = [1, 2, 3, 4, 5, 6];

function getEvenNumbers(arr) {
   return arr.filter(function(num){
    return num % 2 === 0;
   });
}
console.log(getEvenNumbers(numbers));