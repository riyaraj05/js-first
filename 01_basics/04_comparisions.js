// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //true ->should be of same datatype
// console.log("02" > 1); //true

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true cuz comparisons converta null to a number, treating it as 0

console.log(undefined == 0);    //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === (strict check)

console.log("2" === 2);