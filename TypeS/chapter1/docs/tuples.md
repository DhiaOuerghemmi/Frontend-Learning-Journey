# Tuples in TypeScript

Tuples in TypeScript allow you to create arrays with a fixed number of elements where each element can have a different type. This feature is especially useful when you need to represent a collection of values with a known structure, such as a pair of a name and an age, or multiple values returned from a function.

---

## Table of Contents

- [Introduction](#introduction)
- [Defining Tuples](#defining-tuples)
- [Accessing and Manipulating Tuples](#accessing-and-manipulating-tuples)
- [Tuples in Function Return Types](#tuples-in-function-return-types)
- [Benefits and Limitations](#benefits-and-limitations)
- [Best Practices](#best-practices)
- [Reflection](#reflection)

---

## Introduction

Tuples are similar to arrays but with one key difference: they have a fixed length and each element can have a specific, predetermined type. This makes tuples a powerful tool for scenarios where the structure and types of the data are known in advance.

---

## Defining Tuples

A tuple is declared by specifying the types of its elements in a fixed order inside square brackets.

### Basic Tuple Example

```typescript
// A tuple representing a person: [name, age]
let person: [string, number] = ["Alice", 30];

console.log(`Name: ${person[0]}, Age: ${person[1]}`);
// Output: Name: Alice, Age: 30
