// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    var number_of_loops = array.length/size;
    var temp_array = [];

    number_of_loops % 1 !== 0  ? float = true : float = false;
    number_of_loops = Math.floor( number_of_loops );

    for( let i = 1; i <= number_of_loops ; i++ ){
        temp_array.push( array.splice( 0, size ) );
    }

    !!float ? temp_array.push( array ) : null;

    return temp_array;
}

module.exports = chunk;
