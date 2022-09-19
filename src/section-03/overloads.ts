export {};

// signature
function double(value: number): number;
function double(value: string): string;

function double(v: any): any {
  let res: any = v;
  if (typeof v === "string") {
    res += v;
  } else if (typeof v === "number") {
    res = v * 2;
  }
  return res;
}

console.log(double(10));
console.log(double("Hello"));
