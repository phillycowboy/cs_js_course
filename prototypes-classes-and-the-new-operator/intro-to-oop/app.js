// INTRO TO OOP! 
console.log("INTRO TO OOP!");

// FACTORY FUNCTIONS

// function hex(r, g, b){
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }


// function rgb(r,g,b){
//     return `rgb(${r}, ${g}, ${b})`;
// }

// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function(){
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function(){
//         const {r,g,b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };
//     return color;
// };

// const firstColor = makeColor(35,255,150);
// will print out a hexadecimal color for us when the aruments are passed in 

// console.log(hex(255, 100, 25));
// "#ff6419"
// "rgb(255, 100, 25)"

// CONSTRUCTOR FUNCTIONS 

// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.rgb = function(){
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     console.log(this);
// }
// without the new operator this is referring to the window

// new Color(255,40,0);
// with the new operator it is referring to the Color object and implictly makes it own object 

// should look like this in console after we instatiate a new object: 
// Color {r: 255, g: 10, b: 40, rgb: ƒ}
// b: 40
// g: 10
// r: 255
// rgb: ƒ ()
// arguments: null
// caller: null
// length: 0
// name: ""
// prototype: {constructor: ƒ}
// [[FunctionLocation]]: app.js:44
// [[Prototype]]: ƒ ()
// [[Scopes]]: Scopes[1]
// [[Prototype]]: Object

// still an indiviual function so we need to define it on the prototype itself: 

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    // this.rgb = function(){
    //     const {r,g,b} = this;
    //     return `rgb(${r}, ${g}, ${b})`;
    // };
    console.log(this);
}

Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};

const color1 = new Color(255,40,0);

// now we have rgb not defined on the object itself but in the prototype of the Color class and it should look like this as opposed to above: 

// Color {r: 255, g: 40, b: 0}
// b: 0
// g: 40
// r: 255
// [[Prototype]]: Object
// rgb: ƒ ()
// constructor: ƒ Color(r,g,b)
// [[Prototype]]: Object

// we can still call color1.rgb(): 

// color1.rgb()
// 'rgb(255, 40, 0)'
