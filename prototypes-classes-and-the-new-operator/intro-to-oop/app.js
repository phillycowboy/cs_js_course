// INTRO TO OOP! 
console.log("INTRO TO OOP!");
// *****************
// FACTORY FUNCTIONS
// *****************
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


// *******************************************
// CONSTRUCTOR FUNCTIONS  and the new Operator
// *******************************************
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

Color.prototype.hex = function(){
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function(a=1.0){
    const {r,g,b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`

}

const color1 = new Color(60,255,60);
// function calls and their results 
// color1.rgb = 'rgb(60, 255, 60)'
// color1.hex = '#3cff3c'
// color1.rgba = 'rgba(60, 255, 60, 1)'

// and we can change the back ground color of the body by calling one of these functions: 
// document.body.style.backgroundColor = color1.rgb()
// 'rgb(60, 255, 60)'
// and it should change! 
const color2 = new Color(0,0,0);

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

// when we call color1.hex() or color2.hex() we get two different values bc the value of THIS changes and should get this. not only that they should be one function and 
// function only on the prototype and not an individual function for the instance. hence they should be true when equated and not false so you should see this: 

// color1.hex()
// '#ff2800'
// color2.hex()
// '#000000'

// color1.hex === color2.hex
// true


// you should see both function defind on the prototype and not the object itself. 

