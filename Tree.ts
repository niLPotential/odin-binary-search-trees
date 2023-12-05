import { Node } from "./Node.ts";
import { checkDuplicate, checkSorted } from "./utils.ts";

export class Tree {
  root: Node | null;

  constructor(arr: number[]) {
    this.root = this.buildTree(arr);
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
    let node = this.root;

    while (node !== null) {
      if (value < node.data) {
        // go left
        if (node.left !== null) {
          node = node.left;
        } else {
          const newNode = new Node(value);
          node.left = newNode;
          return;
        }
      } else if (value > node.data) {
        // go right
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

  delete(value: number) {
    let node = this.root;
    let prevNode = null;

    while (node !== null) {
      if (value < node.data) {
        // go left
        if (node.left !== null) {
          prevNode = node;
          node = node.left;
        } else {
          return; // node not found; do nothing
        }
      } else if (value > node.data) {
        //go right
        if (node.right !== null) {
          prevNode = node;
          node = node.right;
        } else {
          return; // node not found; do nothing
        }
      } else {
        // node found
        if (node.left === null && node.right === null) {
          // no children
          if (prevNode === null) {
            this.root = null;
          } else if (node.data < prevNode.data) {
            prevNode.left = null;
          } else {
            prevNode.right = null;
          }
        } else if (node.left === null) {
          // node has right child
          if (prevNode === null) {
            this.root = node.right;
          } else if (node.data < prevNode.data) {
            prevNode.left = node.right;
          } else {
            prevNode.right = node.right;
          }
        } else if (node.right === null) {
          // node has left child
          if (prevNode === null) {
            this.root = node.left;
          } else if (node.data < prevNode.data) {
            prevNode.left = node.left;
          } else {
            prevNode.right = node.left;
          }
        } else {
          // two children
          let successor = node.right;
          while (successor.left !== null) {
            successor = successor.left;
          }
          const tmp = successor.data;
          this.delete(successor.data);
          node.data = tmp;
        }
        return; // delete finished
      }
    }
  }
}
