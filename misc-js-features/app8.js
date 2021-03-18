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

// function multiply(x, y = 1) {
//     return x * y;
// }

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

// what if we wanted an unlimited amount of numbers to be added together, manually we would have to add them together by hand individually in 
// the parens 

// function sum() {
    
// }

// there is a way to do this its called the arugments object: 
// -its available inside every function 
// - its an array like object 
//      - has a length property 
//      -does not have array methods like push/pop
// -contains all the arguments passed to the function 
// -not available inside of arrow functions 

// function sumAll(){
//     let total = 0; 
//     for(let i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total; 
// }

// function sum() {
//     const argsArr = [...arguments];
//    return argsArr.reduce((total, currVal) =>{
//         return total + currVal;
//     })
// }
// if you try and run this you will get an error, remember arguments is not an array it is an ARRAY LIKE OBJECT 
// you would have to spread the arugments into a new array and then iterate over that to get a sum 

// function fullName(first, last){
//     console.log(arguments);
//     console.log(first);
// }

// here we only have access too the arguments as a whole list not really a coventional way of only allowing one or the other 
// but with the arugments that we pass in hardcoded we do have direct access to them



// Also remeber arguments do not work with arrow functions 

// NOW HERES THE NEW SYNTAX FOR REST!!!!!!!! -- 


// so now all we have to do for rest is put the three dots like we did with spread but they do into the function arguments: 
// unlike the old syntax we do not have to turn arguments into an array to collect it, now all we have to do is use the three dots 
// and decide on a name and any and all arguments that are passed in on invocation of the function are collected into an actual array 


function sumAll(...nums){
    let total = 0; 
    for (let n of nums) total += n;
    return total;
}

// we can also use REST now to collect the remaining titles 

function fullName(first, last,...titles) {
    console.log(first, 'first');
    console.log(last, 'last');
    console.log(titles, 'titles');
}

// anything that gets passed in after the 'last', argument will now be collected into an array automatically no matter how many titles you put in 
// we now have a way of collecting things into an array with REST since its an array we can now do things like iterate over them 

// We can now use this new syntax in an arrow function 

const multiply = (...nums) => (
    nums.reduce((total, currVal) =>{
        return total * currVal;
    })
)

// Using rest inside a function allows for anyone to pass in a million arguments if they wish and collect them into an array 
// by using reduce of the rest array we can now get a single value to return to us 


// The difference betweeen Spread and Rest is you are taking an array with spread and breaking it up into multiple items, 
// with Rest you are doing the opposite, you are taking multiple arugments and turning it one object/array 




// DESTRUCTURING -- 
// Destructuring - a short and clean syntax to:
// -unpack values in an array
// - properties from objects
// into distinct variables

// ARRAY DESTRUCTURING -- 

const raceResults = [
    'Eluid Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

// if we wanted to make variables set to what place they got in the race we could do it this way: 

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

// before Destructuring this was the only way to make variables based off an array 

// now we can unpack different values with single line: 

const [gold, silver, bronze] = raceResults;
// what this will do is go into raceResults and create new variables from this array and set them based off their positon so the index of which 
// you set this new array to equal raceResults is the index at which the new variable will be set for the main array 
// 0 gold = 'Eluid Kipchonge'
// 1 silver = 'Feyisa Lelisa'
// 2 bronze = 'Galen Rupp'

// here position matters the order you set them is the order that the new variables will be set.  Also the original array remains unchanged 
// Lets say that we wanted to create variables for the first and fourth position of this array: 
// const [first, fourth] = raceResults;  this would just give us the 0 and 1 index 

// we would need to add commas to skip over the index of the value we do not want 

// const [first,,,fourth] = raceResults; 
// by adding this commas we are now skipping over the 2 and 3rd index and right into the fourth

// we could also use the rest method to add the REST of the array into one variable 
const [winner, ...others] = raceResults;



// DESTRUCTURING OBJECTS -- 

// to unpack an array we do so by positon of the array to grab a new variable set to a presexisting value 
// with objects we do so with properties 

const runner = {
    first: 'Eluid',
    last: 'Kipchonge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
}

// const {first, last} = runner; 

// so the way we execute this is the same syntax as with arrays we start with empty brackets and name off the properties we want and set it 
// equal the already existing object 

// unlike with arrays we can also go over certain properties without having to skip over them with commas and st them to new key names like this

// const {
//     country: nation,
//     title: honorific
//  } = runner; 

// we can also collect the rest of the object like we did with the array and rest we just use the same syntax : 

const {first, last, ...otherResults} = runner; 


// NESTED DESTRUCTURING -- 

const results = [
    {
        first: 'Eluid',
        last: 'Kipchonge',
        country: 'Kenya'
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country: 'Ethiopia'
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country: 'United States'
    }
];

// const [,{country}] = results;

// grabs the second value for country which is 'Ethiopia';

// also we can combine the syntax, lets grabs the first name of the gold winner and the second country from runners: 

const [{first: goldWinner}, {country}] = results; 

// so here since we are dealing with an array of objects we are going to have to use a comma to skip over the first index of the object, 
// tp get to the second one, then we have to grab the key and then set it all equal to the origianl array / object 


// DESTRUCTURING PARAMS -- 
// setting up a function to accept keys of an object as their arugments 

const runner2 = {
    first: 'Eluid',
    last: 'Kipchonge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart'
};

// function print(person){
//     const  {first, last, title} = person;
//     console.log(`${first},${last},${title}`);
// }

// the above works but we can destructure just the params itself 

function print({first, last, title}){
    console.log(`${first},${last},${title}`);
}

// here we are just passing in the data that has been given to us through destructuring and then using a template literal are displaying the data
// in a string by its key. 


const response = [
    'HTTP/1.1',
    '200 OK',
    'application/JSON'
]

function parseResponse([protocol,statusCode,contentType]){
    console.log(`Status: ${statusCode}`);
}

// Basically in a nutshell Destructuring is just grabbing elements out of objects or array that already exist by setting them up as new variables
// or passing them into the params 



























