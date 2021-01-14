function range(start,end) {
  if(start > end) {
    return [];
  }
  else {
    return [start].concat(range(start+1, end));
  }
}

//console.log(range(1,10));


function sumRec(num_arr){
  let first, rest;
  [first, ...rest] = num_arr;
  return first !== undefined ?  first + sumRec(rest) : 0;
}

console.log(sumRec(range(1, 10)));

