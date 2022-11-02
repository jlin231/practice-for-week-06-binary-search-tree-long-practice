const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode, min = Infinity) {
  if (rootNode === null) {
    return min;
  }
  if (rootNode.val < min) {
    min = rootNode.val;
  }
  return findMinBST(rootNode.left, min);
}

function findMaxBST(rootNode,max = -Infinity) {
  if (rootNode === null) {
    return max;
  }
  if (rootNode.val > max) {
    max = rootNode.val;
  }
  return findMaxBST(rootNode.right, max);
}

function findMinBT(rootNode) {
  let arr = [];

  if(!rootNode){
    return undefined;
  }
  //breath first
  
}

function findMaxBT(rootNode) {
  // Your code here
}

function getHeight(rootNode) {
  // Your code here
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);
console.log(findMinBST(bstRoot))


module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
