// const h1 = document.createElement('h1');
// h1.innerText = "KEY EVENTS";
// document.body.appendChild(h1);

const input = document.querySelector("#username");

// keydown does not care which key you are pressing, it doesnt care about the character. anytime you press a key this event will fire 
input.addEventListener('keydown', function(e) {
    console.log("KEYDOWN");
})

// keyup will fire when the key you hit is released, like keydown it will fire when you realease the key, and it is for all keys and doesnt care
// about the character. 
input.addEventListener('keyup', function(e) {
    console.log("KEYUP");
})

// keypress only cares about the keys that can effect the input, if you hit the arrows or shift key inside of the input keypress wont track the 
// key you will only get keydown and keyup, if you want to know what the user is typing you can find the value through keypress

// return is considered a keypress delete is not considered a keypress 
input.addEventListener('keypress', function(e) {
    console.log("KEYPRESS");
})

const addItemInput = document.querySelector("#addItem");
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        if(!this.value) return
        // add an new item to the list
        const newItemText = this.value;
        // grab the value of the input text
        const newItem = document.createElement('li');
        // create an li to append to your ul 
        newItem.innerText = newItemText;
        // the li's innerText is set to the value the user passes through
        itemsUL.appendChild(newItem);
        // append the li to the ul of what the user types. 
        this.value = '';
        // clear the input after you hit enter.

    }
})

// recap KEYUP and KEYDOWN are going to fire for any key that you are going to touch. KEYDOWN doesnt fire until you press a key, KEYUP will
// only fire once its released
// 

