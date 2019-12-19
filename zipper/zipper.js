//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const clone = obj => obj && JSON.parse(JSON.stringify(obj));

export class Zipper {
  constructor(tree, parent = null, focus = null) {
    this.tree = tree;
    this.parent = parent;
    this.focus = focus || tree;
  }

  static fromTree(tree) {
    const root = clone(tree)
    const zipper = new Zipper(root, null, root);
    return zipper;
  }

  toTree() {
    return this.tree;
  }

  value() {
    return this.focus.value;
  }

  left() {
    return this.focus.left
    ? new Zipper(this.tree, this, this.focus.left)
    : null;
  }

  right() {
    return this.focus.right
    ? new Zipper(this.tree, this, this.focus.right)
    : null;
  }

  up() {
    return this.parent;
  }

  setValue(value) {
    this.focus.value = clone(value);
    return this;
  }

  setLeft(tree) {
    this.focus.left = clone(tree);
    return this;
  }

  setRight(tree) {
    this.focus.right = clone(tree);
    return this;
  }
}
