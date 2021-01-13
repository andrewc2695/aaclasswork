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