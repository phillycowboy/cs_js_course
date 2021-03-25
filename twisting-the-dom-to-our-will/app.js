// const btn = document.querySelector('button')
// btn.addEventListener('click', () => {
//     alert('YOU GOT IT!');
// })


// Changing Multiple Elements 
const allLis = document.querySelectorAll('li');

// for(let i = 0; i < allLis.length; i++){
//     console.log(allLis[i].innerText);
// }

// will print all the li's on the DOM to the console 

// changing the innerText on the DOM 

// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'WE ARE THE CHAMPIONS';
// }

// This is the common pattern 
// Find the thing 
// Loop/Iterate over the thing 
// change/manipulate the thing inside the code block 

// for(let li of allLis){
//     li.innerHTML = 'WE ARE <b>THE CHAMPIONS </b>';
// }

// IF YOU HAVE ONE THING YOU CAN MANNIPULATE IT DIRECTLY


// IF YOU HAVE MULITPLE THINGS YOU HAVE TO LOOP

// ALTERING STYLES -- 

// changing style of lis in a loop 
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// for(let li of allLis){
//     li.style.color = 'orchid';
// }

// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color;
// })






// getComputedStyle -- 

// basically getComputedStyle is a method that will return an object of an element with calcualted styles of css that have been determined for it  



// MANIPULATING CLASSES --

// a much better way to add multiple styles at once 

const todo = document.querySelector('#todos .todo');
// const todoBtn = document.querySelector('#todoBtn');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

// NEW CLASS AND STYLE HAVE BEEN ADDED IN CSS YOU CAN NOW USE classList TO ADD REMOVE OR TOGGLE A CLASS: 

// todo.classList.add('class', 'done');
// todo.classList.remove('class', 'done');
// todo.classList.toggle('class', 'done');


// CREATING ELEMENTS -- 

// making a new image or element and appending it to the DOM 

const newImg = document.createElement('img');

// newImg
//     < img >

// console.dir(newImg)  in console 

newImg.src = "https://images.pexels.com/photos/2761930/pexels-photo-2761930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
newImg.style.width = "200px";

document.body.appendChild(newImg);

// so this process is very common we make a new empty element of some type
// and then we fill in the blanks when appropriate-- we fill in innerText when we need too or the img src or href or other attributes 

// NOW lets make a new anchor tag given the steps we just followed 

// video link https://www.youtube.com/watch?v=ByFlKFY6iag

const newA = document.createElement('a');
newA.innerText = "GOD OF THUNDER"
newA.href = "https://www.youtube.com/watch?v=ByFlKFY6iag"

const firstP = document.querySelector('p');

firstP.appendChild(newA);

// SO THIS IS THE PROCESS OF CREATING ELEMENTS 

// -YOU CREATE AND EMPTY ELEMENT AND SET IT TO A VARIABLE 
//  const newElement = documnet.createElement('tagname')

// THEN YOU FILL THE CONTENT IF YOU NEED TOO 
// newElement.innerText = "HELLO THERE!"

// THEN YOU FIND A PARENT TO APPEND IT TO, IF YOU APPEND IT A PARENT OR THE BODY IT WILL SHOW UP LAST 

// document.body.appendChild(newElement) -- should be on the page when you refresh 

// const section = document.querySelector('section')
// section.appendChild(newElment)

// THERE YOU HAVE IT YOU WERE MAKING IT SUPER COMPLICATED BEFORE!!!!!!!!!!!!!!!!!



// APPEND, PREPEND, and insertBefore -- 





