// Note: Assume given input number will be perfect square

/**
 * Solution: 1
 * Traverse from i: 0 to n and check i is square root of n
 * Time Complexity: O(n)
 */
function squareRootFunction1(n) {
    let i = 1;
    while (true) {
        if (i * i === n) {
            return i;
        }
        i++;
    }
}

/**
 * Solution: 2
 * Using binary search concept and two pointer approach
 * Time Complexity: O(nlog(n))
 * Space Complexity: O(1) 
 */
function squareRootFunction2(n) {
    // Base functionality
    if (n === 1) return 1;

    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (mid * mid === n) {
            return mid;
        }
        if (mid * mid < n) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

const n = 64;
console.log('Solution 1: ', squareRootFunction1(n));

console.log('Solution 2: ', squareRootFunction2(n));
