/*
 * Is there a method to capitalize a string, for example turning
 * 'mountain' into 'Mountain'?
 */

// no built in method, must use toUpperCase method with
// string concatenation

const mtn = 'mountain';
const mtnCap = mtn[0].toUpperCase() + mtn.slice(1);

console.log(mtnCap);
