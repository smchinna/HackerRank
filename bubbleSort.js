function bubbleSort(arr) {
  let item = [...arr];
  for (let i = 0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i; j++) {
      //console.log(i, j)
      if(item[j] > item[j+1]) {
        let a = item[j];
        item[j] = item[j+1];
        item[j+1] = a;
      } 
    }
  }
  console.log(item)
}

bubbleSort([4,1,6,10,5,32,17,23])