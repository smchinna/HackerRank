function Graph(numberOfElement) {
  this.matrix = new Map();
  this.vertices = numberOfElement;
  // for (let i = 0; i < numberOfElement; i++) {
  //   let arr = []
  //   for (let j = 0; j < numberOfElement; j++) {
  //     arr.push(0);
  //   }
  //   this.matrix.push(arr)
  // }
  this.addVertices = function(arr) {
    for(let i=0; i<arr.length; i++) {
      this.matrix.set(arr[i], []); 
    }
  }

  this.addEdge = function(srcEle, destEle) {
    this.matrix.get(srcEle).push(destEle);
    this.matrix.get(destEle).push(srcEle);
  }
}

let grp = new Graph(6);
grp.addVertices(['A', 'B', 'C' , 'D', 'E', 'F']);
grp.addEdge('A', 'B');
console.log(grp)