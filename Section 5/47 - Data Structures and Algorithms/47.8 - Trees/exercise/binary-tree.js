/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  getMaxDepth() {
    let left, right;

    if (this.left)  left = this.left.getMaxDepth();
    if (this.right) right = this.right.getMaxDepth();
    if(!this.left && !this.right) return 1;

    return left > right ? left + 1 : right + 1;
  }

   getMaxSum() {
    let left=0, right=0;

    if (this.left)  left = this.val + this.left.getMaxSum();
    if (this.right) right = this.val + this.right.getMaxSum();
    if(!this.left && !this.right) return this.val;

    if (left > right || left === right) {
      return left;
    } else {
      return right;
    }
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    } else if (this.root.left || this.root.right) {
      return 2;
    } else {
      return 1;
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }

    return this.root.getMaxDepth()
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
//     if(!this.root) return 0;
//
//     return this.root.val + this.root.getMaxSum();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
  if (!this.root) return null;

    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;

      if ((currentVal > lowerBound) && (currentVal < closest || closest === null)) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }


}

module.exports = { BinaryTree, BinaryTreeNode };
