export {};

let bmi: (h: number, w: number, p?: boolean) => number = (
  h: number,
  w: number,
  p?: boolean
): number => {
  let bmi_value: number = w / (h * h);
  if (p) {
    console.log(bmi_value);
  }
  return bmi_value;
};

bmi(1.68, 68);
bmi(1.68, 68, true);
bmi(1.68, 68, false);
