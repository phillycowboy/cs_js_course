const annoyer = {
   phrases: ["literally",
     "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop Won't Stop"],
    pickPhrase(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
     start(){
       this.timerId = setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000);
     },
     stop(){
         clearInterval(this.timerId);
         console.log("STOPPED!");
     }
    //  its great to use arrow functions here so you do not have to establish a new THIS in your object 
    // by using an arrow function within the object THIS becomes phrases instead of the WINDOW 

    // basically in the console you are picking a random phrase through the key phrases and returnng it every three seconds through set interval
    // stop is basically calling on the variable that you set because now you are grabbing the id of setinterval 

}



