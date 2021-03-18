const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('AHHHH GET OUTTA HERE!!');
})



// DEFAULT PARAMETERS -- 

// function multiply(x,y) {
//     if(typeof y === 'undefined'){
//         y = 1;
//     }
//     return x * y;
// }
// if there is only one paramter that gets passed it, y will have a default value of 1 since x if the first value w/o it you would get NaN

// but there is an easier way of doing it: 

// function multiply(x, y) {
//     y = typeof y === 'undefined' ? 1 : y;
//     return x * y;
// }

// but there is also a newer way of doing it as well: 

function multiply(x, y = 1) {
    return x * y;
}

const greet = (person, greeting = 'hi') => {
    return `${greeting}, ${person}!`;
}

const blah = (x, y=[1,2,3]) => {
    console.log(x,y);
}

// WITH DEFAULT PARAMS ORDER ABSOLUTELY MATTERS, ALL OF YOUR DEFUALT PARAMS NEED TO COME AT THE END. 

// Spread for function calls -- expands an iterable (array, string, etc) into a list of arguments 

Math.max(1,2,3,4,5);
//5
Math.min(1,2,3,4,5);
//1
// This works because the max and min operator works with seperarte arguments 
// If we try to do it with an argument of an array 
const nums = [3,4,5,6,7,8,9]
Math.max(nums);
//NaN
// because it is expecting nums to be a number not a list of numbers saved to a variable 

// This is where the spread operator comes into play: 
// Spread allows us to break up an array into five seperate arguments 
Math.max(...nums);
//and we get 9 

function giveMeFour(a,b,c,d){
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const colors = ['red', 'orange','yellow','green'];
const str = 'GOAT';

// If i we call giveMeFour(colors) we are only passing in one arugment. 
// But if we use the spread operator it will treat each element in the array as an individual argument and we get 

// giveMeFour(...colors);

// a red 
// b orange 
// c yellow 
// d green

// giveMeFour(...str);
// a G
// b O
// c A
// d T

// The main thing with spread is that if you pass in an argument of an array with different values, or numbers, if you pass in that variable it 
// will treat the argument as an indiviual value even though its a list of values.  with SPREAD... it will look at everything in the array and 
// pass in each seperate value. 

// SPREAD IN ARRAY LITERALS -- 

// Spread in array literals - 

// Creates a new array using an existing array. Spreads the elements from one array into a new array

// const nums1 = [1,2,3];
// const nums2 = [4,5,6];

// [...nums1...nums2];
// 1,2,3,4,5,6

// [a,b,...nums2];
// a,b,4,5,6

// [...nums1...nums2,7,8,9]
// [1,2,3,4,5,6,7,8,9]

const cephalopods = ['dumbo octopus','humboldt squid','flamboyant cuttlefish'];
const gastropods = ['giant african snail','banana slug','variable neon slug'];
const cnidaria = ['fire coral','moon jelly'];

const mollusca = [...cephalopods,...gastropods];

// you are allowed to swtich up the order with the spread operator 
// [...gastropods,...cephalopods];

// you can also add in other elements to the new array in front of the spread operator 
// ['garden slug',...cephalopods,...gastropods];

const inverts = [...cnidaria,...cephalopods,...gastropods];

// Spread is great when you need to add arrays together or elements together, but its not something new we know how to use concat

// cephalopods.concat(gastropods);

// when we use Spread we are making a clone of the original and it is pointing to somewhere new in memory 

// we also know that using this : 'abcd'.split('');
// will give us this: 
// ['a','b','c','d']

// but we could also do this now : [...'abcd'];
// ['a','b','c','d']


// SPREAD IN OBJECT LITERALS -- 

const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
}

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

// if you try to merge two objects with the same key they will overwrite each other:

const catDog = {
    ...canine,
    ...feline
}

// catDog
// { family: "Felidae", furry: true, legs: 4 }
// family: "Felidae"
// furry: true
// legs: 4
// __proto__: Object

// Order does matter when you have conflicting properties with the same key name 

// if we wanted a clone of an object it is only one level deep like with arrays it cannot make a copy of a nested array 

const copyCatDog = {...catDog};

// Also you cannot spread an object into an array 

// BUT YOU CAN SPREAD AN ARRAY INTO AN OBJECT YOU WILL GET BACK AN OBJECT WITH KEY VALUE PAIRS BASED ON THEIR INDEX 

// {...[4,5,6]}
// {0: 4, 1: 5, 2: 6}



// REST -- 











