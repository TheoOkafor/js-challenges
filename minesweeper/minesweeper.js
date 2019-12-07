const { performance } = require('perf_hooks');

class MineSweeper {
  /**
   * @description checks whether the minefield has at least a mine.
   * @param { array } mineField
   * @returns { boolean }
   */
  hasMines(mineField) {
    let result = false;
    mineField.forEach(row => {
      if (row.includes('*')) {
        result = true;
        return;
      }
    });
    return result;
  }

  /**
   * @description this gets all the neighbours to a given item
   * an item is defined by its rowIndex and columnIndex
   *
   * @param { array } mineField
   * @param { number } rowIndex
   * @param { number } columnIndex
   *
   * @returns { string }
   */
  getAllNeighbours(mineField, rowIndex, columnIndex) {
    let neighbours = '';
    // defines the row upper boundary for a given item
    const rowUpperBoundary = rowIndex + 1 >= mineField.length
      ? mineField.length - 1
      : rowIndex + 1;

    // defines the row lower boundary for a given item
    const rowLowerBoundary = rowIndex - 1 >= 0 ? rowIndex - 1 : 0;

    // defines the column upper boundary for a given item
    const columnUpperBoundary = columnIndex + 1 >= mineField[0].length
      ? mineField[0].length - 1
      : columnIndex + 1;

    // defines the column lower boundary for a given item
    const columnLowerBoundary = columnIndex - 1 >= 0 ? columnIndex - 1 : 0;

    let i = rowLowerBoundary;
    while (i <= rowUpperBoundary) {
      let j = columnLowerBoundary;
      while (j <= columnUpperBoundary) {
        if (i !== rowIndex || j !== columnIndex) {
          neighbours += mineField[i][j];
        }
        j += 1;
      }
      i += 1;
    }

    return neighbours;
  }

   /**
   * @description this gets the number of mines near a given item
   * an item is defined by its rowIndex and columnIndex
   *
   * @param { array } mineField
   * @param { number } rowIndex
   * @param { number } columnIndex
   *
   * @returns { number }
   */
  countNearbyMines(mineField, rowIndex, columnIndex) {
    const neighbours = this.getAllNeighbours(mineField, rowIndex, columnIndex);
    
    const regexp = /[*]/g;
    const mines = neighbours.match(regexp) || [];
    return mines.length;
  }

  annotate(mineField) {
    const t0 = performance.now();
    const annotatedField = [];
    if (!this.hasMines(mineField)) {
      return mineField;
    }
    mineField.forEach((item, rowIndex) => {
      const row = item.split('');
      const newRow = row.map((str, columnIndex) => {
        let result = str;
        if (str !== '*') {
          const minesCount = this.countNearbyMines(mineField, rowIndex, columnIndex);
          result = minesCount > 0 ? minesCount : str;
        }
        return result;
      });
      annotatedField.push(newRow.join(''));
    });
    const t1 = performance.now();
    console.log('Call to annotate took ' + (t1 - t0) + ' milliseconds.');
    return annotatedField;
  }
}

export default MineSweeper;
