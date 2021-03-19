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










