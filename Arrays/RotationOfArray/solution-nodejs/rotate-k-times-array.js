// Array = [1, 3, 7, -1, 6, 9, 10]

/**
 * Solution: 1
 * Loop through the array and move elements left by one
 * Repeat above step K times
 * Time Complexity: O(n * k)
 * Space Complexity: O(1)
 */
function rotateArraySol1(arr, k) {
    let d = k % arr.length;
    while (d--) {
        const temp = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = temp;
    }
    return arr;
}


/**
 * Solution: 2
 * Copy into another array by required indices
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function rotateArraySol2(arr, k) {
  const tempArr = [];
  for(let i = 0; i < arr.length; i++) {
    tempArr[i] = arr[(i + k) % arr.length];
  }
  // Copying rotated array to original array
  arr = [...tempArr]
  return arr;
}

/**
 * Solution: 3
 * 1. Reverse entire array
 * 2. Reverse 0 -> k
 * 3. Reverse k + 1 -> n -1
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function rotateArraySol3(arr, k) {
  const n = arr.length;
  function rotateArray(arr, start, end) {
    while(start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // 1. Reverse entire array
  rotateArray(arr, 0, n - 1);
  // 2. Reverse 0 to k
  rotateArray(arr, 0, n - k - 1);
  // 3. Reverse k + 1, n - 1
  rotateArray(arr, n - k, n - 1);

  return arr;
}

const arr = [1, 3, 7, -1, 6, 9, 10];
const k = 3;

console.log('Solution 1', rotateArraySol1(arr, k));

const arr2 = [1, 3, 7, -1, 6, 9, 10];
console.log('Solution 2', rotateArraySol2(arr2, k));

const arr3 = [1, 3, 7, -1, 6, 9, 10];
console.log('Solution 3', rotateArraySol3(arr3, k));
