const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodeRoot = null
  }

  root() {
    return this.nodeRoot
  }

  add(data) {

    this.nodeRoot = addFunc(this.nodeRoot, data)

    function addFunc(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addFunc(node.left, data)
      } else {
        node.right = addFunc(node.right, data)
      }

      return node
    }
  }

  has(data) {

    return hasFunc(this.nodeRoot, data)

    function hasFunc(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true
      }

      if(data < node.data){
        return hasFunc(node.left, data)
      }
        return hasFunc(node.right, data)
    }
  }

  find(data) {

    return findFunc(this.nodeRoot, data)

    function findFunc(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      
      if(data < node.data){
        return findFunc(node.left, data)
      }
        return findFunc(node.right, data)
    }
  }

  remove(data) {

    this.nodeRoot = removeFunc(this.nodeRoot, data)

    function removeFunc(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeFunc(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeFunc(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let rightMin = node.right
        while (rightMin.left) {
          rightMin = rightMin.left
        }
        node.data = rightMin.data

        node.right = removeFunc(node.right, rightMin.data)
        return node
      }
    }
  }

  min() {

    if (!this.nodeRoot) {
      return null
    }

    let node = this.nodeRoot;
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    
    if (!this.nodeRoot) {
      return null
    }

    let node = this.nodeRoot;
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};