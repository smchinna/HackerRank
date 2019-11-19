function Node(data) {
  this.data = data;
  this.next = null
}

function SingleList(arr) {
  this._root = null;
  for(let i=0; i<arr.length; i++) {
    let node = new Node(arr[i]);
    if(this._root === null) {
      this._root = node;
    } else {
      insertElementFunc(this._root, node);
    }
  }

  function insertElementFunc(rootData, inserData) {
    if(rootData.next === null) {
      rootData.next = inserData;
    } else {
      insertElementFunc(rootData.next, inserData);
    }
  }
}


let sList = new SingleList([1,3,4,5,6]);

console.log("singleLinkedList-->",JSON.stringify(sList))