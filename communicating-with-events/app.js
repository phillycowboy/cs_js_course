// console.log("new section!");

// the thing      the eventType         the code
// button          click                change the color
// input           hits return          get search results
// image        mouseover           display the image caption

// const btn = document.querySelector('#clicker');

// btn.onclick = function(){
//     console.log('YOU CLICKED ME GO AWAY!!');
// }
// btn.ondblclick = function(){
//     console.log('DOUBLE CLICK!!');
// }

// const btn = document.querySelector('button'); 

// btn.onclick = () => {
//     alert('WRONNNNNNNNNNNG');
// }
// btn.onclick = () => {
//     alert('SECOND TIME');
// }

// if we wanted a second click  listener we do not have that option, it is a single property 
// all we get is the most recent function for the onclick event, JS doesnt care about the first one, only the most recent 


// THE addEventListener-- you should use this pattern always !!!!

// find the element and save it to a variable 
const btn = document.querySelector('button');

// use that element to call .addEventlistener on and specify the event and the callback 
btn.addEventListener('click', function(){
    alert('HEY YOU DID IT!');
});

// NOW YOU SHOULD HAVE AN ALERT AFTER THE BUTTON HAS BEEN CLICKED! 

// you can also add a second event for the same element unlike the last method with onclick 

btn.addEventListener('click', function(){
    console.log('SECOND THING');
});

// after your alert you should have a log in your console that says 'SECOND THING'

btn.addEventListener('mouseover', function(){
    btn.innerText = "Stop touching me!";
});
btn.addEventListener('mouseout', function(){
    btn.innerText = "CLICK ME!";
});

window.addEventListener('scroll', function(){
    console.log('STOP SCROLLING');
});


window.addEventListener('scroll', function(){
    document.body.style.backgroundColor = 'rgba(255,0,0,0.3)';
});

const h2 = document.querySelector('h2');
h2.addEventListener('click', function(){
    this.style.color = 'red'
})






// addEventListener is the way to go when dealing with events -- THIS IS THE WAY

// you find the element and save it to a variable 
// you call addEventListener on the variable and pass it a function to run some code 