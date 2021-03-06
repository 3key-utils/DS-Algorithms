// https://www.hackerrank.com/contests/smart-interviews/challenges/si-rotation-of-matrix


/** 
 * Number of zeros of any number will have factor of 5
 * 
 * Explanation:
 * N = 121
 * 
 * 121//5 = 24
 * 121/25 = 4
 * 121/125 = 0
 * 
 * ====
 * 28
*/

function findTrailingZeros(N) {
    // Number of zeros of any number factorial will have factor of 5
    let div = 5;
    let count = 0;
    while(Math.floor(N/div) != 0) {
        count += Math.floor(N/div);
        div *= 5;
    }
    return count;
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
        let N = inputArray[nIndex++];
        const count = findTrailingZeros(N);
        console.log(count);
    }
};

const input = "6\n2\n5\n20\n30\n100\n121\n";
processData(input);
