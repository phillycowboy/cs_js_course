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









