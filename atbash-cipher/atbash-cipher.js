
  const { performance } = require('perf_hooks');
  
export const encode = (sentence) => {
  const t0 = performance.now();
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';

  let cipherWord = '';
  let count = 0;
  sentence = sentence.toLowerCase().replace(/[^a-z0-9_-]/g, '');
  for (let item of sentence) {
    let charIndex = letters.indexOf(item);
    const cipherLetter = charIndex >= 0 ? cipher[charIndex] : item;
    if (count === 5){
      cipherWord += ` ${cipherLetter}`;
      count = 1;
    } else {
      cipherWord += cipherLetter;
      count += 1;
    }
  }

  const t1 = performance.now();
  console.log(t1-t0);

  return cipherWord;
};
