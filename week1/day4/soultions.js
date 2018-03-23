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

//PYTHAGORAS

let pythagoras = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
console.log(pythagoras(8, 6));
