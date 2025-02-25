# 📌 TypeScript Chapter 2: Interfaces & Types

## 🚀 Overview
In this chapter, we dive deep into **Interfaces & Types** in TypeScript, which are essential for defining the structure of objects, enforcing type safety, and improving code readability.

## 🔹 Key Topics
1. **Understanding Interfaces**
2. **Extending Interfaces**
3. **Understanding Type Aliases**
4. **Key Differences Between Interfaces & Type Aliases**
5. **Using Interfaces & Types in Functions and Classes**

---

## 📖 1. Understanding Interfaces
**Interfaces** in TypeScript define the structure of an object. They help in enforcing shape consistency across different objects.

### ✨ Example:
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user1: User = {
  id: 1,
  name: "Alice",
};
```

---

## 📖 2. Extending Interfaces
Interfaces can be extended to include additional properties, promoting reusability.

### ✨ Example:
```typescript
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
```

---

## 📖 3. Understanding Type Aliases
Type aliases allow you to define custom types that can include primitive types, unions, and more complex structures.

### ✨ Example:
```typescript
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
```

---

## 📖 4. Key Differences Between Interfaces & Type Aliases
| Feature            | Interface | Type Alias |
|-------------------|-----------|-----------|
| Extensibility    | ✅ Can extend other interfaces | ❌ Cannot extend, only combine |
| Merging Ability  | ✅ Supports declaration merging | ❌ Cannot merge |
| Usage            | 🚀 Best for object structures | 🛠️ Best for unions & complex types |

---

## 📖 5. Using Interfaces & Types in Functions and Classes
Interfaces and Type Aliases can be used to define function signatures and enforce class structure.

### ✨ Function Example:
```typescript
interface Logger {
  (message: string): void;
}

const log: Logger = (msg) => console.log(msg);
log("Hello, TypeScript!");
```

### ✨ Class Example:
```typescript
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
```

---

## 🎯 Summary
- **Interfaces** define object structure and can be extended.
- **Type Aliases** define custom types and support union types.
- **Use interfaces for objects/classes** and **type aliases for unions and primitives**.

🚀 Now, let's dive into **practical coding exercises** for Interfaces & Types in TypeScript! 🏆
