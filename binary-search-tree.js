// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        // Your code here
        this.root = null;
    }

    insert(val, currentNode = this.root) {
        // Your code here
        let newNode = new TreeNode(val);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        //check if val is less than current node, insert node on the left
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            }
            else this.insert(val, currentNode.left)
        }
        //check if val is greater than current node, insert node on right
        else if (val > currentNode.val) {
            if (!currentNode.right) {
                currentNode.right = newNode;
            }
            else this.insert(val, currentNode.right)
        }
        return
    }
    search(val) {
        //check root
        if (!this.root.val) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode !== null) {
            if (val === currentNode.val) return true;
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            }
            else if (val > currentNode.val) {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
    preOrderTraversal(currentNode = this.root) {
        // Your code here
        //base case
        if (currentNode === null) {
            return;
        }
        console.log(currentNode.val)
        const left = this.preOrderTraversal(currentNode.left);
        const right = this.preOrderTraversal(currentNode.right);
        return
    }


    inOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) {
            return;
        }
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right);
        return
    }


    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) {
            return;
        }

        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val)
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        let queue = [];
        //check if root is empty
        if (!this.root) {
            return
        }
        //add root to our queue
        queue.push(this.root)
        while (queue.length !== 0) {
            //dequeue node, and print value
            let node = queue.shift()
            console.log(node.val);

            //add children of node
            if (node.left !== null) queue.push(node.left);

            if (node.right !== null) queue.push(node.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // your code here
        let stack = [];
        //check if root is empty
        if (!this.root) {
            return
        }
        //add root to our queue
        stack.push(this.root)
        while (stack.length !== 0) {
            //dequeue node, and print value
            let node = stack.pop()
            console.log(node.val);

            //add children of node
            if (node.left !== null) stack.push(node.left);

            if (node.right !== null) stack.push(node.right);
        }
    }
}

module.exports = { BinarySearchTree, TreeNode }
// Your code here
