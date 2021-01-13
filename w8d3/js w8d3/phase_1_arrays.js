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

Array.prototype.transpose = function() {
    let res = Array()
    for(i = 0; i < this[0].length; i++) {
        res.push(Array());
        for(j = 0; j < this.length; j++) {
            res[i].push(this[j][i]);
        }
    }
    return res;
}

let mtx = [[1,1,2],[2,3,3],[4,5,6]];

console.log(mtx.transpose());

