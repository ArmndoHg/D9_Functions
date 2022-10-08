/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log('----------EXERCISE 1-----------')
function area(l1 = 0, l2 = 0){
    return l1 * l2;
}

console.log('The rectangagle area is:',area (5,3))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n----------EXERCISE 2-----------");

function crazySum(v1,v2){
    return v1 === v2 ? (v1+v2)*3 : v1 + v2;
}

console.log(crazySum(5,5));
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("\n----------EXERCISE 3-----------");
function crazyDiff(d1){
    return d1 < 19 ? (19-d1) : (d1-19)*3;
}
console.log(crazyDiff(40))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("\n----------EXERCISE 4-----------");

function boundary(p){
    return p>20 && p>=100 ? false : true;

}
console.log(boundary(120))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n----------EXERCISE 5-----------");

function Srivify(Str){
    return Str === 'Strive' ? Str: 'Strive '+ Str;
}
console.log(Srivify('Strive'))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/


console.log("\n----------EXERCISE 6-----------");

function check3and7(nudi) {
  if (nudi % 3 == 0 || nudi % 7 == 0) {
    return nudi + " is a multiple of 3 or 7";
  } else {
    return "It's not a multiple of 3 or 7";
  }
}
console.log(check3and7(15));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("\n----------EXERCISE 7-----------");

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("\n----------EXERCISE 8-----------");

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperFirst("capitalize"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("\n----------EXERCISE 9-----------");

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("\n----------EXERCISE 10-----------");

function giveMeRandom(Rnber) {
  let arr = [];
  for (i = 0; i < Rnber; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

console.log(giveMeRandom(7));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
