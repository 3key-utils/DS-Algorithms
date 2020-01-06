// Brute force solution
// Time complexity O(n^2)
function findSolution(inputArray = [], K) {
    let subArrayCount = 0;
    inputArray.forEach((element, index) => {
        let currentSum = element;
        // Current element may itself equals to given number
        if (currentSum === K) {
            ++subArrayCount;
        }
        inputArray.slice(index + 1).forEach(insideElement => {
            currentSum += insideElement;
            // Check current sum of elements equals to given number
            if (currentSum === K) {
                ++subArrayCount;
            }
        });
    });
    return subArrayCount;
}

// const inputArray = [10, 2, -2, -20, 10];
// const K = -10;
const inputArray = [9, 4, 20, 3, 10, 5];
const K = 33;

const output = findSolution(inputArray, K);

console.log(output);