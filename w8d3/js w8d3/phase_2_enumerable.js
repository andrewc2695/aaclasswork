Array.prototype.myEach = function(callback){
    for(i = 0; i < this.length; i++){
        callback(this[i])
    }
}

Array.prototype.myMap = function(callback){
    var res = [];
    this.myEach(function(ele) {
        res.push(callback(ele));
    });
    return res;
}

arr = [1,2,3];

// console.log(arr.myMap(function(x) {
//     return 2 * x;
// }));

Array.prototype.myReduce = function(callback, intialValue) {
    var accum = intialValue;
    this.myEach(function(ele) {
        accum = accum !== undefined ? callback(accum, ele) : ele;
    });
    return accum;
}

// arr = [0, -1, 2, -3, 4, -5, 6, -7]
// console.log(arr.myReduce(function(a, b){
//     return a + b;
// }));

// console.log(arr.myReduce(function (a, b) {
//     return a * b;
// }));