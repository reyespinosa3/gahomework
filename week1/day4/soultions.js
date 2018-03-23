console.log("Ready to go");

// What is the difference between a PARAMETER and an ARGUEMENT?
// A Parameter is the variable in a function. An Arguement is the actual value of the variable the function the function will use.

// What is the difference between RETURN and CONSOLE.LOG?
// RETURN will return a value to the function. CONSOLE.LOG will output a message to the console (used for debugging code).

//PALINDROME
let isPal = (word) => {
  let lower = word.toLowerCase();
  return (lower === lower.split('').reverse().join(''))
}
isPal("rad");

//DIGIT SUM
let sumDigits = (num) => {
  return num.toString()
  .split('').map(Number).reduce(function (a, b) {
            return a + b;
        }, 0);
}
console.log(sumDigits(422));

let calculateSide = (sideA, sideB) => {
  return
}

//hello
//PYTHAGORAS

let pythagoras = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log(pythagoras(8, 6));


//SUM ARRAY
let sum = 0;

let sumArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

//CHECK PRIME NUMBER
let isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
}
isPrime(6);

//PRINT PRIME NUMBERS
let printPrime = (num) => {
  for (let i = 2; s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0 && num !== 1) {
      console.log(i);
    }
  }
}
printPrime(21);

// Insert Dash

// break number into an array
// compare number in array to next number in array
// if both are odd insert a dash between them
// loop around and do it again until end of array
