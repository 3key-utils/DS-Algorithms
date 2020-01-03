function printChar(c, n) {
    for (let index = 0; index < n; index++) {
        process.stdout.write(c);
    }
}

function processData(input) {
    //Enter your code here
    inputArray = input.split('\n');
    for (let index = 1; index < inputArray.length - 1; index++) {
        const patternSize = inputArray[index];
        process.stdout.write("Case #"+index+":\n");
        for (let sizeIndex = 0; sizeIndex < patternSize; sizeIndex++) {
            printChar(" ", patternSize - sizeIndex - 1);
            printChar("*", sizeIndex + 1);
            printChar("\n", 1);
        }
    }
}

_input = "4\n2\n1\n5\n10\n"
processData(_input);