function Cook(row, column, data) {
  this.data = data;
  this.row = row;
  this.column = column;
}

Cook.prototype.getArray = function() {
  console.log(this.data);
}

Cook.prototype.getLineChocko = function() {
  //this.chacko = [];
  this.makeOutputArr = [];

  for(let i=0; i<this.row; i++) {
    for(let j=0; j<this.column; j++) {
      if(this.data[i][j] === 1) {
        
        let previousRow = i>0 ? `${i-1}${j}` : null;
        let previousColumn = j>0 ? `${i}${j-1}` : null;
        let previosColumnIndex = checkIndex(this.makeOutputArr, previousColumn);
        let previousRowIndex = checkIndex(this.makeOutputArr, previousRow);
        if(previosColumnIndex > -1 && previousRowIndex > -1){
          let sampleArrStr = `${i}${j}`;
          this.makeOutputArr[previousRowIndex].push(sampleArrStr);
          let arr1 = this.makeOutputArr[previousRowIndex];
          let arr2 = this.makeOutputArr[previosColumnIndex];
          let sampleArr = arr1.concat(arr2);
          this.makeOutputArr[previousRowIndex] = sampleArr;
          this.makeOutputArr.splice(previosColumnIndex, 1);
        } else if(previousRowIndex > -1) {
          let sampleArr = `${i}${j}`;
          this.makeOutputArr[previousRowIndex].push(sampleArr);
        } else if(previosColumnIndex > -1) {
          let sampleArr = `${i}${j}`;
          this.makeOutputArr[previosColumnIndex].push(sampleArr);
        } else {
          let sampleArr = `${i}${j}`;
          this.makeOutputArr.push([sampleArr]);
        }
      }
    }
  }
}

function checkIndex(arr, checkValue) {
  let rowIndex = -1;
  if(checkValue) {
    for(let i=0; i<arr.length;) {
      let checkIndex = arr[i].findIndex((a) => a === checkValue);
      if(checkIndex > -1) {
        rowIndex = i;
        i = arr.length;
      } else {
        i++;
      }
    }
  }
  return rowIndex;
}

let a = new Cook(5,5,[[1,0,0,1,0],[1,0,1,0,1],[0,0,1,0,1],[1,0,1,0,0],[1,0,1,1,0]]);
//let a = new Cook(3,3, [[1,0,1],[1,1,1],[1,0,1]])
a.getLineChocko();
console.log(a)