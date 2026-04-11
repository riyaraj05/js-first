const name = "riya"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  //lets you access  prototype


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));    //char at give index
console.log(gameName.indexOf('t'));    //position of chararcter

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //can give -ve values
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes  the space

const url = "https://riya.com/riya%20raj"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));