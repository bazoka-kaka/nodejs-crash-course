class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} y.o.`);
  }
}

module.exports = Person;
