// Creating Object Literals -- 

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

// to access data out of the object we want to use the dot operator just like we use with .length on most things 

// console.log(fitBitData.avgCalorieBurn);

// when you create keys they will be stored and created as strings. 






// ACCESSING OBJECT PROPERTIES 

const numbers = {
    100: 'one hundred', 
    16: 'sixteen',
    '76 trombones': 'great song'
};

// we can use numbers as keys but we cant access them with the dot operator bc JS will think that its an unexpected number 
// however we can use the bracket notation to access the value of the key we set like so: 

numbers[100];
//'one hundred';

// why would you use cracket notation to access a key/value pair instead of the dot operator?  sometimes in JS you will have property names that
// will not be valid JS identifiers 

// say we wanted to add a key of '76 trombones' to the numbers object and have it set to 'great song'.  We cant access it with the dot operator
// because this 'numbers.76 trombones' will automatically throw it an error, However we can do this if we need too: 

numbers['76 trombones'];
// 'great song'

// const palette = {
//     red: '#eb4d4b',
//     yellow: '#f9ca24',
//     blue: '#30336b'

// };

// let mysteryColor = 'yellow';

// and as we've done before we can use the dot operator to find to access keys and their values
// palette.blue
// '#30336b'

// As before we cant just type yellow in the square brackets and expect an outcome or just the word for that matter we would 
// still have to use quotes with the bracket notation 

// palette['blue'];
// '#30336b'

// We can however store a key into a variable and referece it like this and have JS return its original value: 

// palette[mysteryColor];
// '#f9ca24';


// but on the filp side we cannot do this now:

// palette.mysteryColor

// because now JS is looking for a property of mysteryColor on the object of palette when it actually is being stored in a variable on its own



// ADDING AND UPDATING PROPERTIES --

const userReviews = {};


// so when starting a web app our reviews will hopefully be coming in one at a time. but to add to the the empty object we can either use bracket
// notation or dot notation: 

userReviews['queenbee49'] = 4.0;
userReviews.mrSmith78 = 4.5;

//  to update we do the exact same thing find an objects key and set it equal to the value that you want 

userReviews.ben = '7' 
// whoops we want an integer not a string 

userReviews.ben = 7;

// in console it should be updated to an integer just like the rest 

// if we need to increment or update a number or review we can simply do this: 

userReviews.queenbee49 += 2;
// queenbee49 now has a user review of 2 more 

userReviews.ben -= 1;


// NESTED ARRAYS AND OBJECTS -- 

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
};

const avg = (student.exams.midterm + student.exams.final) / 2;
//90 which is the students avg 

// how would we access 'Art' from the student object 

student.strengths[1];
//'Art'  because it is at the index of one within the strengths array within the student object 


const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
];

// to find total: 

let total = (shoppingCart[0].price + shoppingCart[1].price +  shoppingCart[1].price) 

// you can access the object within the array by calling the objects index of the array then you can use dot notation to find each individual
// objects properties 

const game = {
    player1: {
        username: 'Blue',
        token: 'X'
    },
    player2: {
        username:'Muffins',
        token: 'O'
    },
    board: [
        ['O',null,'X'],
        ['X','O','X'],
        [null,'O','X']
    ]
};


// OBJECTS AND REFERENCE TYPES -- 


const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'

};

// lets say we are working with this palette object again we could make another object just by doing this: 

const palette2 = palette;

// both of these objects are pointing to the same object in memeory. so they are referencing the original object of palette so if 
// we change one of them: 
palette2.green = '#00ff00';

// both will be updated in memory even though we are adding green to what is palette2 here.  but since it is assigned to our original object
// of palette they are both pointing to the same object in memory 

// so for both objects and arrays reference types we use CONST because the internal value can be updated/changed but the original object or array
// cannot be. 



// ARRAY/OBJECT EQUALITY -- 

let nums = [1,2,3]; 
let mystery = [1,2,3];

let moreNums = nums; 

// nums === mystery //false 
// nums == mystery //false

// nums and mystery might look the same on the outside but in memeory they are pointing to two different reference numbers in memory 
// hence why they come up false when compared to one another 

// now that we set moreNums to equal or point to nums they both have the same reference type 
// nums === moreNums // true 
// nums == moreNums // true

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: ['message']
};

// if (user.notifications === []); 

// this will not work, logically it makes sense but when you compare an empty array with another
//  [] === [] // false 
// thats because everytime you type [] you are creating a new space in memory for an empty array 

// instead we could write our conditional as such: 

if (user.notifications.length === 0) {
    console.log("no new notifications");
}

// or this 

if (!user.notifications.length) {
    console.log('ah you suck');
}


// basically length will always count and if it is zero or NOT a new length then it will return what you want 

// all in all these equality operators are checking for equality of reference instead of equality of context/content 
// once we get to loops we can check if one matches the other, but with arrays and objects that is what we are doing for now 
// is simply just checking the equality of refrence 








