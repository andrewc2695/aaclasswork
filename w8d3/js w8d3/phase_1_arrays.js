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

// let mtx = [[1,1,2],[2,3,3],[4,5,6]];

// console.log(mtx.transpose());

Array.prototype.transpose2 = function() {
    debugger
    return Array(this[0].length).map( (_,i) => {
        return Array(this.length).map( (_,j) => {
            console.log([i, j])
            return this[j][i];
        }); 
    });
}

// let mtx = [[1,1,2],[2,3,3],[4,5,6]];

// console.log(mtx.transpose2());


Array.prototype.twosum = function(){
    let compliments = {};
    for (i = 0; i < this.length; i++){
        if (compliments[this[i]] === undefined){
            compliments[0 - this[i]] = i; 
        }else{
            return [compliments[this[i]], i];
        }
    }
}


// arr = [1, 2, 3, -2, -3]
// console.log(arr.twosum())

