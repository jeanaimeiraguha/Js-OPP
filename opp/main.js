// OOP Concepts in JavaScript with Code ExamplesOOP Concepts in JavaScript with Code Examples

// What is OOP?OOP stands for Object-Oriented Programming. It is a programming paradigm that uses "objects" to design software. Objects can contain data in the form of fields (often known as attributes or properties) and code in the form of procedures (often known as methods).
// OOP allows for code reusability, modularity, and a clear structure, making it easier to manage larger codebases.
// Key Concepts of OOP:
// 1. Classes and Objects
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}