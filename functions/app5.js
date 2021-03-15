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
square(6);

function sum(x,y) {
    console.log(x + y);
}
sum(5,4);

function divide(a,b) {
    console.log(a/b);
}
divide(5,10);


// THE RETURN STATEMENT 


