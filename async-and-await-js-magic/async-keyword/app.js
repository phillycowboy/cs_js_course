console.log("%casync keyword", "color: green")


// a function returning a string
// function greet(){
//     return "Hello!!!";
// }


// an async function returning a promise. 

async function greet(){
    return "Helllllllo!";
}
greet().then((val) => {
    console.log("PROMISE RESOLVED WITH:", val);
});

async function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // reject
        throw 'x and y must be numbers!';
    }
    // resolve
    return x + y;
};
add(4,65).then((val) => {
    // if the promise resolves 
    console.log("PROMISE RESOLVED WITH:", val);
}).catch((err) => {
    // if the promise rejects
    console.log("PROMISE REJECTED WITH:", err);
});

// function add(x,y){
//     return new Promise((resolve, reject) => {
//         if(typeof x !== 'number' || typeof y !== 'number'){
//             reject('x and y must be numbers!');
//         }
//         resolve(x + y);
//     })
// }

