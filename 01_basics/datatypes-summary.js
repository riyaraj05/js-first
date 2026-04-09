//  Primitive- store actual values directly, not references.
// (call by value- copy of the value is passed)
//  7 types : String, Number, Boolearn, null(empty), undefined, Symbol(used to make unique value), BigInt

// JavaScript is a dynamically typed language(datatype is decided at runtime)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   //way to write undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456543576654356754n  //means this number is a BigInt

//reference (non-primitive)-do NOT store the actual value directly. Instead, they store a reference (address in memory) where the value is kept.
// array, objects, functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){              //variable type function declaration
    console.log("Hello world");
}

console.log(typeof anotherId);             //used for knowing data type

/*
 type of value                   result
    undefined                    undefined
    null                         object * cuz unique
    boolean                      boolean
    string                       string
    function                     function //for non primitive

 */


// https://262.ecma-international.org/5.1/#sec-11.4.3