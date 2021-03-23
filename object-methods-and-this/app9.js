const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert('HEY WAY TO GO!');
})


// SHORTHAND PROPERTIES -- 

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg 
//     };
// }
// this was the old way we had to write it 

const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    };
}
// this is the shorthand way we are creating keys/values in the object we are returning simply by putting in the variable name 

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);



// COMPUTED PROPERTIES -- 


const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron'

// const team = {}
// team[role] = person;
// team[role2] = person2;

// now we have two properties with dynamic keys 

// Now with computed properties we can do this all at once: 

// with the computed properties we can now use variables as a key name in an object literal property

// the variables are evaluated first and it will be set to admin

// const team = {
//     [role]: person,
//     [role2]: person2
// };

// we could also do more complex properties in our object with this

const team = {
    [role]: person,
    [role2]: person2,
    [1+6+9]: 'sixteen'
};
// 16: 'sixteen',
// host: 'Jools Holland'
// Director: 'James Cameron'

// function addProp(obj,k,v) {
//     const copy = {...obj};
//     copy[k] = v;
//     return copy;
// }


// the new way to write it: 
const addProp = (obj, k, v) => {
    return {...obj, [k]:v}
}
const res = addProp(team, 'happy', ':)');

// {16: "sixteen", host: "Jools Holland", Director: "James Cameron", happy: ":)"}
// 16: "sixteen"
// Director: "James Cameron"
// happy: ":)"
// host: "Jools Holland"


// ADDING METHODS TO OBJECTS -- 

// const add = function(x,y){
//     return x + y;
// }

// this by itself is a function.  but when we put into an object and call it on something it is now a method.

// 'hello'.toUpperCase() is a built in method
// now we are going to see how to add our own methods 

// const math = {
//     add 
// }

// we could add 'add' function into the object by using the shorthand, but to call the method we need to use the dot notation 

// math.add(x,y)

// its pretty uncommon to define your method and then pass it in mainly you would do something like this: 

// const math = {
//     add: function(x,y) {
//         return x + y;
//     },
//     multiply: function(x,y) {
//         return x * y;
//     }
// }

// we can call it with dot notation but remember we have to invoke it with the parens math.add() math.multiply()

// a function by itself is just a function but when we add a function to a property in an object we call it a method 



// METHOD SHORTHAND SYNTAX ---

// we could add arrow functions 
// const math = {
//     add: (x, y) => {
//         return x + y;
//     },
//     multiply: (x, y) => {
//         return x * y;
//     }
// }

// or we could use the shorthand by just naming the key and then writing the function 

const math = {
    blah: 'HI',
    add(x,y){
        return x + y;
    },
    multiply(x,y){
        return x * y;
    }
}

const auth = {
    username: 'TommyBoy',
    login(){
        console.log('Logged you in');
    },
    logout(){
        console.log('goodbye!');
    }
};


// INTRO TO THE KEYWORD "THIS"-- 

function sayHi() {
    console.log("HI");
    console.log(this);
}
// when we run this in console we get the string HI but we also get an object called the WINDOW when we console.log(this). 
// What is the window? the window is the global scope in the browser 

// so when we defined the function sayHi() it was added as a property to the window object 
// so this inside a normal function refers to the window 

// when we call alert('LOL') we get a pop up in the browser 
// but alert is also a property on the window so we can call it like this: 


// window.alert('LOL');

// when we define a variable with var we are adding a property to the window object 

var color = 'teal';
console.log(window.color);
// teal
// it is now added to the global scope 

// but this does not apply to let and const 

let num = 400; 
window.num
//undefined 

// let and const are not added to the global scope 

const greet = () =>{
    console.log(this);
}

// remember that 'this' is a refreence to an object, that object represents the current executions scope 


// USING "THIS" IN METHODS 
// so as opposed to referring to 'this' on a function we get returned the window object. 

// const person3 = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName(){
//         console.log(this);
//     }
// }

// but when we refer to 'this' in this context we get returned the object itself of person3 
// by referencing 'this' inside of a method of an object it now gives us access to all of the properties of said object 

// const person3 = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         console.log(this.first);
//     }
// }
// now when we call person3.fullName()
// we get 
// Cherilyn 
// this inside of an object makes it aware of all the other properties within the same object 

// lets build out our function so that it does what it says, to give the full name 

// const person3 = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
//     }
// }

// by using a template literal we can now print out and refer to the other object properties within the person3

// we could also destructure the this into a variabele so all we have to do now is call the properties in the template literal 

// const person3 = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const {first, last, nickName} = this;
//         console.log(`${first} ${last} AKA ${nickName}`);
//     }
// }
// and it still works the same way!!!! 

// we could also add another method within the person3 object and call on another method 

// const person3 = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const { first, last, nickName } = this;
//         return `${first} ${last} AKA ${nickName}`;
//     },
//     printBio() {
//         const fullName = this.fullName();
//         console.log(`${fullName} is a person!`);
//     }
// }

// the keyword 'this' in this context is reffering to the object that they are living in.  here they are referring to the person3 object 
// above it is reffering to the global scope so it refers to the window 


// THIS INVOCATION CONTEXT 

// const printBio = person3.printBio;

// think of it as if there is something to the left and you are using a dot to call something THIS will refer to that object 
// if we call this within the method of printBio save it to a variable of the same name on the global scale THIS is now  a referenec to the WINDOW 
// BUT 
// if we call this within the method and then call the method on the object THIS is a refrence to that specific object itself 

// IF THERE IS NOTHING TO THE LEFT "THIS" WILL BE REFERRING TO THE GLOBAL WINDOW AND NOT THE INDIVIDUAL OBJECT 

// a key difference between function expressions and arrow functions ARROW FUNCTIONS DO NOT GET THEIR OWN KEYWORD THIS 

const person3 = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName() {
        const { first, last, nickName } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`);
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAAAHA`);
    }
}

// with an arrow function the value of this is now set to the window it doesnt know what nickName is because those properties are only available
// locally to the object 

// Generally this is why we dont write arrow functions for methods in objects because we will need access to the parent object itself 
// the above we lose all of the properties with this object by using the arrow function syntax 

// THE VALUE OF THIS DEPENDS ON THE INVOCATION CONTEXT THE FUNCTION IT IS USED IN 


// ANNOYOMATIC DEMO -- 
































