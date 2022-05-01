const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add( data ) {
    //let node = this.root;
    this.treeRoot = addRecursive(data, this.treeRoot);

    function addRecursive(data, node) {
      if(!node) {
        node = new Node(data);
      }  
      else if(data < node.data) {
          node.left = addRecursive(data, node.left)
        } 
      else if (data > node.data){
        node.right = addRecursive(data, node.right)
      }
      return node;
      }
    }

  has( data ) {

    return hasRecursive( this.treeRoot, data );

    function hasRecursive(node, data){

      if (!node) {
        return false;
      }

      else if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return hasRecursive(node.left, data);
      } else if(data > node.data) {
        return hasRecursive(node.right, data)
      }
    }
  }

  find( data ) {
    return findRecursive( this.treeRoot, data );

    function findRecursive(node, data){

      if (!node) {
        return null;
      }

      else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findRecursive(node.left, data);
      } else if(data > node.data) {
        return findRecursive(node.right, data)
      }
    }
  }

  remove( data ) {
    this.treeRoot = removeRecursive(this.treeRoot, data)

    function removeRecursive(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeRecursive(node.left, data);
        return node;
      }
      if (node.data < data) {
        node.right = removeRecursive(node.right, data);
        return node;
      }
      else {
        if(!node.left && !node.right) {
          node = null;
          return node;
        }
        else if (!node.left) {
          node = node.right;
          return node;
        }
        else if (!node.right) {
          node = node.left;
          return node;
        }
        else {
          let maxFromLeft = node.left;
          while(maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          }
          node.data = maxFromLeft.data;
          node.left = removeRecursive(node.left, maxFromLeft.data);
          return node;
        }
      }
    }
  }

  min() {
    if(!this.treeRoot){
      return null;
    }
    let node = this.treeRoot;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}



let tree = new BinarySearchTree();
tree.add(5)
tree.add(1)
// tree.add(7)
// console.log(tree.root())
// console.log(Object.getOwnPropertyNames(tree))
console.log(tree.remove(5));




module.exports = {
  BinarySearchTree
};