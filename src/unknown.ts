export {};

const f = (): number => 43;

let numberAny: any = f();
console.log(numberAny);

let numberUnknown: unknown = f();
console.log(numberUnknown);

let sumAny = numberAny + 10;
console.log(sumAny);

// 型的には計算の実行が保証されていない（できない場合がある）のでエラーになる
// let sumUnknown = numberUnknown + 10;

console.log(typeof numberUnknown);

if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
} else {
  console.log("numberUnkown is not number type");
}
