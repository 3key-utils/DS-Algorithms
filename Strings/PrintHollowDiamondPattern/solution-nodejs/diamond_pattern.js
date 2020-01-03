/*
n = 15
       *            (15-1)/2 - 0 = 7    *   0 = 2*0 - 1
      * *           (15-1)/2 - 1 = 6    *   1 = 2*1 - 1
     *   *          (15-1)/2 - 2 = 5    *   3 = 2*2 - 1
    *     *         (15-1)/2 - 3 = 4    *   5 = 2*3 - 1
   *       *        (15-1)/2 - 4 = 3    *   7 = 2*4 - 1
  *         *       (15-1)/2 - 5 = 2    *   9 = 2*5 - 1
 *           *      (15-1)/2 - 6 = 1    *   11 = 2*6 - 1
*             *     (15-1)/2 - 7 = 0    *   13 = 2*7 - 1
 *           *      (15-1)/2 - 8 = -1   *   11 = 2*(7-1) - 1
  *         *       (15-1)/2 - 9 = -2   *   9 = 2*(7-2) - 1
   *       *        (15-1)/2 - 10 = -3  *   7 = 2*(7-3) - 1
    *     *         (15-1)/2 - 11 = -4  *   5 = 2*(7-4) - 1
     *   *          (15-1)/2 - 12 = -5  *   3 = 2*(7-5) - 1
      * *           (15-1)/2 - 12 = -6  *   1 = 2*(7-6) - 1
       *            (15-1)/2 - 14 = -7  *   0 = 2*(7-7) - 1

*/
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
        const patternSizeIntermediate = (patternSize - 1)/2;
        for (let sizeIndex = 0; sizeIndex < patternSize; sizeIndex++) {
            const spacesCount = Math.abs(patternSizeIntermediate - sizeIndex);
            printChar(" ", spacesCount);
            printChar("*", 1);
            const rightSpacesCount = (sizeIndex <= patternSizeIntermediate) ? ( 2 * sizeIndex - 1) : ( 2 * (patternSizeIntermediate - spacesCount) -1 );
            printChar(" ", rightSpacesCount);
            if (rightSpacesCount > 0) {
                printChar("*", 1);
            }
            printChar("\n", 1);
        }
    }
}
_input = "4\n3\n7\n5\n15\n"
processData(_input);