// alert('the page is linked!');
// FUNCTION SCOPE-- 

function lol(){
    let person = "Tom";
    const age = 45;
    var color = "teal";
    console.log(age);
}

function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
}
// lol();
// changeColor();
// we can call the functions after definition of them and when we console.log the age we get two different values, one is 45 the other is 19.
// that is because age is only accessible or scoped to these functions, if we were to access them outside the functions we would get an error
// because they only exist within the scope of lol and changeColor 


// console.log(person); 
// console.log(age); 
// console.log(color); 
// all variable are not available or defined outside the scope of lol function. is not defined 

let bird = 'mandarin duck';

function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird);
}
// birdWatch();
// console.log(bird);

// its not that you cant have two variables of the same name, you just cant have two variables of the same name within the same scope of 
// each other.  above with birdWatch you can have two variables of bird because they sit in different scopes of each other. 

// when you conosole.log bird globally you will only receieve a value of madarin duck.  but to recieve the value of golden pheasant 
// you could have to call the function of where it is available.  if we were to only console.log(bird) we would only get one value 
// because bird is only available globally to us through the let variable of bird set equal to 'madarin duck';



// BLOCK SCOPE -- 

// let radius = 8;

// if (radius > 0) {
//     const PI = 3.14;
//     let circ = 2 * PI * radius;
// }

// console.log(radius) // 8;
// console.log(PI);  // NOT DEFINED 
// console.log(circ);  //MOT DEFINED

// PI and circ are scoped to the BLOCK

// if(true){
//     let animal = 'eel';
//     console.log(animal);
// }
// console.log(animal);

// if we try to console log the varibale of animal outside of the block what do you expect? 
// an error because aniaml is only available to us inside of the scope. 
// so if we wanted the value of eel to be consoled we would have to call it within the block. 


// if (true) {
//     var animal = 'eel';
//     console.log(animal);
// }
// console.log(animal);

// but if we were to change the variable to 'var'....it will print out in both cases. it is available within the block and outside.
// which tells us that let and const have different scoping rules than var.  There is no block scope for var 

function doubleArr(arr) {
    const result = [];
    for(let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result;
}

// so here we have access to result within in the entire function itself because we scoped it as such
// we only have access to double within the for block, but still have access to result because the for loop is sitting within the function 
// where we have access to result throughout. 
// if we try to conosole log the variable of double outside of the for block we will get an error 

// REMEMBER let and const are block scoped variables.  if you define a varible with these they will only be available in the block of where
// they were defined.  If they are defined within a function they are only avaiable within the function, if they are definied within 
// a for loop, you can only refer to them within that specific block 



// LEXICAL SCOPE -- 

function outer() {
    let movie = 'Amadeus';
    function inner(){
        console.log(movie.toUpperCase());
    }
    
}

// if we call outer() in the console we dont recieve anything.  all we have is access to a variable of movie 


// but if we call outer() after we call inner within the same function we get 'AMADEUS' because inner() is being called within the function of outer()
// and innner is doing all the work to get the variable of movie to be upercased.  thats why when you invoke outer in the console now you 
// get 'AMADEUS'.
function outer() {
    let movie = 'Amadeus';
    function inner() {
        console.log(movie.toUpperCase());
    }
    inner();
}

// visa versa we can not call inner() by itself because we only have access to inner() through outer() because of the nested properties of the 
// function. inner() only exists within the scope of outer(). 

function outer() {
    let movie = 'Amadeus';
    function inner() {
        let movie = 'The Shining'
        console.log(movie.toUpperCase());
    }
    inner();
}

// but happens if we call inner() inside of outer() and invoke it what movie will be printed?  'THE SHINING'
// because we are using outer() to call inner() JS will see that outer() has access to a function called inner() JS will then look 
// inside inner() see that we are referecing a variable called movie, if it cannot find a variable of movie within inner() it will go further up
// and see that we have defined a variable of movie and decide to print that one.  BUT since we have a variable of movie within the scope of inner
// it will always go to that one first. 

function outer() {
    let movie = 'Amadeus';
    function inner() {
        let movie = 'The Shining'

        function extraInner(){
        console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}

// so to take it a step further i have defined an extraInner function that is only consoling the variable of movie to Upper case.  We 
// define a movie in outer, and call it, it sees that we are calling inner() inside the block of outer, it goes to the function of inner() 
// see the variable of movie and sees that we are invoking extraInner() within the inner() function, goes to that function and sees that 
// we are consoling a variable of movie.  JS will look to the top of extraInner() and see that there is no variable, go to the next available 
// function in the outer scope and see that we have a variable of movie within inner() of 'The Shining' and JS will see that and choose it 
// because its the first availble variable within the scope of outer().  thats why when we invoke outer() we get the value of 'THE SHINING'

 
// FUNCTION EXPRESSIONS -- 

// function add(x,y) {
//     return x + y;
// }
// an anonymous function 
const sum = function (x, y) {
    return x + y;
}
// named function 
const product = function multiply(x,y) {
    return x * y; 
}


// HIGHER ORDER FUNCTIONS -- 

function add(x,y) {
    return x + y;
    
}

const subtract = function (x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, subtract, multiply, divide];

for(let func of operations){
    let result = func(100,4);
    // console.log(result);
}

// this array is being looped over with each index being represented by func in our for loop.  then we store the result of each func being 
// called and logging the result which gives us 4 different values 
// 104 add 
// 96 subtract  
// 400 multiply  
// 25 divide  


// by storing these functions within an array we can easily call them now by their index lets say we wanted to invoke the subtract function 

// operations[1](100,4)
//96;

// so with this array we can loop over it an call each function in order. 

// Now lets store one of our variables in an object 

const thing = {
    doSomething: multiply
}
// since multiply is the value of doSomething inside of the object thing we can call in console thing.doSomething(num,num) and get a return value

// thing.doSomething(100,4)
// 400;

// by adding a function to an object we are now creating a method. 



// FUNCTIONS AS ARGUMENTS -- 

// so defining functions that accepts an argument as a function: 

function callThreeTimes(f) {
    f();
    f();
    f();
}

function laugh() {
    console.log("HAHAHAHAAHAHAHAHAHAHA");
}
// callThreeTimes(laugh);
// by calling laugh() we are only executing that function once.  BUT if we use callThreeTimes and pass in laugh to that function 
// callThreeTimes is invoking anything that gets passed in 3 times over.  Since we are passing in laugh as the argument it will console.log
// 'HAHAHAAHAAH' but it will do it three times since that is the purpose of callThreeTimes 
// BUT we can define other fucntions to call with callThreeTimes as long as we pass in the function as an argument on invocation 

function rage() {
    console.log("I hate everythinggggggg!");
}
// callThreeTimes(rage);

// this will print out to the console three times 

function repeatNTimes(func, num) {
    for(let i = 0; i < num; i++){
        func();
    }
}

// repeatNTimes(laugh, 100);

// now what we are doing is defining a function that calls on another function a certain number of times, so when we loop through the arugments 
// in repeatNTimes(function, number of times it will run) JS know to look at the function we pass in then look at the number and run it until the 
// for loop in repeatNTimes is false 

function pickOne(f1,f2) {
    let rand = Math.random();
    console.log(rand);
    if(rand < 0.5) {
        f1();
    }
    else {
        f2();
    }
}
// by having a variable that selects a random number at will given the if else statement if the number is less than a certain value it 
// will pick one function over the other



// FUNCTIONS AS RETURN VALUES -- 
// basically what this will be doing is making functions return a value so that you can use functions to tweak a result 

function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

// multiplyBy(3);
// function (x) {
//     return x * 3;
// }
// if we call multiplyBy(3) this is what it will be returning to us, we are passing in 3 as num 
// but sy storing the function that is returning another number and calling it with that arugment we will get that returned back to us: 

const triple = multiplyBy(3);
triple(6);


// we should get 18;
// naturally when we call multiply by it takes a num which in this case is 3.  When you run mulitplyBy(3) num is now 3 in the above block
// since it is returning a function it needs another argument of x.  Thats why we are setting triple to a value of the function multiplyBy()
// now by calling triple(x) it already knows about multiplyBy since it is the value of triple.  SO by asscociation the number you pass into 
// triple(6) will now be x.  and since we set multiplyBy to have a constant num of 3 in the variable triple the reutrn value will always be 
// the number times 3 when you pass in an argument of a number to triple();
const double = multiplyBy(2);
double(2);
// here we should get 4 because now we are setting a new value to take the above argument of 2 and multiplying it by 2; 

// think of the function of multiplyBy() as a factory what ever number we pass in it will multiply it by the number of x we pass into the 
// variable that we are declaring 

// ORDER OF PROCESS 
// YOU SET UP A FACTORY FUNCTION - multiplyBy to take in a num as an argument. 
// THEN you have a nested return function that will execute when you call multiplyBy and you have an argument of x that will be passed into the 
// variable 
// THEN YOU SET A VARIABLE EQUAL TO the function and pass in the number you want it to be muliplied by 
// WHEN YOU CALL THAT VARIABLE YOU WILL PASS IN A NUMBER THAT YOU WANT TRIPLED OR DOUBLED 
//  JS WILL LOOK AT THAT NUMBER IN YOUR VARIABLE AND SEE THAT IT IS CALLING ON multiplyBy SEE THAIT IT TOO HAS A NUMBER AND KNOWS YOU WANT TO 
// multiply the number passed into the variable and multiply it by the number the function is holding within the value of that said variable 

function makeBetweenFunc(x,y) {
    return function(num){
        if(num >= x && num <= y){
            return true;
        }
        return false;
    }
}
const isChild = makeBetweenFunc(0,18);

// what is child is doing is it will take in a number, then compare it to the two numbers that have been set in makeBetweenFunc.
// inside makeBetweenFunc there is logic to say that if the nunber is greater than x but more than y return true, anyhting else is false 
// so when we pass in isChild(7) we get true because 7 is greater than 0 but less than 18 so they are in fact a child. 

// ALL IT IS DOING IS TAKING A NUMBER AN COMPARING IT WITH THE RETURN FUNCTION 
// x is your minimum comparison and y is your greater than comparison if anything is between the 2 it is true other than that it is false 

const isNinetiesBabe = makeBetweenFunc(1990, 2000);
const isNiceWeather = makeBetweenFunc(65, 75);



// guessing game will take a number that is passed in with guess and compare it two the two numbers that are stored in the variable. 
// if it is correct the number will be greater than or equal to x or less than or equal to y 

function makeGuessingGame(x,y) {
    return function(num){
        if(num >= x && num <= y){
            console.log("CORRECT");
        }
        else{
            console.log('Sorry try again');
        }
    }
}

const guess = makeGuessingGame(5,7);


// ALL you are doing is making a function factory that can be set to a variable to reutrn the sum or value of a return fucntion.  

// Square a number that gets passed into the variable 

function myFunc(num) {
    return function(x){
        return x * x; 
    }
}

const square = myFunc(2);


// CALLBACKS -- 

// function grumpus() {
//     alert("GAHHHHH GO AWAY!");
// }

// setTimeout(grumpus, 5000);

// we can use setTimeout like this, it will always take in a function, but we can also have setTimeout take in an anonomyous function: 

// setTimeout(() => {
//     alert('WELCOME!');
// }, 5000);

const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    alert("WHY DID YOU CLICK ME!");
});

// function grumpus() {
//     alert("AH GO AWAY!");
// }


// HOISTING -- 

// console.log(animal);
// var animal = 'Tapir';

// what is happening here for this weird behavior is called HOISTING when JS is interpreting the code it hoists up the variable declaration 
// so what is happening is this: 
// var animal;
// console.log(animal);
// animal = 'Tapir';
// so the variable is undefined at first and and then when we try and log it the first time it wont know what it is 
// but it we log it a second time: 

var animal;
// console.log(animal);
animal = 'Tapir';
// console.log(animal);

// we get: 
// undefined 
// Tapir

// so before you do anyhting with js and var you need to declare and initialize your variables; 

// HOISTING WITH LET AND CONST 

// let shrimp = 'Harlequin Shrimp';
// console.log(shrimp);

// if we do this we expect to see 
// Harlequin Shrimp in our console, but what if we do what we did earlier? 

let shrimp = 'Harlequin Shrimp';
console.log(shrimp);

// we get 'Uncaught ReferenceError: Cannot Access 'shrimp' before initialization';
// so variable declerations made with let are not HOISTED like they were with var declarations it wont know what we want to access until 
// we declare it and initialize it at the top.  if we do the same thing with const we get the same error. so let and const are not hoisted 
// NOW this brings us to functions, with functions if we write a function declaration: 

// function howl(){
//     console.log('AWOOOOOOOO');
// }
// howl();

// if we call howl after our declaration it will work. 
// however if we call howl() before what do you think happens? : 

// howl();
// function howl() {
//     console.log('AWOOOOOOOO');
// }

// it will still print to the console. it still works because functions are hoisted. so you can think of them as being put at the vary top of 
// your file. 

// we can do this with function expressions as well. 

// var hoot = function () {
//     console.log('HOOOO HOOOOO');
// }
// hoot();

// we know that this will work 
// BUT IF WE CALL HOOT FIRST: 

hoot();
var hoot = function () {
    console.log('HOOOO HOOOOO');
}

// Uncaught ReferenceError: hoot is not a function, it doesnt work.  why doesnt it work? because we are using a diffrent type of function 
// we are using a function expression instead of an explicit function.  Function expressions are not hoisted.  It is a variable not a function 
// so we can console.log it and get undefined it just wont recognize it as a function.  So when we call hoot(); as a function it is trying to call
// undefined which you cant do. 
























