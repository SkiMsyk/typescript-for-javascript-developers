export {};

const reducer = (a: number, c: number) => {
  console.log({ a, c });
  return a + c;
};

[1, 2, 3, 4].reduce(reducer);

const sum: (...values: number[]) => number = (...values: number[]) => {
  let ans: number = 0;
  values.forEach((e: number): void => {
    ans += e;
  });
  return ans;
};

console.log(sum(1, 2, 3, 4, 5));
