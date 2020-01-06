class BinarySearchTreeNode {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BinarySearchTreeNode(value);
    if(value < this.data) {
      if(this.left !== null) {
        this.left.insert(value);
      } else {
        this.left = node;
      }
    } else {
      if(this.right !== null) {
        this.right.insert(value);
      } else {
        this.right = node;
      }
    }
  }

  contains(value) {
    if (this.data === value) {
      return true;
    } else {
      if(value < this.data) {
        if(this.left !== null) {
          return this.left.contains(value);
        } else {
          return false;
        }
      } else {
        if(this.right !== null) {
          return this.right.contains(value);
        } else {
          return false;
        }
      }
    }
  }

  getMaxNode(root) {
    if(root.right === null) {
      return root;
    } else {
      root.getMaxNode(root.right);
    }
  }

  remove(value, root = this) {
    if (value === root.data) {
      if(root.right === null && root.left === null) {
        root = null;
      } else if (root.left === null) {
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      } else {
        let tempNode = root.getMaxNode(root.left);
        root.data = tempNode.data;
        root.left = tempNode.remove(tempNode.data, tempNode);
      }
      return root;
    } else if (value < root.data) {
      if (root.left !== null) root.left = root.remove(value, root.left);
      return root;
    } else {
      if (root.right !== null) root.right = root.remove(value, root.right);
      return root;
    }
  }
}


const myBST = new BinarySearchTreeNode(4);
myBST.insert(3);
myBST.insert(10);
myBST.insert(1);
myBST.insert(5);
myBST.insert(12);
myBST.insert(9);

console.log('1>>>>>>', myBST);
myBST.remove(4);
myBST.remove(10);
console.log('2>>>>>>', myBST);
