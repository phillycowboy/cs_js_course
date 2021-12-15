console.log("%cmultiple awaits!", "color: pink");

// moveX returns a promise, and in this promise it will move an element, a certain number of pixels(ammount), a certain number of seconds(delay) depending on whether the 
// number is positive or negative

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
            // else if(currLeft + amount < bodyBoundary){
            //     reject({ bodyBoundary, currLeft, amount });
            // }
            // tried to move it back to the right if it hit the left side of the screen. 
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
async function animateRight(el, amt){
    // calling moveX with an element, moving it 100 pixels, every second.
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
    await moveX(el, amt, 1000);
}
// then we call animateRight which is our async function and passing in the el that moveX needs to operate.
animateRight(btn, 100).catch((err) => {
    console.log("ALL DONE");
    animateRight(btn, -100);
    
})
// .catch((err) => {
//     animateRight(btn, 100);
// })
// have to pass in the btn as the el in this case. should move only twice. 



// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});