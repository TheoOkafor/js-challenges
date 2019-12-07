const getSequence = (num) => {
  let sequence = [1];
  let tempStore = [];
  for (let i = 1; i <= num; i+=1) {
    let curr = sequence[0];
    let count = 0;
    let z = 0;
    while (z < sequence.length) {
      if(curr === sequence[z]) {
        count += 1;
      } else {
        tempStore.push(count);
        tempStore.push(curr);
        curr = sequence[z];
        count = 1;
      }
      if(z === sequence.length - 1) {
        tempStore.push(count);
        tempStore.push(curr);
        curr = sequence[z];
        count = 1;
      }
      z += 1;
    }
    
    sequence = tempStore;
    tempStore = [];
  }
  return sequence;
}
