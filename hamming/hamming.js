export const compute = (strand1, strand2) => {
  let hammingDistance = 0
  let i = 0;
  if (strand1.length === strand2.length) {
    while( i <= strand1.length) {
      if(strand1[i] !== strand2[i]){
        hammingDistance += 1;
      }
      i += 1;
    }
    return hammingDistance;
  } else {
    if(!strand1) {
      throw new Error('left strand must not be empty');
    }
    if (!strand2) {
      throw new Error('right strand must not be empty');
    }  
    throw new Error('left and right strands must be of equal length');
  }
};
