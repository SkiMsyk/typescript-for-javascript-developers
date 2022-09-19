export {};

let bmi: (h: number, w: number) => number = (h: number, w: number): number =>
  w / (h * h);

console.log(bmi(1.78, 86));
