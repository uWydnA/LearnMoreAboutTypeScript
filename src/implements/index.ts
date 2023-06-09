interface UserInfo {
  name: string;
  age: number;
  is18: boolean;
}

class YoungUserInfo implements UserInfo {
  name: string;
  age: number;
  is18: boolean;
  constructor({ name, age, is18 }: UserInfo) {
    this.name = name;
    this.age = age;
    this.is18 = is18;
  }
}

const youngUser = new YoungUserInfo({ name: "andy", age: 20, is18: true });

interface Crazy {
  new: () => {
    hello: number;
  };
  name: string;
}

class CrazyClass implements Crazy {
  name: string;
  constructor() {
    this.name = "cray";
  }
  new() {
    return { hello: 123 };
  }
}

const crazy = new CrazyClass();
crazy.new();

export { crazy, youngUser };
