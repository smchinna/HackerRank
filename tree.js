function Node(data) {
  this.value = data;
  this.right = null;
  this.left = null;
}

function BSTTree(data) {
  this.root = null;
  this.leftHeight = 0;
  this.rightHeight = 0;
  for(let i=0; i<data.length; i++) {
    let node = new Node(data[i]);
    if(this.root === null) {
      this.root = node
    } else {
      insertElementFunc(this.root, node)
    }
  }

  this.postOrderData = [];
  postOrderFunc(this.root, this.postOrderData);
  this.preOrderData = [];
  preOrderFunc(this.root, this.preOrderData)
  this.inOrderData = [];
  inoOrderFunc(this.root, this.inOrderData);

  function insertElementFunc(rootData, insertElement) {
    if(rootData.value > insertElement.value) {
      if(rootData.left === null) {
        rootData.left = insertElement
      } else {
        insertElementFunc(rootData.left, insertElement)
      }
    } else {
      if(rootData.right === null) {
        rootData.right = insertElement
      } else {
        insertElementFunc(rootData.right, insertElement)
      }
    }
  }
  function postOrderFunc(node, arr) {
    if(node !== null) {
        postOrderFunc(node.left, arr); 
        postOrderFunc(node.right, arr); 
        arr.push(node.value)
    }
  }
  function preOrderFunc(node, arr) {
    if(node !== null) {
        arr.push(node.value)
        preOrderFunc(node.left, arr); 
        preOrderFunc(node.right, arr); 
    }
  }
  function inoOrderFunc(node, arr) {
    if(node !== null) {
      inoOrderFunc(node.left, arr); 
      arr.push(node.value)
      inoOrderFunc(node.right, arr); 
    }
  }
}

let a = new BSTTree([10,4,2,15,12, 1, 3])
console.log(JSON.stringify(a))