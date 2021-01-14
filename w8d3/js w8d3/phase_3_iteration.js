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