// LOOPS INTRO -- 

// FOR LOOP -- 

// a for loop works the same way as a an if statemtent, we have a conditional, if something is true than run this block of code 
// if (condition) {
//     run some block of code if the above 
//     equates to true 
// }

// so here we have for loop 

// for (
//     [initialExpression]; -- set counter 
//     [condition]; tell it what needs to be met 
//     [incrementExpression]; tell it how to count 

//    -- run code block 
// )

// start at 1/stop at 10/add 1 each time through 

// for (let i = 1; i <= 10; i++) {
//     console.log('HELLO:', i);
    
// }

//                       adding three each time will still stop at 10
for (let i = 1; i <= 10; i+=3) {
    console.log('HELLO:', i);
    
}
// perfect square loop -- each number up to 20 times itself 

for(let i = 1; i <= 20; i++){
    // console.log(i * i);
    console.log(`${i}X${i} = ${i * i}`);
}

// counting down from 50 by tens 

for(let i = 50; i >= 0; i -= 10){
    console.log(i);
}

// counting down by 25 from 200 

for(let i = 200; i >= 0; i -= 25){
    console.log(i);
}

// INIFINITE LOOOPPPPSSSS!!!!! -- 
// DONT RUN THIS 
// for (let i = 20; i >= 0; i++){
//     console.log('FUCK!');
// }




// FOR LOOPS AND ARRAYS -- 

// let arr = ['hello', 'there', 'ben', 'its','nice','to','meet', 'you'];

// for(let i = 0; i < arr.length; i++){
//     console.log(`${arr[i]}`);
// }

// let newArr = ['how about a nice game of chess?']
// for (let i = 0; i < newArr.length; i++) {
//     console.log(`${newArr[i]}`);
// }

// setTimeout(() => {
//     console.log('how about a nice game of chess?');
// }, 3000);

// setTimeout(() => {
//     console.log('are you still there?');
// }, 10000);
// setTimeout(() => {
//     console.log('h');
// }, 11000);
// setTimeout(() => {
//     console.log('e');
// }, 12000);
// setTimeout(() => {
//     console.log('l');
// }, 13000);
// setTimeout(() => {
//     console.log('l');
// }, 14000);
// setTimeout(() => {
//     console.log('o');
// }, 15000);
// setTimeout(() => {
//     console.log('?');
// }, 16000);


const examScores = [98,77,84,91,57,66];
for(let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i]);
}

const students = [
    {
        firstname: 'Zeus',
        grade: 86
    },
    {
        firstname: 'Artemis',
        grade: 97
    },
    {
        firstname: 'Hera',
        grade: 72
    },
    {
        firstname: 'Apollo',
        grade: 90
    }
];

let total = 0; 

for (let i = 0; i < students.length; i++) {
    let myStudents = students[i];
    total += myStudents.grade; 
    
}
console.log(total / students.length);

// for( let i = 0; i < students.length; i++){
//     let myStudents = students[i];
//     console.log(`${myStudents.firstname} got a ${myStudents.grade} on their test.`);
// }

// so you need to access each of the students objects with the index of i then call their properties 

// const word = 'stressted';
// let reversedWord = '';

// for(let i = word.length -1; i >= 0; i--){
//     // console.log(word[i]);
//     reversedWord += word[i];
//     console.log(reversedWord);
// }



// NESTED LOOPS 

// for(let i = 1; i <= 10; i++){
//     console.log('OUTER LOOP', i);
//     for(let j = 10; j >= 0; j-=2){
//         console.log('   INNER LOOP', j );
//     }
// } 

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;

for(let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    // console.log(row);
    for(let j = 0; j < row.length; j++){
        // console.log(row[j]);
        totalScore += row[j];
        // console.log(totalScore);
    }
}

// so for each iteration of the outer loop you are grabbing the array with in the main array, on your inner loop iteration, you are 
// grabbing each individual number and adding them together. 


// WHILE LOOPS -- 
// _____________________________________________________________


// the difference between for and while 

// for(let i = 0; i <= 5; i++){
//     console.log(i);
// }


// let j = 0; 

// while (j < 100) {
//     j++;
//     console.log(j);
// }

// as long as the condition is true the code block will run 


// MORE WHILE LOOPS 


// const target = Math.floor(Math.random() * 10); 
// let guess = Math.floor(Math.random() * 10); 

// while(guess !== target){
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log('CONGRATS YOU WIN!');

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true){
    if (target === guess ) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS YOU WIN!');

// syntax -- 
// while (some condition)
// in the loop, update or attempt to make that condition false 


// BREAK KEYWORD -- 

// for(let i = 0; i < 100; i++){
//     console.log(i);
//     if(i === 5){
//         break;
//     }
// }




// FOR...OF LOOPS -- 


// for (variable of iterable){
    // statement
// }

let subreddits = ['soccer','popheads','cringe','books'];

// for(let i = 0; i < subreddits.length; i++){
//     console.log(subreddits[i]);
// }

for(let sub of subreddits){
    console.log(sub);
}

// in this comparison you are setting sub to the variable of i like before.  the difference is you dont have to access i in the index of the 
// array it just knows about it. you dont have to set a counter 

for(let char of 'helloeveryone'){
    console.log(char.toUpperCase());
}

// COMPARIN G FOR AND FOR...OF --

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

// magicSquare each row, col, diagonal sums to 15 

// for(let i = 0; i < magicSquare.length; i++){
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j < row.length; j ++){
//         // console.log(row[j]);
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

for(let row of magicSquare){
    let sum = 0; 
    for(let num of row){
        sum += num; 
    }
    console.log(`${row} summed to ${sum}`);
}

// sometimes it is not appropriate to use FOR OF, some cases ussing a traditional FOR loop will do 

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i = 0; i < words1.length; i++){
    console.log(words1[i], words2[i]);
}




// FOR OR WITH OBJECTS -- 

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amiele: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};


// for(let x of movieReviews){
//     console.log(x);
// }

// this does not work! 

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
} 

const ratings = Object.values(movieReviews);
let totalAvg = 0; 
for(let r of ratings){
    totalAvg += r;
}
console.log(totalAvg/ratings.length);




// FOR...IN LOOPS -- 
// we can loop over the keys of an object using object.keys()

// syntax -- 
// for (variable IN object){
    // statement
// }


const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for(let prop in jeopardyWinnings){
    console.log(prop, jeopardyWinnings[prop]);
}

// FOR OF wants an iterable, FOR IN wants an object 

let winnings = 0; 

for (let prop in jeopardyWinnings) {
    winnings += jeopardyWinnings[prop];
}

console.log(`Ken Jennings total earnings ${winnings}`);

// however we techinically can use FOR IN with an array since ultimately arrays are objects as well, but theres really no reason since arrays 
// dont have keys. 

for(let k in [88,99,77,66]){
    console.log(k);
}

// and the result is just the index numbers of the hardcoded array. 



 











