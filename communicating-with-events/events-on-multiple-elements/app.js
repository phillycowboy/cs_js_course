// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseover', function(){
//     const x = Math.floor(Math.random() * 100);
//     this.style.fontSize = `${x}px`;
//     this.style.color = 'pink';
//     // document.body.style.backgroundColor = 'red';
// });

// h1.addEventListener('mouseout', function() {
//     this.style.fontSize = '60px';
//     this.style.color = 'slategrey';
//     // document.body.style.backgroundColor = 'white';

// });
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
h2.addEventListener('mouseover', function(){
    console.log(this.innerText);
})

const changeColor = function(e){
    console.log(e);
    h1.style.color = this.style.backgroundColor;
    h2.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#boxes');
for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}

document.body.addEventListener('keypress', function(e){
    console.log(e);

})


// the event object -- 
// changeColor is called in the eventListener and then changes the color of the header 
// we are never executing changColor ourselves 
// its being called for us and is being passed an argument of the event object 

// changeColor(eventObject)

// right now we are not caputring the event but if we were to pass a an argumnet in the callback function 
// but if you console.log(e) you get returned an event object about the event that just happened 

// we can now capture events and have their object returned to us so that we can get specific information to manipulate them even further!!! 
