// https://www.hackerrank.com/contests/smart-interviews/challenges/si-rotation-of-matrix

function rotateMatrix(matrix) {
    /**
        00  01  02      20  10  00
        10  11  12      21  11  01
        20  21  22      22  12  02
     */
    let rotatedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let j = matrix.length;
        let elements = [];
        while (j--) {
            elements.push(matrix[j][i]);
        }
        rotatedMatrix.push(elements);
    }
    return rotatedMatrix;
}

function printMatrix(T, matrix) {
    console.log(`Test Case #${T}:`);
    matrix.forEach(element => {
        console.log(element.join(" "), "");
    });
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
        let elements = [];
        while (N--) {
            // Break with space and insert into array
            let matrix = inputArray[++elementIndex].trim().split(" ");
            elements.push(matrix);
        }
        // Rotate array with 90 degrees
        const rotatedMatrix = rotateMatrix(elements);
        // Print the rotated array
        printMatrix(testCasesCount++, rotatedMatrix);
    }
    
};

const input = "4\n1\n1\n2\n1 2\n4 3\n3\n1 2 3\n8 9 4\n7 6 5\n5\n-44 25 -52 69 -5 \n17 22 51 27 -44 \n-79 28 -78 1 -47 \n65 -77 -14 -21 -6 \n-96 43 -21 -20 90\n";
processData(input);
