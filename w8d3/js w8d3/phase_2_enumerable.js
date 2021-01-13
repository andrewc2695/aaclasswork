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

Array.prototype.myReduceNoInitial = function(callback) {
    var accum;
    this.myEach(function(ele) {
        accum = accum ? callback(accum, ele) : ele;
    });
    return accum;
}

Array.prototype.myReduce = function(callback, initialValue) {
    // var accum;
    // this.myEach(function(ele) {
    //     accum = initialValue ? callback()
    // });
    // return accum;
    // if (initialValue === undefined) {
    //     initialValue = this[0];
    // } else {

    // }
}