// Cats.JS

class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}

const monty = new Cat('monty', 9);

class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}

const wyatt = new Dog('wyatt', 13);