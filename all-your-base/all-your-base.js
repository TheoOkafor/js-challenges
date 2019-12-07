/**
 * @description converts a number array to base ten
 *
 * @param {Array} numArray 
 * @param {Number} base 
 */
const toBaseTen = (numArray, base) => numArray.reduce(((accum, number, index) => {
  if (number >= base || number < 0) {
    throw new Error('Input has wrong format')
  }
  const exponent = numArray.length - 1 - index;
  const multiple = number * Math.pow(base, exponent);
  return accum + multiple;
}), 0);

/**
 * @description converts from base ten to any base
 *
 * @param {Number} num 
 * @param {Number} base 
 */
const fromTenToAnyBase = (num, base) => {
  let quotient = num;
  const result = num === 0 ? [0] : [];
  
  while (quotient !== 0) {
    const remainder = quotient % base;
    result.push(remainder);
    quotient = Math.floor(quotient / base);
  }
  return result.reverse();
}

export const convert = (numArray, fromBase, toBase) => {
  if (!fromBase || fromBase < 2 || !Number.isInteger(fromBase)) {
    throw new Error('Wrong input base');
  }
  if (!toBase || toBase < 2 || !Number.isInteger(toBase)) {
    throw new Error('Wrong output base');
  }
  if ((numArray.length > 1 && numArray[0] === 0) || numArray.length === 0){
    throw new Error('Input has wrong format');
  }
  const inBaseTen = toBaseTen(numArray, fromBase);
  const result = fromTenToAnyBase(inBaseTen, toBase);
  return result;
};
