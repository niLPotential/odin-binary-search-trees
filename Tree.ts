import { Node } from "./Node.ts";
import { checkDuplicate, checkSorted } from "./utils.ts";

export class Tree {
  root: Node | null;

  constructor(arr?: number[]) {
    this.root = arr ? this.buildTree(arr) : null;
  }

  buildTree(arr: number[]) {
    if (arr.length === 0) {
      return null;
    }
    if (!checkSorted(arr)) {
      arr.sort((a, b) => a - b);
      arr = arr.filter(checkDuplicate);
    }

    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1));

    return root;
  }

  insert(value: number) {
    if (!this.root) {
      const newNode = new Node(value);
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left; // go left
        } else {
          const newNode = new Node(value);
          current.left = newNode; // insert node on left
          return;
        }
      } else if (value > current.value) {
        if (current.right) {
          current = current.right; // go right
        } else {
          const newNode = new Node(value);
          current.right = newNode; // insert node on right
          return;
        }
      } else {
        return; // Do nothing when a duplicate is inserted
      }
    }
  }

  delete(value: number) {
    return value;
  }
}

// BinarySearchTree.prototype.removeNode = function (node, value) {
//   if (!node) {
//     return null;
//   }
//   if (value === node.value) {
//     // no children
//     if (!node.left && !node.right) return null;
//     // one child and it’s the right
//     if (!node.left) node.right;
//     // one child and it’s the left
//     if (!node.right) node.left;
//     // two kids
//     const temp = this.getMin(node.right);
//     node.value = temp;
//     node.right = this.removeNode(node.right, temp);
//     return node;
//   } else if (value < node.value) {
//     node.left = this.removeNode(node.left, value);
//     return node;
//   } else {
//     node.right = this.removeNode(node.right, value);
//     return node;
//   }
// };
