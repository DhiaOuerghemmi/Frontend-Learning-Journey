# Tuples in TypeScript

## Overview
A **tuple** in TypeScript is a special type of array that allows you to define a fixed-length sequence of elements with specific types. Unlike regular arrays, tuples enforce a specific type at each index, making them useful for representing structured data with known types.

## Declaring a Tuple
To declare a tuple, use square brackets `[]` with explicit types for each position:

```typescript
let user: [string, number] = ["Alice", 25];
console.log(user); // Output: [ 'Alice', 25 ]
```

In this example:
- The first element must be a `string`.
- The second element must be a `number`.

## Accessing Tuple Elements
Tuple elements can be accessed using index notation:

```typescript
console.log(user[0]); // Output: Alice
console.log(user[1]); // Output: 25
```

## Modifying Tuple Elements
You can update tuple values, but they must respect the defined types:

```typescript
user[0] = "Bob";   // ✅ Allowed (string)
user[1] = 30;      // ✅ Allowed (number)
// user[1] = "Hello"; // ❌ Error: Type 'string' is not assignable to type 'number'
```

## Tuple with Optional Elements
Tuples can have optional elements using `?`:

```typescript
let product: [string, number, boolean?] = ["Laptop", 1200];
console.log(product); // Output: [ 'Laptop', 1200 ]
```

## Tuple with Rest Parameters
You can define a tuple with a variable number of elements using the **rest operator**:

```typescript
let scores: [string, ...number[]] = ["John", 90, 85, 88];
console.log(scores); // Output: [ 'John', 90, 85, 88 ]
```

## Using Tuples in Functions
Tuples are useful for returning multiple values from a function:

```typescript
function getUser(): [string, number] {
  return ["Eve", 28];
}

const userInfo = getUser();
console.log(userInfo); // Output: [ 'Eve', 28 ]
```

## Common Use Cases for Tuples
- Storing a pair of related values (e.g., name and age, coordinates, key-value pairs).
- Returning multiple values from a function.
- Handling structured data with a fixed format.

## Summary
- **Tuples are fixed-length arrays with specific types at each position.**
- **They help enforce type safety and improve code readability.**
- **They can include optional and rest elements for flexibility.**
- **Commonly used for structured data like database records, API responses, or function return values.**

### Next Steps
Now that you've learned tuples, consider exploring **TypeScript Enums** to manage sets of named constants efficiently!

