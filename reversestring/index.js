// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var array = str.split("");
    var rev_array = array.reverse();
    var reverse_string = rev_array.join("");
    return reverse_string;
}

module.exports = reverse;
