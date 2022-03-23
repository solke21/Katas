/*

Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        // setup loop to go through array of given length
        if (arr[i] > 0) {
            // if arr[i] is greater than zero
            sum += arr[i];
            // add arr[i] to total
        }
    }
    return sum; // return total
}