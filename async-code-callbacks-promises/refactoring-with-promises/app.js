const btn = document.querySelector('button');
// REFACTOR WITH PROMISES --
const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currentLeft = element.getBoundingClientRect().left;
            if (elRight + amount > bodyBoundary) {
                reject({bodyBoundary, elRight, amount});
            } else {
                element.style.transform = `translateX(${currentLeft + amount}px)`;
                resolve();
            };
    
        }, delay);
    });
};

moveX(btn, 300, 1000)
.then(() =>  moveX(btn, 300, 1000))
.then(() =>  moveX(btn, 300, 1000))
.then(() =>  moveX(btn, 300, 1000))
.then(() =>  moveX(btn, 300, 1000))
.then(() =>  moveX(btn, 300, 1000))

// .then(() => {
//     return moveX(btn, 300, 1000);
// })
// .then(() => {
//     return moveX(btn, 300, 1000);
// })
// .then(() => {
//     return moveX(btn, 300, 1000);
// })
// .then(() => {
//     console.log('DONE WITH BOTH!');
// })
.catch(({bodyBoundary, elRight, amount}) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}`);
    console.log(`Element is at ${elRight}px , ${amount}px is too large!`);
})






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