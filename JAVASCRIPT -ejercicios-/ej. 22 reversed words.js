/* 

Reversed Words

Complete the solution so that it reverses all of the words within the 
string passed in.

*/

function reverseWords(str) {
    return str.split(' ').map(function(word) {
        return word.split('').reverse().join('');
    }).join(' ');
}