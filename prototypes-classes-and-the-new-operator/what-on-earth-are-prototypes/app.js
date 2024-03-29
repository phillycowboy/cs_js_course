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

// we can even set functions to different types of prototypes so lets use a String.protoype
String.prototype.grumpus = () => {alert("GO AWAY!!")}

// and in console we have this: 
// String.prototype
// String {'', grumpus: ƒ, constructor: ƒ, anchor: ƒ, big: ƒ, …}

// and if we call this function we need a string to attach it to
// const cat = "Blue"
// cat.grumpus();
// console.log(cat.grumpus())

// we should get an alert in our document that says "GO AWAY!!"

// now lets add a different property called yell, we need to access the String.prototype first. 
// we always need to access the string object to add on to it 
// String.prototype.yell = function(){
//     console.log(this);
//     console.log(this.toUpperCase());
// }

// const str = "hello"
// str.yell();

// this is reffering to the string of "hello"
// we can even call built in function of the class of String for example toUpperCase() and have it do the same thing. 

// this will refer to anything that is on the left side of the dot in this case this is referring to a string of hello

// we can also do this with a string template literal in the browser so we can call any function on an instance of a string:

String.prototype.yell = function(){
    return `OMGGGGGG ${this.toUpperCase()} AHHHKHKHKJH!!!!!!!!!!!`;
}

// and in console we can define a string of "i love you" and attach .yell() to it and should get this: 

// "i love you".yell()
// 'OMGGGGGG I LOVE YOU AHHHKHKHKJH!!!!!!!!!!!'

// we can also override and access properties it already has, not the best practice but just to demonstrate:

// We have to access the Array object 
Array.prototype.pop = () => {
    return "Sorry I want that number I will never pop it off!"
}


// and we get this in console:
// array = [1,2,3,4]
// (4) [1, 2, 3, 4]
// array.pop()
// 'Sorry I want that number I will never pop it off!'

// So there is a differnce between String.proptoype and _proto_ in the console: 
// Prototype is the object that the instance of the string looks up to see what it has available to it 
// _proto_ is a reference to that instance in general:

// array.__proto__
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
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
// pop: () => {…}
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

// and Array.prototype:
// Array.prototype
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
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
// pop: () => {…}
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

// its generally the same thing, but it is referring to all arrays and not just the one array that may be created and what properties that it has access too.

