/* Find the Remainder */

function remainder(n, m) {
    let result = 0;
    if (n > m) {
        result = n % m;
    } else {
        result = m % n;
    }
    return result
}