const returnRoman = (number, lowest, center, upper) => {
  switch(number){
    case 1:
      return lowest;
    case 2:
      return `${lowest}${lowest}`;
    case 3:
      return `${lowest}${lowest}${lowest}`;
    case 4:
      return `${lowest}${center}`;
    case 5:
      return center;
    case 6:
      return `${center}${lowest}`;
    case 7:
      return `${center}${lowest}${lowest}`;
    case 8:
      return `${center}${lowest}${lowest}${lowest}`;
    case 9:
      return `${lowest}${upper}`;
    default:
      return '';
  }
}

export const toRoman = (num) => {
  const numStr =  num + '';
  let romanNum = '';
  for(let i in numStr) {
    const index = numStr.length - 1 - i;
    const number = Number(numStr[i]);
    if(index === 0){
      romanNum += returnRoman(number, 'I', 'V', 'X');
    }
    if(index === 1){
      romanNum += returnRoman(number, 'X', 'L', 'C');
    }
    if(index === 2){
      romanNum += returnRoman(number, 'C', 'D', 'M');
    }
    if(index === 3){
      romanNum += returnRoman(number, 'M', 'N', 'O');
    }
  }
  return romanNum;
};
