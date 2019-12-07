class MineSweeper {
  annotate (input) {
    const t0 = performance.now();
    const result = input.map(
      (str, y) => str
        .split('')
        .map((char, x) => {
          if(char === ' ') {
            const counterMines = countMines(input, x, y)
            return counterMines ? counterMines : ' '
          } else {
            return char
          }
        })
        .join('')
    )
    const t1 = performance.now();
    console.log(t1 - t0);
    return result;
  }
}

export default MineSweeper;
