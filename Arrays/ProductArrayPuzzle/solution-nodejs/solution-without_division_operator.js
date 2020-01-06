// Without using division operator

/**
 * Find the solution
 * Time complexity will be O(n)
 * @param {Array} arr Input array
 */
function findSolution(arr = []) {

    // Consider two arrays left[] and right[]
    // Which holds product of elements to arr[i], 
    // i.e left side product of arr[i] to left[i]
    // right side product of arr[i] to right[i]
    // prod[i] = left[i] * right[i]

    let left = [];
    // Left most element of left array will be 1
    left[0] = 1;

    let right= [];
    // Right most element of right array will be 1
    right[arr.length - 1] = 1;

    for (let index = 1; index < arr.length; index++) {
        left[index] = left[index - 1] * arr[index - 1];
    }

    for (let index = arr.length - 2; index >= 0; index--) {
        right[index] = right[index + 1] * arr[index + 1];
    }
    
    // Loop through each element and prod[i] = left[i] * right[i]
    const prod = arr.map((element, index) => left[index] * right[index]);

    // Return the product array
    return prod;
}

// Input
const arr = [10, 3, 5, 6, 2];
const output = findSolution(arr);

// Print Output
console.log(output);
