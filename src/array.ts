export {};

let numbers: number[] = [1,2,3];
console.log(numbers);

let numbers2: Array<number> = [4,5,6];
console.log(numbers2);

let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
console.log(strings2);

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
console.log(strings);

let dim2: Array<Array<number>> = [
  [50, 100],
  [150, 300]
];
console.log(dim2);

let dim22: number[][] = [
  [1,2],
  [3,4]
];
console.log(dim22);

let h: (string|number|boolean)[] = [1,false, 'Japan'];
console.log(h);

let h2: Array<string|number|boolean> = [1, false, 'Japan'];
console.log(h2);