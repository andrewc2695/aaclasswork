function range(start,end) {
  if(start > end) {
    return [];
  }
  else {
    return [start].concat(range(start+1, end));
  }
}

//console.log(range(1,10));

