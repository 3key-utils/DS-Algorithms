// Basic Relation between LCM and HCF of A, B
// LCM * HCF = A * B

function findHCF(A, B) {
    if (B === 0) return A;
    return findHCF(B, A % B);
}

function findLCM(A, B, HCF) {
    // A * B = LCM * HCF
    return (A * B) / HCF;
}

function processData(input) {
    input = input.split("\n");
    const T = Number(input.shift());
    for (let t = 0; t < T; t++) {
        let [A, B] = input.shift().trim().split(" ").map(Number);

        // Swap numbers if required, To make sure A < B always
        if (A < B) {
            A = A + B;
            B = A - B;
            A = A - B;
        }

        // HCF
        const hcf = findHCF(A, B);

        // LCM
        const lcm = findLCM(A, B, hcf);
        console.log(`${lcm} ${hcf}`);
    }
}

const input = "4\n4 710\n13 1\n6 4\n60590898488 1008880009000\n";

processData(input);

