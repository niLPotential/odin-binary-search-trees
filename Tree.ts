import { Node } from "./Node.ts";
import { checkDuplicate, checkSorted } from "./utils.ts";

export class Tree {
  root: Node | null;

  constructor(arr: number[]) {
    this.root = buildTree(arr);
  }

  insert(value: number) {
    let node = this.root;

    while (node !== null) {
      if (value < node.data) {
        if (node.left !== null) {
          node = node.left;
        } else {
          const newNode = new Node(value);
          node.left = newNode;
          return;
        }
      } else if (value > node.data) {
        if (node.right !== null) {
          node = node.right;
        } else {
          const newNode = new Node(value);
          node.right = newNode;
          return;
        }
      } else {
        return; // Do nothing when a duplicate is inserted
      }
    }
  }
}

function buildTree(arr: number[]) {
  if (arr.length === 0) {
    return null;
  }
  if (!checkSorted(arr)) {
    arr.sort((a, b) => a - b);
    arr = arr.filter(checkDuplicate);
  }

  const mid = Math.floor(arr.length / 2);
  const root = new Node(arr[mid]);

  root.left = buildTree(arr.slice(0, mid));
  root.right = buildTree(arr.slice(mid + 1));

  return root;
}
