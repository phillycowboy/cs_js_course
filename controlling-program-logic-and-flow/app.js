// alert("its working!");
// if we want something rinted out to the console now we cant just write 4 + 4 here and expect and answer we need to use console.log()
// console.log(4 + 4, 'hello', true );
// console.error("AH FUCKKKKKKK");


// if STATEMENTS -- the key to making decisions in our code is a conditional statement 
    // if allows us to run some code if a given condition is true. 


// if (something is true ) {
//     run some code only if the above is true 
// }

// if (1 === 1) {
//     console.log('Its true!');
// }

// Example 2 

// let rating = 3; 

// if (rating === 3) {
//     console.log("YOU ARE A SUPER STAR!");
// }

// Example 3 

// let num = 37;

// if (num % 2 !== 0) {
//     console.log("ODD NUMBER!");
// }

// elseif STATEMENTS -- if the first thing is not true maybe this thing will be 

// let rating = 3; 

// if (rating === 3) {
//     console.log("YOU ARE A SUPER STAR!");
// }
//  else if (rating === 2){
//     console.log("Meets Expectations.");
// }
//  else if (rating === 1){
//     console.log("Needs Improvement...");
// }

// else STATEMENT -- else is the otherwise part of the conditional if none of the other values are true, then and only then will this run 

// let rating = 213;

// if (rating === 3) {
//     console.log("YOU ARE A SUPER STAR!");
// }
// else if (rating === 2) {
//     console.log("Meets Expectations.");
// }
// else if (rating === 1) {
//     console.log("Needs Improvement...");
// } else {
//     console.log("WTF?");
// }

// Example 2 

// let highScore = 1430;
// let userScore = 1600;

// if (userScore >= highScore) {
//     console.log(`Congrats you have a new high score of ${userScore}`);
//     highScore = userScore;
// } else{
//     console.log(`Good Game. Sorry you score of ${userScore} did not beat the High Score of ${highScore}`);
// }



// NESTING CONDITIONALS -- we can nest coditionals inside of one another 

// let password = "kitty";

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password");
//     }
//     else{
//         console.log("Password is long enough but cannot contain spaces.");
//     }
// }
// else{
//     console.log("Password must be longer!");
// }


// truthy and falsey values -- 

// all values have an inheirent truthy or falsey boolean value 
// falsey values : 
// false 
// 0
// ""(empty string)
// null
// undefined
// NaN
// Everything else is truthy 

// let mystery = 0 / 0; 

// if (mystery) {
//     console.log("TRUTHY");
// }
// else{
//     console.log("FALSY");
// }

// let loggedInUser = "benm123";

// if (loggedInUser) {
//     console.log("YOU ARE LOGGED IN");
// }
// else {
//     console.log("Please log in!");
// }


// Logical Operators -- &&, | |, ! 
// && - AND  -- both sides of the statement must be true for the code to run 
// | | - OR 
//  ! - NOT 

// let password = "taco tuesday";

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password!");
// }
// else {
//     console.log("Invalid Password!");
// }


// let num = 3; 

// if (num >= 1 && num <= 10 ) {
//     console.log("Number is between 1 and 10");
// }
// else{
//     console.log("Please pick a number between 1 and 10.");
// }

// you can nest statements but it will save time if you can put them together.


// OR operator ( | | )
// it is the pipe character above the enter key, if one side is true the whole thing is true. 

// let age = 76; 
// let ticketPrice = 10; 
// if (age < 6 || age >= 65) {
//     console.log("you get in for free!");
// }
// else {
//     console.log(`That will be $${ticketPrice} please.`);
// }

// let bestColor = "purple";

// if (bestColor === "purple" || bestColor === "lilac" || bestColor === "mage") {
//     console.log("Congrats you picked the best color!");
// }
// else{
//     console.log("BOOOOOOO YOU SUCK!");
// }


// the NOT operator (!)  !expression returns true if the espression is false 

// !null //true 
// ! (0 === 0) // false 
// ! (3<= 4) // false 

// let loggedInUser = 'aadfadadf';

// if (!loggedInUser) {
//     console.log("GET OUT OF HERE!");
// }

// let flavor = 'grape';

// if (flavor !== 'grape' && flavor !== 'cherry') {
//     console.log("WE DONT HAVE THAT FLAVOR!");
// }

// if (!(flavor === 'grape' || flavor === 'cherry')) {
//     console.log("WE ONLY HAVE GRAPE AND CHERRY");
// }
// else{
//     console.log("Come back soon!");
// }



// OPERATOR PRECEDENCE 

// let x = 7;
// x == 7 || (x === 3 && x > 10);
// evaluates to true, the right side evaluates to false and the left side evaluates to true since we only need one side to be true with the ||
// operator the enitre statement evaluates to TRUE  

// NOT (!) has higher precedence than && and || && has higher precedence than || 
//  !     &&      || 

// let x = 7;
// (x == 7 || x === 3) && x > 10;

//since we are now running the or statment first and then comparing it with the and operator, both sides need to be true so this statment
//evaluates to FALSE 


// THE SWITCH STATEMENT 

// let day = 12; 

// if (day === 1) {
//     console.log("Monday");
// }
// else if (day === 2){
//     console.log("Tuesday");
// }
// else if (day === 3){
//     console.log("Wednesday");
// }
// else if (day === 4){
//     console.log("Thursday");
// }
// else if (day === 5){
//     console.log("Friday");
// }
// else if (day === 6){
//     console.log("Saturday");
// }
// else if (day === 7){
//     console.log("Sunday");
// }
// else {
//     console.log("NOT A DAY")
// }

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day!");
// }

// let emoji = "eggplant";

// switch (emoji) {
//     case "happy face":
//     case "sad face":
//         console.log("yellow");
//         break;
//     case "eggplant":
//         console.log("purple");
//         break; 
//     case "heart":
//     case "lips":
//         console.log("red");
//         break;
//     default:
//         console.log("not a valid emoji!");
//         break;
// }

//use a SWITCH STATEMENT WHEN YOU HAVE MULITIPLE ELSE IF STATEMENTS 


//Ternary Operator -- conditon ? expIfTrue: expIfFalse 

let num = 7; 

// if (num === 7){
//     console.log("luuuucky!");
// }
// else{
//     console.log("bad");
// }

num === 7 ? console.log("lucky!") : console.log("bad");


let status = 'online';
let color = status === 'offline' ? 'red' : 'green';

// if (status === 'offline') {
//     color = 'red';
// }
// else {
//     color = 'green';
// }





