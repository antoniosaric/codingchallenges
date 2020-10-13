// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
    // 1-1
    // 2-3
    // 3-5
    // 4-7
    // 5-9
    var  hash  = 1;
    for( var i = 1; i <= n; i++ ){
        var string = '';
        var sides = ( ( n + n - 1 ) -  hash  ) / 2;
        string += ' '.repeat( sides ) + '#'.repeat( hash ) + ' '.repeat( sides );
        console.log(string);
         hash  =  hash + 2;
    }

}

module.exports = pyramid;
