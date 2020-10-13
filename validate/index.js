// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

    if (!node) {
        return true; // We hit the end of the path
    }

    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
        return false; // current node's data doesn't satisfy the BST rules
    }

    // Continue to scan left and right
    return validate(node.left, min, node.data) && validate(node.right, node.data, max);

}

module.exports = validate;
