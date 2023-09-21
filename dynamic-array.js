class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = [];

    for (let i = 0; i < defaultSize; i++) {
      this.data[i] = undefined;
    }
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.length === this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
  }

  pop() {

    // Your code here
    let element = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;

    if (this.length > 0) {
      this.length--;
    }

    return element;
  }

  shift() {

    // Your code here
    const element = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    if (this.length > 0) {
      this.length--;
    }

    return element;
  }

  unshift(val) {

    // Your code here
    if (this.capacity === this.length) {
      this.resize();
    }

    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {

    // Your code here
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }

    return -1;
  }

  resize() {

    // Your code here
    this.capacity *= 2;
    const array = new Array(this.capacity);

    for (let i = 0; i < this.capacity; i++) {
      array[i] = this.data[i];
    }

    this.data = array;
  }

}


module.exports = DynamicArray;
