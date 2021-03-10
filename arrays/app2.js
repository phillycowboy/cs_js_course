// let shoppingList = ["ceareal", "cheese", "ice"];

// let lotto = [45, 12, 23, 25, 34];

// let myCollection = [12, 'dog', true, null, NaN];

// Array Indexs 

// let colors = ['red', 'orange', 'yellow', 'green'];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors.length);


// Modifying Arrays 

// let shoppingList = ["Cheddar Cheese", "2% Milk"];

// shoppingList[1] = "Whole Milk";
// shoppingList[2] = "Ice Cream";
// shoppingList[shoppingList.length] = "Tomatoes";
// shoppingList[shoppingList.length] = "Potatoes";

// we only really use this syntax when we want to chnage a value thats already in an array.  There are much easier ways to do the above. 

// Array Methods 
// Push and Pop methods-- deals with adding or removing an item from the end of the array

// let topSongs = [
//     'First Time I Ever Saw Your Face',
//     'God Only Knows',
//     'A Day In The Life',
//     'Life On Mars'
// ];

// topSongs.push("Your Song");
// topSongs.push(true);
//will add a value to the end of your array and update the array 

// topSongs.pop();
//wiil pop off an item at the end of the array and update the array 



// Shift and Unshift Methods-- deal with adding or removing an item from the beginning of an array

// let dishesToDo = ['big platter'];

// unshift will add items to the beginning of your array 

// dishesToDo.unshift('large plate');
// dishesToDo.unshift('small plate');
// dishesToDo.unshift('bowl');
// dishesToDo.unshift('mug');
// dishesToDo.unshift('dirty spoon');
// dishesToDo.unshift('fork', 'knife');

// shift will take away the beginning item of your array 

// dishesToDo.shift();
// dishesToDo.shift();
// dishesToDo.shift();

// CONCAT -- merges the two arrays together- does not update or mutate the original array, we could pass in multiple arrays 

// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['d', 'e', 'f'];
// let arr3 = ['g', 'h', 'i'];

// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));

// let allLetters = arr1.concat(arr2, arr3);

// INCLUDES AND INDEXOF -- 

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

// console.log(ingredients.includes('fish'));
//false
// console.log(ingredients.includes('brown sugar'));
//true   
// console.log(ingredients.includes('water', 3))   
// fromIndex basically telling the argument where to look for a certain value. and it also returns a boolean in this case false 

if (ingredients.includes('flour')) {
    console.log("I am gluten free i can not eat that!");
}

// console.log(ingredients.indexOf('cheese'));
// reutrns the index of 3

// console.log(ingredients.indexOf('wontons'));
//returns -1 becuase it does not exist 




// REVERSE AND JOIN -- 

let pets = ['dog', 'cat', 'bird', 'fish'];

// console.log(pets.reverse());
// console.log(pets.join(" "));


// SLICE -- 

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
// will not include second number up to end. 
// console.log(swimmers);

let mammals = animals.slice(2,4);
// console.log(mammals);

let reptiles = animals.slice(4);
// console.log(reptiles);

// if you use a negative number it will work backwards 

let quadrupeds = animals.slice(-3);
// console.log(quadrupeds);

// console.log(animals.slice());  
// will make a copy of the original array 



// SPLICE 
// array.splice(wheretostart, itemstodelete, itemstoadd);

// still working with the same array. inserting something after 'shark';

animals.splice(1, 0, 'octopus');
// console.log(animals);

// deleting 'whale' and 'bear'

animals.splice(3, 2)
// console.log(animals);

// insert new values without deleting anything
animals.splice(3,0,'snake', 'frog');
// console.log(animals);

animals.splice(0, 2, 'SHARK!', 'OCTOPUS');
// console.log(animals);



// SORT 

let people = ["Mrs. Robinson", "Angie", "Jolene", "Maggie May", "Roxanne"];
people.sort();
// console.log(people);
// by default will sort alphabetically 

// let nums = [34, 100, 100000, 67, 99];
// nums.sort();
// console.log(nums)

// it isnt sorting the number by its numeric value, but sort is creating a string out of these numbers and sortin them by there character code
// hence why all the numbers that start with one are first, and so on 




// REFERENCE TYPES ARRAYS AND OBJECT 
// strings and numbers work differently than arrays and objects 

let fruit = 'orange';
let color = fruit;
// fruit // orange 
// color // orange 
// fruit = 'watermelon';
// fruit // watermelon 
// color // orange 

// what we are doing here is creating variables called Value Type Variables 
// what is happening is that variables are being created and stored in memeory in JS 
// hence why the value of color never changed 
// if you use a primitive type as that variable--that is the thing that is being created and stored. 



// BUT when we work with arrays we are using value types but they have a reference in memory.  SO when we set a variable to an arry of numbers
// then set another variable to equal that number they are both referencing the same value or reference number 

let nums = [5,6,7,8]
let otherNums = nums 

// num = 12345 reference number 
// otherNums = 12345 reference number
//  so if we were to update the first variable nums.push(9) // [5,6,7,8,9]
// and we call otherNums // [5,6,7,8,9]
// they know about each other so they both get updated automatically 



// USING CONST WTIH ARRAYS 
// with const you cannnot reassign or give it another valule. 

// const city = "Lisbon";
// city = "London";
// console.log(city);
// app2.js:218 Uncaught TypeError: Assignment to constant variable.
//  you cannot do this NO bad programmer! 


// BUT as long as the reference remains the same the internal value can change 

const myEggs = ['brown', 'brown'];

// the const myEggs cannot change.  But the value inside of it can. 

myEggs.push('purple');
console.log(myEggs);


const food = ['milk'];
food.push('chocolate');
food.unshift('tortillas');
console.log(food);

// this will always work because the reference is staying the same 


// WORKING WITH NESTED ARRAYS --

const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];
// how would you access the value of peahen? 
console.log(animalPairs[2][0]);
// its at a nested array of 2 and sits on the 0 index of array 2. 
console.log(animalPairs[1][1]);
console.log(animalPairs[0][1]);

// if you want to update buck to stag access the value of the array, then update it 

animalPairs[0][1] = 'stag';
console.log(animalPairs);

// what we are working with is a multidimesional array another example would be a tic tac toe board 

const board = [              O |   | X   
    ['O', null, 'X'],      -------------- 
    [null, 'X', 'O'],          | X | O
    ['X', 'O', null]       --------------
];                           X | O |  
console.log(board);

// we can always access a certain square by its nested attributes 



