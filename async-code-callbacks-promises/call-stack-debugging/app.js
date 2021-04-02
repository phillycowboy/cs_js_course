const repeat = (str, times) => {
    let result = '';
    for(let i = 0; i < times; i++){
        result += str; 
    }
    return result 
};

const scream = (str) => {
    return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8)
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1')
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
}
console.log('Hello');

makeRant('I hate mayonnaise', document.body);
// makeRant('if you have to cough please cover your mouth', document.body);

// DEBUGGING: 
// if you open your devtools on the page go to sources<page<filename.js 

// from there you can click a line number and add a brealpoint to tell your code where to stop running. 

// you should now see on the screen paused in debugger and in the devtools and area that says paused on breakpoint:


