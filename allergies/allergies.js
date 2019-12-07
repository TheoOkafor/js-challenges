export class Allergies {
  constructor(score) {
    this.sampleAllergies = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats'
    };
    this.score = score;
    this.allergies = [];
    let i = 1;
    while (i <= 128) {
      if(this.score & i) {
        this.allergies.push(this.sampleAllergies[i]);
      }
      i *= 2;
    }
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergy) {
    return this.allergies.includes(allergy);
  }
}
