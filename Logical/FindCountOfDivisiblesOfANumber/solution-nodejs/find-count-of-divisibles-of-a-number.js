// N = 18
// count = 6 => 1, 2, 3, 6, 9, 18

/**
 * Solution 1:
 * Loop through 1 to N and check whether number is a divisor of N or not.
 * Time Complexity: O(n)
 * Space complexity: O(1)
 */
function countDivisiblesSol1(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
};

/**
 * Solution 2:
 * When a number is divisor of n then n / i also a divisor
 */
function countDivisiblesSol2(n) {
    console.log('n', n);
    let count = 0;
    let i = 1;
    while (i <= n / i) {
        if (n % i === 0) {
            if (i * i === n) {
                count += 1;
            } else {
                count += 2;
            }
        }
        i++;
    }
    return count;
}

const n = 100;
console.log('Solution 1: ', countDivisiblesSol1(n));
console.log('Solution 2: ', countDivisiblesSol2(n));
