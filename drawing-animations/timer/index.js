// console.log("Hi There!");
class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start)
    }

    start(){
        console.log('Time to start the timer');
    }
}
// when we call a new instance the constructor is auotmatically run for us.
// new Timer('hi there!');

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);