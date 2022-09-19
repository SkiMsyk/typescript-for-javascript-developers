export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile() {
    return `name:${this.name}, age:"it's not accessible.", nationality: ${this.nationality}`;
  }
}

let taro_robot = new Android("Taro", 30, "Japan");

let taro = new Person("Taro", 30, "Japan");
console.log(taro.name);
// console.log(taro.age);
// console.log({ taro });
console.log(taro_robot.profile());
