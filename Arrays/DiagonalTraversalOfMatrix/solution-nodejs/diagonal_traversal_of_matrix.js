// https://www.hackerrank.com/contests/smart-interviews/challenges/si-diagonal-traversal-of-matrix

/**
 * Find the diagonal elements sum of given matrix
 * @param {Array} matrix 
 */

function diagonalTraversalOfMatrix(matrix) {
    let sumOfDiagonalElements = [];
    let N = matrix.length;

    // Upper triangle traversal
    for(let k=N-1; k >= 0; k--) {
        let diagonalSum = 0;
        for(let i=0, j = k; i < N && j < N; i++, j++) {
            diagonalSum += parseInt(matrix[i][j]);
        }
        sumOfDiagonalElements.push(diagonalSum);
    }
    // Lower triangle traversal
    for(let k=1; k < N; k++) {
        let diagonalSum = 0;
        for(let i=k, j = 0; i < N && j < N; i++, j++) {
            diagonalSum += parseInt(matrix[i][j]);
        }
        sumOfDiagonalElements.push(diagonalSum);
    }
    return sumOfDiagonalElements;
}

function processData(input) {
    // Enter your code here
    // Break input with \n let say inputArray
    const inputArray = input.split("\n");
    // Number of test cases T = inputArray[0]
    let T = inputArray[0];
    // Loop until we reach number of test cases
    let nIndex = 1;
    while (T-- && inputArray[nIndex] != "") {
        // get number of elements N = inputArray[nIndex]
        let N = parseInt(inputArray[nIndex]);
        let elementIndex = nIndex;
        nIndex += N+1;
        let matrix = [];
        while (N--) {
            // Break with space and insert into array
            let elements = inputArray[++elementIndex].trim().split(" ");
            matrix.push(elements);
        }
        // Find diagonal sum
        const sumOfDiagonalElements = diagonalTraversalOfMatrix(matrix);
        // Print the result
        console.log(sumOfDiagonalElements.join(" "), "");
    }
}

// input
const input = "4\n3\n-5 0 4 \n2 8 -6 \n3 7 1 \n1\n-4 \n2\n5 -2 \n-4 1 \n6\n-2 -3 -6 -5 50 3 \n8 7 10 -5 -3 30 \n6 3 70 9 -20 -7 \n-9 9 -6 7 3 2 \n-1 7 7 6 -4 3 \n8 5 6 -9 40 8";

processData(input);