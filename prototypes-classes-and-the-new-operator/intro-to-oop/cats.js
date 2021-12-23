// Cats.JS
class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}



class Cat extends Pet{
    meow(){
        return 'MEOWWWW!'
    }
}

const monty = new Cat('monty', 9);

class Dog extends Pet{
    woof(){
        return 'WOOFFFFF!'
    }
}

const wyatt = new Dog('wyatt', 13);