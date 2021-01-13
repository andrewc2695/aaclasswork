Array.prototype.uniq = function() {
    let res = [];
    let seen = {};
    for (i = 0; i < this.length; i++) {
        if (seen[this[i]] === undefined){
            res.push(this[i]);
            seen[this[i]] = true;
        }
    }
    return res ;
}

// arr = [1,1,2,2,3,3,4,5]
// console.log(arr.uniq())

Array.prototype.transpose = () => {
    let res = Array(this[0].length);
    res.map
}