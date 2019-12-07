export const solve = (x, y) => {
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  let point = 0;
  if (radius <= 10) {
    point = 1;
  }
  if (radius <= 5) {
    point = 5;
  }
  if (radius <= 1){
    point = 10;
  }
  return point;
};
