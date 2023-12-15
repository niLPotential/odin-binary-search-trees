export class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  traverse(value: number) {
    if (value < this.value) {
      return this.left;
    } else if (value > this.value) {
      return this.right;
    } else {
      return this;
    }
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

  inOrder() {
    let queue: Node[] = [];

    if (this.left) {
      queue = queue.concat(this.left.inOrder());
    }
    queue.push(this);
    if (this.right) {
      queue = queue.concat(this.right.inOrder());
    }
    return queue;
  }

  preOrder() {
    let queue: Node[] = [];

    queue.push(this);
    if (this.left) {
      queue = queue.concat(this.left.preOrder());
    }
    if (this.right) {
      queue = queue.concat(this.right.preOrder());
    }
    return queue;
  }

  postOrder() {
    let queue: Node[] = [];

    if (this.left) {
      queue = queue.concat(this.left.postOrder());
    }
    if (this.right) {
      queue = queue.concat(this.right.postOrder());
    }
    queue.push(this);
    return queue;
  }

  height() {
    let leftHeight = 0;
    let rightHeight = 0;

    if (this.left) {
      leftHeight = this.left.height() + 1;
    }
    if (this.right) {
      rightHeight = this.right.height() + 1;
    }
    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

  isBalanced() {
    let leftHeight = 0;
    let rightHeight = 0;

    if (this.left) {
      leftHeight = this.left.height() + 1;
    }
    if (this.right) {
      rightHeight = this.right.height() + 1;
    }

    return Math.abs(leftHeight - rightHeight) <= 1;
  }
}
