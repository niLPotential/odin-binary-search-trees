export class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  removeNode(value: number) {
    if (value === this.value) {
      // no children
      if (!this.left && !this.right) return null;
      // single child to the right
      if (!this.left) return this.right;
      // single child to the left
      if (!this.right) return this.left;
      // two children
      const replacement = this.right.getMin();
      this.value = replacement;
      this.right = this.right.removeNode(replacement);
    } else if (value < this.value) {
      this.left = this.left ? this.left.removeNode(value) : null;
    } else {
      this.right = this.right ? this.right.removeNode(value) : null;
    }
    return this;
  }

  getMin() {
    if (!this.left) return this.value;
    let current = this.left;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }
}
