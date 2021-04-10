
// // alert('the pages are connected!');

// // callbacks are not perfect they can be messy, this will be a callback example, and then we'll refactor it using promises. 

// const btn = document.querySelector('button');

// // setTimeout(() => {
// //     btn.style.transform = `translateX(100px)`; 
// //     setTimeout(() => {
// //         btn.style.transform = `translateX(200px)`;
// //         setTimeout(() => {
// //             btn.style.transform = `translateX(300px)`;
// //             setTimeout(() => {
// //                 btn.style.transform = `translateX(400px)`;
// //                 setTimeout(() => {
// //                     btn.style.transform = `translateX(500px)`;
// //                 }, 1000);
// //             }, 1000);
// //         }, 1000);
// //     }, 1000);
// // }, 1000);

// // const moveX = (element, amount, delay, callback) => {
// //     const bodyBoundary = document.body.clientWidth;
// //     const elRight =element.getBoundingClientRect().right;
// //     const currentLeft = element.getBoundingClientRect().left;
// //     if(elRight + amount > bodyBoundary){
// //         console.log('DONE! - CANNOT GO THAT FAR!');
// //     }else {
// //         setTimeout(() => {
// //             element.style.transform = `translateX(${currentLeft + amount}px)`;
// //             if (callback) callback();
// //         }, delay);
// //     };
// // };

// // btn.getBoundingClientRect();
// // DOMRect { x: 508, y: 149.375, width: 74.53125, height: 21, top: 149.375, … }
// // bottom: 170.375
// // height: 21
// // left: 508
// // right: 582.53125
// // top: 149.375
// // width: 74.53125
// // x: 508
// // y: 149.375
// // __proto__: DOMRect

// // moveX(btn, 100, 1000, () => {                     //from here --
// //     moveX(btn, 100, 1000, () => {
// //         moveX(btn, 100, 1000, () => {
// //             moveX(btn, 100, 1000, () => {
// //                 moveX(btn, 1000, 1000)
// //             })
// //         })
// //     });
// // });                                              //to here is our callback, after callback, after callback


// // request()               //a request will accept two argumnets, a success call back and a failure callback
// //if the request works out here is the code that runs, if not here is also the code that will run 

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//     setTimeout(() => {
//         const bodyBoundary = document.body.clientWidth;
//         const elRight = element.getBoundingClientRect().right;
//         const currentLeft = element.getBoundingClientRect().left;
//         if (elRight + amount > bodyBoundary) {
//             onFailure();
//         } else {
//             element.style.transform = `translateX(${currentLeft + amount}px)`;
//             onSuccess();
//         };

//     }, delay);
// };



// // so now we can invoke the function with a success callback and a failure callback, these will be two functions that are in order, 
// // first will be the success, and second will be the failure. 

// moveX(btn, 100, 1000, () => {
//     //success
//     moveX(btn, 400, 1000, () => {
//         //success
//         moveX(btn, 700, 1000, () => {
//             //success
//         }, () => {
//             //failure
//             alert('CANNOT MOVE!');
//         })
//     }, () => {
//         //failure
//         alert('CANNOT MOVE!');
//     })
// }, () => {
//     //callback failure
//     alert('CANNOT MOVE!');
// })

// PROMISES CODE STARTS AFTER THIS LINE, ABOVE LINE IS JUST A REFERNECE FOR REFACTORING CALLBACKS 
// we are going to save it to a variable but pass the promise two functions like we did in the last lesson success and fail
// instead now we will call them resolve or reject


// Creating a new promise 
// const willGetYouADog = new Promise((resolve, reject) => {
    // if we call resolve the promise will be resolved 
    // resolve();
    // if we call reject the promise will be rejected 
    // reject();

//     const rand = Math.random();
//     if(rand < 0.5){
//         resolve();
//     }else{
//         reject();
//     }
// })
// how we run code based on if our promise was either resolved or rejected --> .then 
//will run when this promised is resolved 
// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG!');
// })
// willGetYouADog.catch(() => {
    // for when a promise gets rejected this code will run 
//     console.log('NO DOG FOR YOU!');
// })

// Returning Promises from Functions -- theres only a couple of videos left on the same topic
// not going to make new files....

const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random(); 
            if(rand < 0.5){
                resolve();
            }else {
                reject();
            }
        }, 5000);
    });

};
makeDogPromise()
.then(() => {
    console.log("YAY WE GOT A DOG!");
})
.catch(() => {
    console.log("NO DOG FOR YOU!");
});

