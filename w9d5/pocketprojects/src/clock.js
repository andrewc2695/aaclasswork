import { htmlGenerator } from "./warmup";

export default class Clock {
    constructor($ele){
        this.clock = $ele;
        this.currentTime = new Date();
        this.hour = this.currentTime.getHours();
        this.minute = this.currentTime.getMinutes();
        this.second = this.currentTime.getSeconds();
        setInterval(this._tick.bind(this), 1000);
    }

    _tick(){
        this.second++;
        if(this.second === 60){
            this.second = 0;
            this.minute++
        }
        if(this.minute === 60){
            this.minute = 0;
            this.hour++;
        }
        if(this.hour === 24){
            this.hour = 0;
        }
        this.render();
    };

    printTime(){
        return `${this.hour}:${this.minute}:${this.second}`;
    }

    render(){
        htmlGenerator(this.printTime(), this.clock)
    }




}

const clockElement = document.getElementById("clock");
const clock = new Clock(clockElement);