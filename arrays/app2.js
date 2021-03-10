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

let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let arr3 = ['g', 'h', 'i'];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

let allLetters = arr1.concat(arr2, arr3);




