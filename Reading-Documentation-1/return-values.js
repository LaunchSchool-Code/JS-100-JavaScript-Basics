// Consider the following code snippet:
const tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

const words = tweet.split(' ');
const isValid = tweet.length < 140;

// What will the following statements return?
console.log(typeof tweet); // string
console.log(typeof words); // object
console.log(typeof isValid); // boolean

/*
Note: Because JS typeof returns object for an array and object, if
it is necessary to determine if a variable is an array specifically,
then use Array.isArray(varName);
*/
console.log('words =', words);
console.log('Array.isArray(words) =', Array.isArray(words));
