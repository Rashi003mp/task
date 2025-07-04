//1.	Write a recursive function 
// to calculate the factorial of a number.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1)
}

console.log(factorial(5)); //120

//2.	Write another recursive function 
// that calculates the sum of all numbers up to n.

function sum(n) {
    if (n === 0) {
        return 0;
    }
    return n +sum(n - 1)
}
console.log(sum(10)); //55


//3.	Create a function named operate
//  that accepts a number and a callback function
//  (either factorial or sum) and 
// returns the result by calling the callback.

function operate(num,callback){
  
  return  callback(num)
}

console.log(operate(10,sum));
console.log(operate(5,factorial));

