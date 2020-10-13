// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [
//     [1, 2],
//     [4, 3] ]
//   matrix(3)
//     [
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5] ]
//  matrix(4)
//     [
//     [1,  2,  3,  4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9,  8,  7] ]
//  matrix(5)
//     [
//     [1,  2,  3,  4,  5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9] ]
//  matrix(6)
//     [
//     [1,  2,  3,  4,  5,  6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11] ]

function matrix(n) {
    // var return_array = [];

    // for( var i = 0; i < n; i++ ){
    //     var temp_array = new Array(n)
    //     return_array.push( temp_array.fill ( 0, 0, n ) );
    // }

    // var iteration = 1;
    // var count = 1;
    // var row_start = 0;
    // var row_end = n-1;
    // var col_start = 0;
    // var col_end = n-1;
    // while(  iteration < (n*2) ){

    //         for( var i = col_start; i < col_end; i++ ){
    //             return_array[row_start][i] = count;
    //             count++
    //         }
    //         iteration++;

    //         for( var i = row_start; i < row_end; i++ ){
    //             return_array[i][col_end] = count;
    //             count++
    //         }
    //         iteration++;

    //         for( var i = col_end; i > col_start; i-- ){
    //             return_array[row_end][i] = count;
    //             count++
    //         }
    //         iteration++;

    //         for( var i = row_end; i > row_start; i-- ){
    //             return_array[i][row_start] = count;
    //             count++
    //         } 
    //         iteration++;

    //         col_start++;
    //         row_start++;
    //         row_end--;
    //         col_end--;

    // }
    // if( n%2 != 0 ){
    //     var center = Math.floor(n/2);
    //     return_array[center][center] = n*n;
    // }
    // // console.log(return_array)
    // return return_array;
    const results = [];

    for( let i =0; i<n; i++){
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n - 1;
    while ( startColumn <= endColumn && startRow <= endRow ){

        for(let i = startColumn; i <= endColumn; i++ ){
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++ ){
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        for(let i = endColumn; i >= startColumn; i-- ){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        for(let i = endRow; i >= startRow; i-- ){
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    } 
        return results;

}

module.exports = matrix;
