export const validate = (num) => {
  const number = num + '';
  const power = number.length;

  const result = number
    .split('')
    .reduce(((accum, item) => accum + Math.pow(Number(item), power)), 0);
  return(result === num);
}
