Array.prototype.bubbleSort = function(){
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for(i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]){
                let holder = this[i];
                sorted = false;
                this[i] = this[i + 1];
                this[i + 1] = holder;
            }
        }
    }
}

// arr = [2,7,9,2000,4,54,-7];
// console.log(arr);
// console.log(arr.bubbleSort());

String.prototype.substrings = function() {
    let subs = [];
    for(i = 0; i < this.length; i++) {
        for(j = i+1; j <= this.length; j++) {
            subs.push(this.substring(i,j));
        }
    }
    return subs;
}

// random_string = "I enjoy computers!";
// console.log(random_string.substrings());