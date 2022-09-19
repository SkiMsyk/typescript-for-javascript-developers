export {};

function bmi(h: number, w: number): number {
  return w / (h * h);
}

console.log(bmi(1.78, 86));
