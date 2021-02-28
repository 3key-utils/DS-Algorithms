function processData(input) {
    //Enter your code here
    input = input.split("\n");
    const T = Number(input.shift());
        
    // Helper function to read row as array elements
    const readRow = (rowString) => rowString.trim().split(" ").map(Number);
    
    for(let t = 0; t < T; t++) {
        // Read A
        const [N1, M1] = readRow(input.shift());
        const A = [];
        for (let n1 = 0; n1 < N1; n1++) {
            A.push(readRow(input.shift()));
        }
        
        // Read B
        const [N2, M2] = readRow(input.shift());
        const B = [];
        for (let n2 = 0; n2 < N2; n2++) {
            B.push(readRow(input.shift()));
        }
        
        // Compute - Product Matrix = A * B
        const C = computeProductMatrix(A, B, N1, M1, N2, M2);
        printArray(C);
    }
    
    function computeProductMatrix(A, B, N1, M1, N2, M2) {
        const C = [];
        for (let i = 0; i < N1; i++) {
            C[i] = [];
            for (let j = 0; j < M2; j++) {
                C[i][j] = 0;
                for (let k = 0; k < M1; k++) {
                   C[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return C;
    }
    
    function printArray(arr) {
        arr.map(element => console.log(element.join(" ")));
    }
}

// 618 Rank in Smart Interviews for HR