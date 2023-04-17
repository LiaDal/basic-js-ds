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
    const newNode = new Node(data)
    if(!this.nodeRoot){
      this.nodeRoot = newNode
      return
    }
   
      let currentNode = this.nodeRoot

      while(currentNode){
        if(newNode.data < currentNode.data){
          if(!currentNode.left){
            currentNode.left = newNode
            return
          }

          currentNode = currentNode.left
        } else {
            if(!currentNode.left){
              currentNode.left = newNode
              return
            }

          currentNode = currentNode.right
      }
    }
  }

  has(data) {

    return searchEl(this.nodeRoot, data)

    function searchEl(node, data) {
      if(!node) {
        return false
      }
      if(node.data === data) {
        return true
      }
      if(data < node.data) {
        return searchEl(node.left, data)
      } else {
        return searchEl(node.right, data)
      }
    }
  }

  find(data) {
    return  getNode(this.nodeRoot, data)

    function getNode(node, data) {
      if(!node) {
        return null
      }
      if(node.data === data) {
        console.log(node.data)
        return node
      }

      if(node.data > data) {
        return getNode(node.left, data)
      } else{
        return getNode(node.right, data)
      }
    }
  }

  min() {
    return minNode(this.nodeRoot)
    
    function minNode(node) {
      let min = null
      if(!node) {
        return min
      }
      if(node.data && !node.left ) {
        return node.data
      } else {
        return minNode(node.left)
      }
    }
  }

  max() {
    return maxFunc(this.nodeRoot)
    
    function maxFunc(node) {
      let max = null
      if(!node) {
        return max
      }
      if(node.data && !node.right ) {
        return node.data
      } else {
        return maxFunc(node.right)
      }
    }
  }

  remove(data) {
    this.nodeRoot = removeFunc(this.nodeRoot, data)

    function removeFunc(node, data) {
      if(!node) {
        return null
      }
      if(node.data > data) {
        node.left = removeFunc(node.left, data)
        return node
      } else if(node.data < data) {
        node.right = removeFunc(node.right, data)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }
        if(!node.left) {
          node = node.right
          return node
        }
        if(!node.right) {
          node = node.left
          return node
        }
        let minRight = node.right
        while(minRight.left) {
          minRight = minRight.left
        }
        node.data = minRight.data
        node.right = removeFunc(node.right, minRight.data)
        return node
      }
    } 
  }

  

  
}

module.exports = {
  BinarySearchTree
};