class Clock {
    constructor() {
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        let formattedTime = [this.hours, this.minutes, this.seconds].join(":")
        console.log(formattedTime)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

const clock = new Clock();
clock.printTime();