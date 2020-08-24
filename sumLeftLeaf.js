/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
 this.sum = 0;
 const res = travel(root);
 return this.sum;
};


function travel(root) {
    if(root != null) {
        if(root.left && root.left.left == null && root.left.right == null) {
            this.sum += root.left.val;
        }
        travel(root.left);
        travel(root.right);
    }
}
