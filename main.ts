import { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { Tree } from "./Tree.ts";

const arr = generateRandomArr(100);
const tree = new Tree(arr); // 1
assert(tree.isBalanced()); // 2 true

console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder()); // 3

// 4
for (let i = 100; i < 150; i++) {
  tree.insert(i);
}

assert(!tree.isBalanced()); // 5 false
tree.rebalance(); //6
assert(tree.isBalanced()); // 7 true

console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder()); // 8

function generateRandomArr(n: number) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  // Fisher–Yates shuffle
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
