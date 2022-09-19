export {};

let bmi = function (h: number, w: number): number {
  return w / (h * h);
};

let bmi2: (h: number, w: number) => number = function (
  h: number,
  w: number
): number {
  return w / (h * h);
};

// (function (h = 1.78, w = 86): void {
//   console.log(w / (h * h));
// })();

console.log(bmi(1.78, 86));
