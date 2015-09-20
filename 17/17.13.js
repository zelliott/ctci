// TODO: Tough because no great BST structure...
function getTail(head) {
  var node = head;

  while (node.next !== undefined) {
    node = node.next;
  }

  return node;
}

function merge(left, node, right) {
  var tail = getTail(left);

  tail.next = node;
  node.prev = tail;

  node.next = right;
  right.prev = node;

  return left;
}

function convert(node) {

  if (node === null) {
    return null;
  }

  if (node.left === null && node.right === null) {
    return node;
  }

  var left = convert(node.left);
  var right = convert(node.right);

  return merge(left, node, right);
}

function bstToLL(root) {
  var left = convert(root.left);
  var right = convert(root.right);

  var list = merge(left, root, right);

  return list;
}

var tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 6,
      left: null,
      right: null
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: null,
      right: null
    },
    right: {
      value: 14,
      left: null,
      right: null
    }
  }
};

console.log(bstToLL(tree));
