// notes for this section:

// WHAT ON EARTH ARE PROTOTYPES???

// src: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// Prototypes are the mechanisims by which JavaScript Objects inheirit features from one another. 
// to provide inheiritance JavaScript Objects can have a prototype object which acts as a template object that it inheirits methods and properties from. 


// Array.prototype.length() this is an example of how inheiritance works, Array types have built in functions that can act as helpers, or manipulate that array data. 

const arr = [1,2,3];

arr.sing = function(){console.log("LA LA LA!")};

// if we console.log arr we can see that it now has a property or a function called sing

console.log(arr);
// what it looks like in console. 

// (3) [1, 2, 3, sing: ƒ]
// 0: 1
// 1: 2
// 2: 3
// sing: ƒ ()
// length: 3
// [[Prototype]]: Array(0)

// what it looks like in console when we invoke sing 
// (3) [1, 2, 3, sing: ƒ]0: 11: 22: 3sing: ƒ ()length: 3[[Prototype]]: Array(0)
// arr.sing()
// app.js:15 LA LA LA!

// BUT if we call arr in console and call .push() on it we dont see that listed like we do sing() instead it is part of the prototype of the array: 

// arr
// (3) [1, 2, 3, sing: ƒ]
// 0: 1
// 1: 2
// 2: 3
// sing: ƒ ()
// length: 3
// [[Prototype]]: Array(0)
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
// [[Prototype]]: Object

// its  a property that references the array prototype! 
// this is the template object that references the properties of arrays. 

// even document.body has a prototype that has certain built in properties that automatically come along with it. 

// so certain data structures and even the dom have prototypes, we can find this out by typing Array.prototype and it will list all of its function in the prototype object 

// pick back up tomorrow and git those commits! 
