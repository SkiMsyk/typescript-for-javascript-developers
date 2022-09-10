export {};

let profile1: object = { name: 'Ham' };
console.log(profile1);

profile1 = { birthYear: 1976 };
console.log(profile1);

let profile2: {
  name: string; 
  birthYear: number;
} = { name: 'Ham', birthYear: 0};
console.log(profile2);

profile2.birthYear = 1976;
console.log(profile2);
