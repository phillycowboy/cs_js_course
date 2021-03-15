// console.log("Hey you just finished loops now we HERE! KEEP GOIN");

// FUNCTIONS -- 

'hello'.toUpperCase();
// HELLO

// this is an example calling a function 

// function funcName(){
    // do something
// }

// this is an example of a function declaration of a function statement 


// definition
function grumpus(){
    console.log('ugh...you again...');
    console.log('FOR THE LAST TIME...');
    console.log('LEAVE ME ALONE!');
}
// execution
// grumpus();
// grumpus();
// grumpus();

// execution of a function inside of a for loop 
// for(let i = 0; i < 50; i++){
//     grumpus();
// }


// DICE ROLL FUNCTION 

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled a: ${roll}`);
}

function throwDice(numRolls) {
    for(let i = 0; i < numRolls; i++){
        rollDie();
    }
}
// throwDice(100);


// FUNCTION ARGUMENTS -- 

function greet(name) {
    console.log(`Hi ${name}`);
}
// greet("satan");

function avg(firstNum, secondNum) {
    let total = firstNum + secondNum;
    console.log(total/2);
}

// avg(100, 4);

// FUNTIONS WITH MULTIPLE ARGUMENTS -- 


function square(num) {
    console.log(num * num);
}
// square(6);

function sum(x,y) {
    console.log(x + y);
}
// sum(5,4);

function divide(a,b) {
    console.log(a/b);
}
// divide(5,10);


// THE RETURN STATEMENT 


const scream = 'hello'.toUpperCase();


function add(x, y) {
    return x + y;
}

// you can only return one thing from a function 
// what we can do with the return value in add is store it to a variable so: 
// const total = add(3,4)
// then we get 7 when we call total. 

// function isPurple(color) {
//     if(color.toLowerCase() === 'purple'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     return false;
    
// }

// function isPurple(color) {
//     return color.toLowerCase() === 'purple'; 

// }

function containsPurple(arr){
    for(let color of arr){
        if(color.toLowerCase() === 'purple' || color.toLowerCase() === 'magenta'){
            return true;
        }
    }
    return false; 
}

// PRACTICE 
// isValidPassword function 

// function isValidPassword(password, username) {
//     if(password.length < 8 ){
//         return false;
//     }
//     if(password.indexOf(' ') !== -1){
//         return false; 
//     }
//     if(password.indexOf(username) !== -1){
//         return false;
//     }

//     return true; 
// }

// refactor 

// function isValidPassword(password, username) {
//     if (
//         password.length < 8 ||
//         password.indexOf(' ') !== -1 || 
//         password.indexOf(username) !== -1
//         ){
//         return false;
//     }
//     return true; 
// }

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const noSpace = password.indexOf(' ') !== -1;  
//     const notUsername = password.indexOf(username) !== -1;
//     if(tooShort || noSpace || notUsername){
//         return false;
//     }
    
//     return true; 
// }

// function isValidPassword(password, username) {
//     const tooShort = password.length < 8;
//     const noSpace = password.indexOf(' ') !== -1;  
//     const notUsername = password.indexOf(username) !== -1;
//     if(!tooShort && !noSpace && !notUsername){
//         return true;
//     }
//     return false; 
// }

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const noSpace = password.indexOf(' ') !== -1;  
    const notUsername = password.indexOf(username) !== -1;
    return !tooShort && !noSpace && !notUsername;
     
}

// CODE CHALLENGE AVERAGE NUMBER IN AN ARRAY 

function averageNumber(array) {
    let total = 0; 
    // loop over each number 
    for(let num of array){
        // add them together 
        total += num; 
    }
    // divide by number of nums 
    return total/array.length;
}


// CODE CHALLENGE MATCHING A SENTENCE TO SEE IF ITS A PANGRAM 

// function isPangram(string) {
//     let lowerCased = string.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz')
//     if (lowerCased.indexOf(char) === -1) {
//         return false;
//     }
//     return true;
// }

function isPangram(string) {
    let lowerCased = string.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz')
    if (!lowerCased.includes(char)) {
        return false;
    }
    return true;
}

// function isPangram(string) {
//     const regex = /([a-z])(?!>*\1)/g;
//     return (string.match(regex) || []).length === 26;
// }