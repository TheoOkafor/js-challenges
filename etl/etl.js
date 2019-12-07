//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldScores) => {
  const newScores = {}
  for (let [key, value] of Object.entries(oldScores)) {
    for (let letter of value) {
      const smallLetter = letter.toLowerCase();
      newScores[smallLetter] = Number(key);
    }
  }
  return newScores;
};
