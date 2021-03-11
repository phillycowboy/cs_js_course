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

let arr = ['hello', 'there', 'ben', 'its','nice','to','meet', 'you'];

for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i]}`);
}

let newArr = ['how about a nice game of chess?']
for (let i = 0; i < newArr.length; i++) {
    console.log(`${newArr[i]}`);
}
