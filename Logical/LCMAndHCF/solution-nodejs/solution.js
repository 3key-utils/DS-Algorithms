// Basic Relation between LCM and HCF of A, B
// LCM * HCF = A * B

function findLCM(A, B, HCF) {
    // LCM * HCF = A * B
    // LCM = (A * B) / HCF
    return (A * B) / HCF;
}

function findHCF(A, B) {
    // Base case
    if (B == 0) return A;
    return findHCF(B, A % B);
}

function swap(A, B) {
    if (A < B) {
        A = A + B;
        B = A - B;
        A = A - B;
    }
    return { A, B };
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
        let [A, B] = inputArray[nIndex++].trim().split(" ").map(element => parseInt(element));
        // Swap the numbers if required
        ({ A, B } = swap(A, B));

        const HCF = findHCF(A, B);        
        const LCM = findLCM(A, B, HCF);
        
        console.log(`${LCM} ${HCF}`);
    }
};

const input = "4\n4 710\n13 1\n6 4\n605904 996510762\n";

processData(input);

