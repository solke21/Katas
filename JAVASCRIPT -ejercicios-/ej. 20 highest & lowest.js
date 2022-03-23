/* Highest and Lowest

In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

*/



function highAndLow(numbers) {
    let nums = numbers.split(" ");
    let numsArray = []
    for (let i = 0; i < nums.length; i++) {
        numsArray.push(parseInt(nums[i]))
    }
    numsArray.sort(function(a, b) {
        return a - b
    })

    let resultado = numsArray[numsArray.length - 1] + " " + numsArray[0]
    return resultado
}