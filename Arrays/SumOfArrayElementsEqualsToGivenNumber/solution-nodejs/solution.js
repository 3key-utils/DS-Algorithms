// Time Complexity O(n^2)
function findElementsSumEqualsToGivenNumber(K, matrix) {
    let hasElements = false;
    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];
        for (let j = index + 1; j < matrix.length; j++) {
            const another_element = matrix[j];
            if (K == element + another_element) {
                hasElements = true;
                break;
            }
        }
        if (hasElements) break;
    }
    return hasElements;
}

// Another solution will be using has map
// Time Complexity will O(n)
// But extra space for hash will be used here
function findTwoElementsUsingHash(K, matrix) {
    // Define hash map using simple object
    let hash = {};
    let hasElements = false;
    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];
        // K = element + another_element
        // another_element = K - element
        const another_element = K - element;
        // Check that another element is found in hash
        if (another_element in hash) {
            // If found return true
            hasElements = true;
            break;
        }
        // Otherwise add this new element to hash map and continue
        hash[element] = 1;
    }
    return hasElements;
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
        let [N, K] = inputArray[nIndex].trim().split(" ").map((element) => parseInt(element));
        let matrix = inputArray[nIndex + 1].trim().split(" ").map((element) => parseInt(element));
        nIndex += 2;
        // Check if any two numbers sum is matching with given number
        const result = findElementsSumEqualsToGivenNumber(K, matrix);
        const result2 = findTwoElementsUsingHash(K, matrix);
        // Print the results
        console.log(`Test Case #${testCasesCount++}`, result, result2);
    }
    
};

const input = "2\n4 18\n10 15 3 7\n3 -10\n4 5 -16\n";
processData(input);