// With using division operator


/**
 * Find the solution
 * Time complexity O(n)
 * @param {Array} arr Input array
 */
function findSolution(arr = []) {
    // First find the product of the elements of array
    const product = arr.reduce((p, element) => p * element, 1);
    
    // Loop through each element and divide product with arr[i]
    const prod = arr.map(element => product/element);

    // Return the product array
    return prod;
}

// Input
const arr = [10, 3, 5, 6, 2];
const output = findSolution(arr);

// Print Output
console.log(output);
