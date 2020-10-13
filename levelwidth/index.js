// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {


    // the string 's' will work as a stopper to tell
    // our counter that we are at the end of a level
    const arr = [root, 's'];
    const counters = [0];

    // we want to stop looping though our array when
    // the last value is 's'
    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {

            // add a new 0 to signify a new level
            counters.push(0)
            arr.push('s')

        } else {

            arr.push(...node.children);
            counters[counters.length - 1]++;

        }

    }

    return counters;
}

module.exports = levelWidth;
