const btn = document.querySelector('button');
btn.addEventListener('click', function (){
    alert('YEAH THE PAGES ARE LINKED!');
})

// FOREACH -- 

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// nums.forEach(function (n) {
//     console.log(n * n);
// });

// const numbers = [20,21,22,23,24,25,26,27];
// with forEach the function can also accepts multiple parameters 

// numbers.forEach(function (num, i){
//     console.log( num, i);
// })

// numbers.forEach(function (num){
//     console.log(num * 2);
// })


// the parameter stroed in the arugment of the function will represent one element from the array 
// forEach will call this function however many times it needs to. 
// function printTriple(n) {
//     console.log(n * 3);
// }

// numbers.forEach(printTriple);

// you could also have a prewritten function if you wanted, here is the syntax for that. 

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
// },
// {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
// },
// {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
// },
// {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
// }


// ];

// books.forEach( function (book){
//     console.log(book.title.toUpperCase());
// })

// these are essentially doing the same thing just with the forEach a function is being called that can be passed in or be anonomyous
// with the for of a block is being run, those are the key differences 

// for(let book of books){
//     console.log(book.title.toUpperCase());
// }



// MAP -- 

// creates  a new array with the results of calling a callback on every element in the array 
// map does not mutate the original array, so we must always capture the value to see it. 
// YOU ALWAYS NEED A RETURN STATEMENT IN YOUR MAP BLOCK

const texts = ['rofl','lol','omg','ttyl'];

const caps = texts.map(function (t){
    return t.toUpperCase();
})
console.log(texts);
console.log(caps);

const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap','byob','rsvp','diy'];

const doubles = numbers.map(function (n){
    return n * 2;
})
console.log(doubles);
console.log(numbers);

const numDetail = numbers.map(function (n){
    return{
        value: n,
        isEven: n % 2 === 0
    }
})

const allCaps = words.map(function(w){
    return w.toUpperCase().split('').join('.');
})


// const bookTitle = books.map(function(b){
//     return b.title;
// })


// ARROW FUNCTIONS INTRO -- 

// const square = function (x) {
//     return x * x;
// }

// regular function expression 

// new arrow function: 

// const square = (x) => {
//     return x * x;
// }

// they work the same way as we would regularly write a function they are just shorter. 

const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x,y) => {
    return x * y;
}

// Arrow Functions extra: 
// if you only have one parameter you can actually leave the parenthesis off 
// const square = x => {
    // return x * x;
// }

// use empty parens for functions w/ no parameters 
// const singALong = () => {
//     return 'LALALALALA';
// }

const greet = () => {
    console.log('HI!');
}

// Arrow Functions Implicit Returns -- 

// means that you do not have to EXPLICTLY return a block of code to run, you can just write it out and it will do it for you.
// and some times you can just write one line of code instead of stipulating a block 

// const square = (n) => {
//     return n * n;
// }

// by doing this with parenthesis instead of brackets we can leave out the return in the block 
// const square = n => (
//     n * n
// )
// in some scenarios we can leave out the parens all together 

// const square = n => n * n;

// const nums = [1,2,3,4,5,6,7,8];

// const doubles1 = nums.map(function(n){
//     return n * 2
// })

// const doubles2 = nums.map(n => {
//     return n * 2;
// })

// const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function(n){
//     if(n % 2 === 0) return 'even';
//     return 'odd';
// })

// const parityList = nums.map(n =>{
//     if(n % 2 === 0) return 'even';
//     return 'odd';
// })
// const parityList = nums.map( n => (n % 2 === 0 ? 'even':'odd'));




// FIND -- 

let movies = [
    'The Fantastic Mr. Fox',
    'Mr and Mrs Smith',
    'Mrs Doubtfire',
    'Mr Deeds'
];

const movie = movies.find( movie => {
   return movie.includes('Mrs');
})

// so whenever the first time it comes back true the method find is done.  It will stop running only until it finds what its looking for

const movie2 = movies.find( movie => {
    return movie.indexOf('Mrs') === 0;
})
// finding the first movie that starts with Mrs. 

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fantasy', 'epic']
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['drama','epic']
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['comedy']
},
{
    title: 'The Way it Was',
    authors: ['Ernest Hemingway'],
    rating: 4.11,
    genres: ['epic']
},
{
    title: 'Harry Potter',
    authors: ['JK Rowling'],
    rating: 4.11,
    genres: ['fantasy']
},
{
    title: 'Chickens',
    authors: ['Colt Steele'],
    rating: 4.11,
    genres: ['fiction']
},
{
    title: 'WAP',
    authors: ['Cardi B'],
    rating: 4.36,
    genres: ['ehhh its okay']
}
];

 const goodBook = books.find( b => b.rating > 4.3);

 const author = books.find(b => b.authors.includes('Neil Gaiman'));
//  REMEMBER FIND WILL ONLY GIVE US THE FIRST MATCH ;



// FILTER -- 
// creates a new array with all elements that pass the test implemented by the provided function 

const nums = [34,35,67,54,109,102,32,9];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);
const bigNums = nums.filter(n => n > 30);

const goodBook2 = books.filter(b => b.rating > 4.3);
const fantasy = books.filter(b => b.genres.includes('fantasy'));

const query = 'A';
const searchBook = books.filter(book => (
    book.title.toLowerCase().includes(query.toLowerCase())
));


// SOME AND EVERY -- 

// Every tests whether all elements in the array pass the provided function. it returns a boolean value 

const names = ['dog', 'dig', 'log', 'bag', 'wag'];

const name3 = names.every(name => {
    return name.length === 3;
})

const endsWithG = names.every( name => {
    const last = name.length-1; 
    return name[last] === 'g';
})

//  SOME 

const startsWithD = names.some(name => name[0] === 'd');

// SOME NEEDS JUST ONE ELEMENT IN THE ARRAY TO TURN TRUE, EVERY NEEDS ALL OF THE ELEMENTS TO RETURN TRUE 

const everyBookRating = books.every(book => {
   return book.rating > 4.5
});
// false 

const any2authors = books.some(book => book.authors.length === 2);

// true 


// SORT -- 

const prices = [400.50,3000,99.99,35.99,12.00,9500];

// prices.sort();
// the defualt value of this is to convert all of these into strings, and will go by cahracter first rather than value 

// SORT PT 2 -- 
// arr.sort(compareFunc(a,b))
// if compareFunc returns less than 0 sort a before b 
// if compareFunc returns 0 leave a and b unchanged with respect to each other 
// if compareFunc returns greater than 0 sort b before a 

// IT WILL MUTATE YOUR ARRAY SO MAKE SURE YOU SAVE TWO COPIES-- or you will mutate in place whcih will change the original order i guess people
// dont care about it that much 
// const ascSort = prices.slice().sort((a,b) => a - b);

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a,b) => a - b);  //assorting in asceding order from smallest - largest 
const descSort = prices.slice().sort((a,b) => b - a);  //assorting in descedning order from largest - smallest 


const ratingsSort = books.sort((a,b) => a.rating - b.rating)


// REDUCE -- 

// LAST ARRAY METHOD START HERE TOMORROW TAKE YOUR TIME AND DONT RUSH IT 


// [3,5,7,9,11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// the accumulator variable is going to start as the first element in the array 3  
// and currentValue starts as the next element 5
// and then the return value is 8 
// then the return value is used as the accumulator in the next iteration so accumulator will now be 8 
// then currentVlaue will be 7 
// then the return value will be 15 
// this will repeat as long as the array is being iterated over 

// Callback       accumulator       currentValue        return value 
// first call         3                  5                  8   
// sec call           8                  7                  15    
// thrid call         15                 9                  24   
// fourth call        24                11                  35     

const reduceArr = [3,4,5,6,7];

const product = reduceArr.reduce((accumulator, currentValue)=>{
    return accumulator * currentValue;
})

// Callback       accumulator       currentValue        return value 
// first call         3                  4                  12   
// sec call           12                 5                  60   
// thrid call         60                 6                  360   
// fourth call        360                7                  2520  -- end value  




// REDUCE PT 2  -- 

const grades = [87,64,96,92,88,99,73,70,64];

// const maxGrade = grades.reduce((accumulator, currentValue) => {
//     if(currentValue > accumulator) return currentValue;
//     return accumulator;
// })
const maxGrade = grades.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
})
const minGrade = grades.reduce((min, currentValue) => {
    return Math.min(min, currentValue);
})

// accumulator                currentValue            return 
// 87                             64                     87
// 87                             96                    96   
// 96                             92                    96     
// 96                             88                    96  
// 96                             99                    99
// 99                             73                    99
// 99                             70                    99 
// 99                             64                    99

// the top value would be 99, reduce is going to look at every element in the array an compare it to the highest value of the next element 
// in the array. 

// with reduce you can also add in an initial value at the end of the code block: 

const sum = [10,20,30,40,50].reduce((sum, currVal) => {
    return sum + currVal;
}, 100)

// EVEN MORE REDUCE!!!! -- 

const votes = ['y','y','n','y','n','y','n','y','n','n','n','n','y','y'];

// const results = votes.reduce((tally, val) => {
//     if(tally[val]){
//         tally[val]++;
//     } else {
//         tally[val] = 1;
//     }
//     return tally;
// }, {})
const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1
    return tally;
}, {})

const groupedByRatings = books.reduce((groupedBooks, book) => {
   const key = Math.floor(book.rating);
   if(!groupedBooks[key]) groupedBooks[key] = [];
   groupedBooks[key].push(book);
   return groupedBooks;
}, {});

// So to sum up with REDUCE all you are doing is taking multiple values and reducing it down to one value.  You might get a singular number 
// like before or you might return an object like we just did. 



