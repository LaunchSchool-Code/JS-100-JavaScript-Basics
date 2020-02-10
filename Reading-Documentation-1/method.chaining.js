// Given the following tweet:

const tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What will the following statements evaluate to?
console.log(tweet.split(' ')); // ['Starting', 'to', 'get', ...]
console.log(tweet.split(' ').reverse()); // ['#launchschool', #javascript', ...]
// prettier-ignore
console.log(tweet.split(' ').reverse().join(' ')); // '#launchschool#javascript...'
