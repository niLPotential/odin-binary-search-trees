import { Node } from "./Node.ts";
import { checkDuplicate, checkSorted } from "./utils.ts";

export class Tree {
  root: Node | null;

  constructor(arr: number[]) {
    this.root = buildTree(arr);
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
