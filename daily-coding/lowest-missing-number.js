const numbers1 = [3, 4, -1, 1];
const numbers2 = [1, 2, 0];
const numbers3 = [-2, 1, 2, 0, 11, 10];

const getLowestMissingNumber = (numArray) => {
  const sortedNums = numArray.sort((a, b) => a - b);
  let missingNumber = sortedNums[sortedNums.length - 1] + 1;
  sortedNums.forEach((num, index) => {
    if(sortedNums[index+1] - num > 1) {
      missingNumber = num + 1;
      return missingNumber;
    }
  });
  return missingNumber;
}

console.log(getLowestMissingNumber(numbers3));
