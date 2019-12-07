//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(strand) {
    const countArray = [0, 0, 0, 0];

    for(let nucleotide of strand.split('')){
      switch(nucleotide) {
        case 'A':
          countArray[0] += 1;
          break;
        case 'C':
          countArray[1] += 1;
          break;
        case 'G':
          countArray[2] += 1;
          break;
        case 'T':
          countArray[3] += 1;
          break;
        default:
          throw new Error('Invalid nucleotide in strand');
      }
    }
    return countArray.join(' ');
  }
}
