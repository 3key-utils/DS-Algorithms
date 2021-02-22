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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const results = [];
    
    const lot = (root, level) => {
        // Base condtion
        if (!root) return;
        
        // Logic
        if (results[level]) {
            results[level].push(root.val);
        } else {
            results[level] = [root.val];
        }
        
        lot(root.left, level + 1);
        lot(root.right, level + 1);
    };
    
    lot(root, 0);
    
    // Zigzag - Here need to reverse the odd level results
    return results.map((b, i) => i % 2 ? b.reverse() : b);
};

const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    }
};

console.log(zigzagLevelOrder(root));