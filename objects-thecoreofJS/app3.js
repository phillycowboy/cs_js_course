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

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'

};

let mysteryColor = 'yellow';

// and as we've done before we can use the dot operator to find to access keys and their values
// palette.blue
// '#30336b'

// As before we cant just type yellow in the square brackets and expect an outcome or just the word for that matter we would 
// still have to use quotes with the bracket notation 

palette['blue'];
// '#30336b'

// We can however store a key into a variable and referece it like this and have JS return its original value: 

palette[mysteryColor];
// '#f9ca24';


// but on the filp side we cannot do this now:

// palette.mysteryColor

// because now JS is looking for a property of mysteryColor on the object of palette when it actually is being stored in a variable on its own



// ADDING AND UPDATING PROPERTIES --




