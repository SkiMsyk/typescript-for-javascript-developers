export {};

type Mojiretsu = string;

const fooString: Mojiretsu = "This type is Mojiretsu";
console.log(fooString);

const example1 = {
  name: "Ham",
  age: 43,
};
console.log(example1);

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "Joe",
  age: 50,
};
console.log(example2);

type Profile2 = typeof example1; // 既にあるオブジェクトから型を流用する方法
