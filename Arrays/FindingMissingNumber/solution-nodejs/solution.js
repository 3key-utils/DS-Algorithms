/**
 * Finding missing element of given array
 * Logic: We can check sum of all elements and sum of elements up to N+1, 
 * so missing number be expected sum - actual sum
 * Time complexity: O(n)
 * @param {Int} N Length of matrix
 * @param {Array} matrix Array
 */
function findMissingNumber(N, matrix) {
    let expectedSum = 0;
    let actualSum = 0;
    matrix.map((number, index) => {
        actualSum += number;
        expectedSum += (index+1);
    });
    // Expected sum will be with extra number
    expectedSum += (N + 1);
    return expectedSum - actualSum;
}

function processData(input) {
    // Enter your code here
    // Break input with \n let say inputArray
    const inputArray = input.split("\n");
    // Number of test cases T = inputArray[0]
    let T = inputArray[0];
    // Loop until we reach number of test cases
    let nIndex = 1;
    let testCasesCount = 1;
    while (T-- && inputArray[nIndex] != "") {
        // get number of elements N = inputArray[nIndex]
        let N = parseInt(inputArray[nIndex]);
        let matrix = inputArray[nIndex + 1].trim().split(" ").map((element) => parseInt(element));
        nIndex += 2;
        // Find missing number
        const missingNumber = findMissingNumber(N, matrix);
        // Print the results
        console.log(missingNumber);
    }
    
};

const input = "3\n8\n1 2 7 9 5 6 3 8\n7\n3 5 8 1 4 7 2\n10\n8 11 10 2 7 4 3 5 1 6\n";
processData(input);