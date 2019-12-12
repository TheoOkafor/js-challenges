export class InputCell {
  constructor(value) {
    this.value = value;
    this.computeCells = []
  }

  addComputeCell(computeCell) {
    this.computeCells.push(computeCell);
    this.computeCells = Array.from(new Set(this.computeCells));
  }

  setValue(value) {
    this.value = value;
    this.computeCells.forEach(computeCell => {
      computeCell.reCompute();
    });
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.computeFn = fn;
    this.callbacks = [];
    this._value = this.computeFn(this.inputCells);
    inputCells.forEach(inputCell => {
      inputCell.addComputeCell(this);
    });
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  reCompute() {
    let oldValue = this.value;
    this.value = this.computeFn(this.inputCells);
    if (oldValue !== this.value) {
      this.callbacks.forEach(callback => {
        callback.storeValue(this);
      });
    }
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    this.callbacks = this.callbacks.filter((el) => el !== cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this._values = []
  }

  storeValue(cell) {
    this._values.push(this.fn(cell))
  }

  get values() {
    return this._values;
  }
}
