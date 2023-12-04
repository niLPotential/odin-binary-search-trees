class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}

function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (!checkSorted(arr)) {
    arr.sort((a, b) => a - b);
    arr = arr.filter(checkDuplicate);
    console.log(arr);
  }

  const mid = Math.floor(arr.length / 2);
  const root = new Node(arr[mid]);

  root.left = buildTree(arr.slice(0, mid));
  root.right = buildTree(arr.slice(mid + 1));

  return root;
}

function checkDuplicate(value, index, array) {
  return index === 0 || value !== array[index - 1];
}

function checkSorted(arr) {
  return arr.every(
    (value, index, array) => index === 0 || value > array[index - 1]
  );
}

export function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}
