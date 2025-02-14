/*
========================================
📌 TypeScript Chapter 2: Interfaces & Types
========================================
This file contains structured and well-documented examples 
for understanding Interfaces & Types in TypeScript.
========================================
*/

// 1️⃣ Understanding Interfaces
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
  }
  
  const user1: User = {
    id: 1,
    name: "Alice",
  };
  
  console.log("User 1:", user1);
  
  // 2️⃣ Extending Interfaces
  interface Person {
    name: string;
    age: number;
  }
  
  interface Employee extends Person {
    jobTitle: string;
  }
  
  const employee: Employee = {
    name: "Bob",
    age: 30,
    jobTitle: "Software Engineer",
  };
  
  console.log("Employee:", employee);
  
  // 3️⃣ Understanding Type Aliases
  type ID = string | number;
  
  type Product = {
    id: ID;
    name: string;
    price: number;
  };
  
  const product: Product = {
    id: "A123",
    name: "Laptop",
    price: 1200,
  };
  
  console.log("Product:", product);
  
  // 4️⃣ Key Differences Between Interfaces & Type Aliases
  // Demonstrating Type Aliases for complex structures
  type Point2D = {
    x: number;
    y: number;
  };
  
  type Point3D = Point2D & { z: number }; // Combining types
  
  const point3D: Point3D = { x: 1, y: 2, z: 3 };
  console.log("3D Point:", point3D);
  
  // 5️⃣ Using Interfaces & Types in Functions and Classes
  
  // Function using an Interface
  interface Logger {
    (message: string): void;
  }
  
  const logMessage: Logger = (msg) => console.log("Log:", msg);
  logMessage("Hello, TypeScript!");
  
  // Class implementing an Interface
  interface Animal {
    name: string;
    makeSound(): void;
  }
  
  class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    makeSound() {
      console.log("Woof!");
    }
  }
  
  const myDog = new Dog("Buddy");
  myDog.makeSound();
  