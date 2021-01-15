// throttle function allows us to specify a minimum time interval that must pass between invocations

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.


Function.prototype.myThrottle = function(time) {
    let tooSoon = false;
    if (!tooSoon) {
        tooSoon = true;
        setTimeout(() => tooSoon = false, time);
        this();
    }
}

class Neuron {
    fire() {
      console.log("Firing!");
    }
  }

  
