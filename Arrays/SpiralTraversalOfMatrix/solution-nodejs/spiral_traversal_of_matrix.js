// https://www.hackerrank.com/contests/smart-interviews/challenges/si-spiral-traversal-of-matrix

function spiralRotateMatrix(matrix) {
    let rotatedMatrix = [];
    const n = matrix.length;
    const rotationsCount = Math.ceil(n / 2);

    for (let r = 0; r < rotationsCount; r++) {
        // Right
        let i = j = r;
        for(; j < n- r; j++) {
            rotatedMatrix.push(matrix[i][j]);
        }
        // Down
        ++i; --j;
        for(;i < n- r; i++) {
            rotatedMatrix.push(matrix[i][j]);
        }
        // Left
        --i; --j;
        for(;j >= r; j--) {
            rotatedMatrix.push(matrix[i][j]);
        }
        --i; ++j;
        // Up
        for(;i > r; i--) {
            rotatedMatrix.push(matrix[i][j]);
        }
    }
    return rotatedMatrix;
}

function printMatrix(T, matrix) {
    // console.log(`Test Case #${T}:`);
    console.log(matrix.join(" "), "");
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
        let elementIndex = nIndex;
        nIndex += N+1;
        let matrix = [];
        while (N--) {
            // Break with space and insert into array
            let elements = inputArray[++elementIndex].trim().split(" ");
            matrix.push(elements);
        }
        // Rotate array
        const rotatedMatrix = spiralRotateMatrix(matrix);
        // Print the rotated array
        printMatrix(testCasesCount++, rotatedMatrix);
    }
};

const input = "4\n1\n1\n2\n1 2\n4 3\n3\n1 2 3\n8 9 4\n7 6 5\n5\n-44 25 -52 69 -5 \n17 22 51 27 -44 \n-79 28 -78 1 -47 \n65 -77 -14 -21 -6 \n-96 43 -21 -20 90 ";
processData(input);
