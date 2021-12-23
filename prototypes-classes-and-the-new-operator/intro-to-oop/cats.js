// Cats.JS
class Pet {
    constructor(name, age){
        console.log('In PET CONSTRUCTOR');
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}



class Cat extends Pet{
    constructor(name, age, livesleft=9){
        // super references the class that we are extending from no need to duplicate the constructor when you already have 
        // that functionality built in! 
        console.log('In CAT CONSTRUCTOR');
        super(name, age)
        this.livesleft = livesleft;
    }
    meow(){
        return 'MEOWWWW!'
    }
}

// const monty = new Cat('monty', 9);

class Dog extends Pet{
    woof(){
        return 'WOOFFFFF!'
    }
    // has both an extended eat, and its own, it will run this function if you call it on the class of a Dog;
    eat(){
        return `${this.name} scrafs his food!`;
    }
}

// const wyatt = new Dog('wyatt', 13);